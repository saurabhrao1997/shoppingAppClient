import React from 'react'
import {useGetAllProductDetailQuery,useDeleteProductMutation} from "../../../APi/ProductApi"
import {useNavigate} from "react-router-dom"
import Delete from '../../Comman/Delete'
export default function ProductIndex() {
  const Navigate = useNavigate()
    const {data:productData} = useGetAllProductDetailQuery()
    const [deleteProduct] = useDeleteProductMutation()
    console.log("proudct",productData)
  return (
    <div className='px-10'>
      <div className="text-center mb-10">ProductIndex</div>
<div className='flex flex-wrap gap-10'>


     {productData && productData?.data?.map((obj)=>{
          return (
            <div key={obj?._id} className='border-2 rounded-lg  w-1/5' onClick={(e)=>{Navigate(`/productdetail/${obj?._id}`);}}>
             {obj?.productimage.length > 0 && <div className='' >
                <img src={obj?.productimage[0]?.url} alt="no image" className='w-full' />
              </div>}
              <div className=' px-4 py-1'>
              <div><span className='text-gray-400 font-bold'>Name:</span>{obj?.name}</div>
              <div><span className='text-gray-400 font-bold'>Description :</span>{obj?.description}</div>
              <div><span className='text-gray-400 font-bold'>Offer :</span> {obj?.offer}</div>
              <div><span className='text-gray-400 font-bold'>Discount : </span>{obj?.discount}</div>

              </div>
            
           <div className='' onClick={()=>{ deleteProduct(obj?._id);e?.stopPropagation() ;  }} >
            
            <Delete />
           </div>
            </div>
          )
     })

     }
     </div>
    </div>
  )
}
