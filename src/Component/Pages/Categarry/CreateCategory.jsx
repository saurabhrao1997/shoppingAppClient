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
        <span>CreateCategory</span>
        <form action="" onSubmit={onSubmit}>

        <div>
             <spam>label</spam>
             <input type="text" className='border-2 rounded-lg' name='label' onChange={onChange} />
        </div>
        <div>
             <spam>value</spam>
             <input type="text" className='border-2 rounded-lg' name='value' onChange={onChange} />
        </div>
           <div>
            <button type='submit'>
                submit
            </button>
           </div>

        </form>


     { category &&  <div className='flex flex-wrap'>
      {  category?.data?.map((obj)=>{
           return(
            <div className='border-2 rounded-md px-2 py-1'>{obj?.label}</div>
           )
      })}
        </div>}
       
        
  
        </div>
  )
}
