import React,{useState} from 'react'
import ImageDropZone from '../../Comman/ImageDropZone'
import {useCreateProductMutation} from "../../../APi/ProductApi"
import {useCategoryQuery} from "../../../APi/CategoryApi"
export default function CreateProduct() {

const [form,setForm]= useState({})
console.log("form",form)
    const [createProduct] = useCreateProductMutation()
    const {data:category} = useCategoryQuery()

const onChange = (e) =>{
    const {name,value} = e?.target
    setForm((pre)=> ({...pre,[name]:value}))
}

const onFileChanges = (file)=>{
    console.log("saklalgkl",file)
    setForm((pre)=>({...pre,
        image:file

    }))
}

const onSubmit = (e)=>{
    e?.preventDefault();

    const formData = new FormData()
    for(let key in form){

        if(!(key =="image")) formData.append(`${key}`,`${form[key]}`)
    }
    form?.image &&  form?.image.forEach((file)=>{
        formData.append("productimage",file)
    })
    // formData.append("productimage",form?.image)
    createProduct(formData)
}

  return (
   <div className='w-full h-screen flex justify-center items-center bg-orange-200'>
    
    <div className='border-2 px-4 py-2 rounded-lg shadow-orange-400 shadow-lg bg-orange-100 w-full md:w-[50%] lg:w-[40%]'>
        <div className='flex justify-center'>
            <span className='text-lg font-bold text-center capitalize'>create product</span>
        </div>
        <form action="" onSubmit={onSubmit} className='flex flex-col gap-2'>
        <div className='flex flex-col'>
            <span className='text-lg capitalize'>product Images</span>
            {/* <input type="text" /> */}
             <ImageDropZone onCLick={(file)=>{console.log("file",file);onFileChanges(file)}}/>
        </div>
        <div className='flex flex-col'>
            <span>name :</span>
            <input type="text" name={'name'} className='border-2 rounded-lg' onChange={onChange} />
        </div>
        <div  className='flex flex-col'>
            <span>description :</span>
            <input type="text" name={'description'}   className='border-2 rounded-lg'  onChange={onChange}/>
        </div>
        <div  className='flex flex-col'>
            <span>category :</span>
            <select name={"category"} onChange={onChange}>
                <option value=""></option>
                {(category && category?.data?.length > 0) &&
                    category?.data?.map((obj)=>{
                      return  <option value={obj?._id}>{obj?.label}</option>
                    })
                }
            </select>
            {/* <input disabled={true} type="text" name={'category'}  className='border-2 rounded-lg disabled:bg-gray-300' onChange={onChange}  /> */}
        </div>
        <div  className='flex flex-col'>
            <span>price :</span>
            <input type="text"  name={'price'}  className='border-2 rounded-lg' onChange={onChange} />
        </div>
        <div  className='flex flex-col'>
            <span>offer :</span>
            <input type="text" name={'offer'}  className='border-2 rounded-lg' onChange={onChange} />
        </div>
        <div  className='flex flex-col'>
            <span>discount :</span>
            <input type="text" name={'discount'} className='border-2 rounded-lg' onChange={onChange} />
        </div>
        <div  className='flex flex-col'>
            <span>quantity :</span>
            <input type="number"  name={"quantity"} className='border-2 rounded-lg' onChange={onChange} />
        </div>
        <div  className='flex flex-col'>
            <button className='transition-all px-4 py-1 border-2 rounded-md bg-orange-400 text-white hover:bg-orange-600 ' type='submit'>submit</button>
        </div>
        </form>
        
      
        
    </div>
   
   
   
   </div>
  )
}
