import React, { useState } from 'react'
import {useCategoryQuery,useCreateCategoryMutation} from '../../../APi/CategoryApi'
export default function CreateCategory() {
const [form,setForm] = useState({})
const {data:category} = useCategoryQuery()
console.log("category form",form)

const [createCategory] = useCreateCategoryMutation()
  const onSubmit =(e)=>{
     e?.preventDefault()
     createCategory(form)
  }

  const onChange = (e)=>{
     const {name,value} =e?.target
     setForm((pre)=> ({...pre,[name]:value}))
  }
  return (
    
    <div className=''>
         
    <div className='flex justify-between w-full py-10 bg-slate-600 px-10 mb-10'>

<div className="text-start  font-semibold text-[24px] capitalize   text-white">Create category</div> 
</div>

        <form action="" className='px-10 flex flex-col gap-4 border-2 mx-2 rounded-lg shadow-lg' onSubmit={onSubmit}>
      <span className='text-[20px]'>Form</span>
        <div>
             <spam>Label :</spam>
             <input type="text" className='border-2 rounded-lg' name='label' onChange={onChange} />
        </div>
        <div>
             <spam>Value :</spam>
             <input type="text" className='border-2 rounded-lg' name='value' onChange={onChange} />
        </div>
           <div>
            <button type='submit' className='border-2 px-4 py-1 rounded-lg ml-20 mb-2'>
                submit
            </button>
           </div>

        </form>


     { category &&  <div className='border-2 my-10 py-10 px-10 mx-2 rounded-lg shadow-lg'>
      <span className='text-[20px]'>List of Category</span>
      <div className='flex flex-wrap  gap-4 mt-4'>
      {  category?.data?.map((obj)=>{
           return(
            <div className='border-2 rounded-md px-2 py-1'>{obj?.label}</div>
           )
      })}

      </div>
     
        </div>}
       
        
  
        </div>
  )
}
