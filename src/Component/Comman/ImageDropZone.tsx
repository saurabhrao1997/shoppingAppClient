import React,{useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { v4 as uuidv4 } from "uuid";
import Compressor from 'compressorjs';
export default function ImageDropZone({onCLick}) {
  const [file,setFile] = useState([])


  const handleCompressedUpload = async (e) => {
   
    const image = e;
    new Compressor(image, {
      maxWidth: 720,
      maxHeight: 720,
      quality: 0.3, // 0.6 can also be used, but its not recommended to go below.
      success: (compressedResult) => {
        // compressedResult has the compressed file.
        // Use the compressed file to upload the images to your server. 
        console.log("file compressfile",compressedResult)       
       setFile((pre)=> [ ...pre,Object.assign(compressedResult,{preview:URL.createObjectURL(compressedResult)})])
       onCLick([...file,compressedResult])
       
      },
    });

  };
  const onDrop = (acceptedFiles) => {
    acceptedFiles?.forEach(async (acceptedFile) => {
      const accFiles = acceptedFile;
      // onCLick([...file,acceptedFile])
          //  setFile((pre)=> [...pre,acceptedFile])
      console.log("file befour",accFiles)       
      let response = await fetch(URL.createObjectURL(accFiles));
      let data = await response.blob();
      let metadata = {
        type: "image/jpeg",
      };
      let files = new File(
        [data],
        `${uuidv4()}.jpeg`,
        metadata
      );

      await  handleCompressedUpload(files)
    })


    // setFile((pre) =>  [...pre,acceptedFiles])
    // Do something with the files
  }
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
    <>
    <div {...getRootProps()}>
      <input {...getInputProps()} />

      {
         <div className='border-red-400 border-2 border-dashed px-4 py-4 cursor-pointer'>
             <p>Drop the files here ...</p> 
             <p>Drag 'n' drop some files here, or click to select files</p>

        </div>
       
      }
    </div>

    <div>
      <div className='my-4 flex flex-wrap gap-2'>
      { file.length > 0 &&
        file?.map((image)=>
        
        ( 
          <div className='flex'>
                <img className='w-12 h-10' src={image?.preview} alt={"no image is loading"} />
          </div>

        )
        
        )
      }
       </div>
    </div>

    </>
  ) 
}
