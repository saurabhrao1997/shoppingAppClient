import React,{useState} from 'react'
import ImageDropZone from '../../Comman/ImageDropZone'
import {useCreateProductMutation} from "../../../APi/ProductApi"
import {useCategoryQuery} from "../../../APi/CategoryApi"
import { useNavigate } from 'react-router-dom'
import Loader from '../../Comman/Loader'
export default function CreateProduct() {
const navigate = useNavigate()
const [form,setForm]= useState({})
console.log("form",form)
    const [createProduct,{isLoading}] = useCreateProductMutation()
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
    createProduct(formData).then((res)=>{
        navigate("/productindex")
    })
}

  return (
    <>
      <div className='flex justify-between w-full py-10 bg-slate-600 px-10 mb-10'>

<div className="text-start  font-semibold text-[24px] capitalize   text-white">Create product</div> 
<div>
  {/* <input type="text"  className='border-2 px-4 py-1 rounded-full'/> <span className='border-2 border-white px-2 py-1 text-white rounded-lg'>Search</span> */}
</div>
</div>
<div className='w-full flex justify-center '>
     
     <div className='border-2 px-4 py-2 rounded-lg  shadow-lg bg-slate-200 w-full md:w-[80%] lg:w-[60%]'>
       
         <form action="" onSubmit={onSubmit} className='flex  gap-2'>
         <div className='flex flex-col'>
             <span className='text-lg capitalize'>product Images</span>
             {/* <input type="text" /> */}
              <ImageDropZone onCLick={(file)=>{console.log("file",file);onFileChanges(file)}}/>
         </div>
         <div className='w-full md:w-1/2'>
         <div className='flex flex-col'>
             <span>Name :</span>
             <input type="text" name={'name'} className='border-2 rounded-lg' onChange={onChange} />
         </div>
         <div  className='flex flex-col'>
             <span>Description :</span>
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
             <span>Price :</span>
             <input type="text"  name={'price'}  className='border-2 rounded-lg' onChange={onChange} />
         </div>
         <div  className='flex flex-col'>
             <span>Offer :</span>
             <input type="text" name={'offer'}  className='border-2 rounded-lg' onChange={onChange} />
         </div>
         <div  className='flex flex-col'>
             <span>Discount :</span>
             <input type="text" name={'discount'} className='border-2 rounded-lg' onChange={onChange} />
         </div>
         <div  className='flex flex-col'>
             <span>Quantity :</span>
             <input type="number"  name={"quantity"} className='border-2 rounded-lg' onChange={onChange} />
         </div>
         <div  className='flex flex-col mt-2'>
             <button className='transition-all px-4 py-1 border-2 rounded-md bg-orange-400 text-white hover:bg-orange-600 ' type='submit'>Submit</button>
         </div>
 
         </div>
        
       
         </form>
         
       
         
     </div>
    
     {(isLoading) && (
         <div className="absolute left-0 top-0 w-full h-screen">
           <Loader />
         </div>
       )}
    
    </div>
    
    </>
  
  )
}
