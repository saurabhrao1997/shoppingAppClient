import React from 'react'
import {  useParams } from 'react-router-dom';
import {useGetProductDetailQuery} from "../../../APi/ProductApi"
export default function ProductDetails() {
    const {id} = useParams()
    const {data} = useGetProductDetailQuery(id,{skip:!id})
    console.log("data",data)
  return (
    <div>
      <div className='text-center'>ProductDetails</div>
      
      <div>
        {
          data && data?.data.map((obj,ind)=>{
            return(
          <div key={ind} className='w-full flex'>
            <div className='w-1/2  flex flex-col'>
            <div className='w-full'>
              <img className='w-full' src={obj?.productimage[0]?.url} alt="" />
            </div>
            <div className=' flex flex-wrap'>
            {obj?.productimage?.map((image,inx)=>{
              return(
              <div key={inx+"images"} className=''>
                <img className='w-20' src={image?.url} alt="" />
              </div>
              )
            })}

            </div>

            </div>
            <div className='w-1/2  flex flex-col'>
            <div><span>Name :</span><span className='text-lg'>{obj?.name}</span> </div>
            <div><span>Description :</span><span className='text-gray-500'>{obj?.description}</span></div>
            <div><span>Offer :</span><span className='text-lime-800'>{obj?.offer}</span></div>
            <div><span>Quantity :</span><span className='text-blue-600'>{obj?.quantity}</span></div>
            <div><span>Price :</span><span className='text-blue-600'> {obj?.price}</span></div>
       
          
  
         

            </div>
          </div>)
          })
        }
      </div>




    </div>

  )
}
