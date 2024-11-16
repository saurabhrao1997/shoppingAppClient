import React from 'react'
import {useGetAllOrderQuery} from "../../../APi/OrderApi"
export default function AllOder() {

    const {data} = useGetAllOrderQuery()
    console.log("jskafkasj",data)

  return (
    <>
    <div className='flex justify-between w-full py-10 bg-slate-600 px-10 mb-10'>

<div className="text-start  font-semibold text-[24px] capitalize   text-white">Oder</div> 
<div>
  {/* <input type="text"  className='border-2 px-4 py-1 rounded-full'/> <span className='border-2 border-white px-2 py-1 text-white rounded-lg'>Search</span> */}
</div>
</div>
    {
        data && data?.data?.map((obj)=>{
    
    
          return(
            <div className='shadow-lg border-orange-400 px-1 py-2 bg-gray-50 mx-1'>
            <div className='border-2 px-2 py-1 shadow-lg mx-2 my-1 rounded-lg'>
            {
                obj?.orderItems?.map((obj1)=>{
                    console.log("salalf",obj1)
                  return(
                    <div className='flex gap-2'>
                    <div>

              { obj1?.product?.productimage?.length > 0 && <img src={obj1?.product?.productimage[0]?.url} className='w-20 h-12' alt="dsjgks" />}
                    </div>
                    <div>
                    <div>Product Name :{obj1?.name}</div>
                    <div>Product Price :{obj1?.price}</div>
                        
                    </div>
                  
                    </div>

                  )
                })
            }


            </div>
            <div className='border-2 px-2 py-1 shadow-lg mx-2 my-1 rounded-lg'>
                {
                   Object.keys(obj?.shippingAddress)?.map((ads,index,arr)=>{
                     return (
                        <>
                        
                        <div>{ads} :{obj?.shippingAddress[ads]}</div>
                       

                        </>
                     )
                   })
                }

            </div>
            <div className='border-2 px-2 py-1 shadow-lg mx-2 my-1 rounded-lg'>
                <div>Total : {obj?.totalPrice}</div>
                <div>Shipping Address : {obj?.shippingPrice}</div>
                <div>Tax Price : {obj?.taxPrice}</div>
                <div>payment Time : {obj?.createdAt}</div>
                <div>Delivered : {obj?.isDelivered}</div>
                <div>Paid :{obj?.isPaid}</div>
                <div>Payment Method :{obj?.paymentMethod}</div>
                <div>Status :{obj?.paymentResult?.status}</div>
            </div>
            
            
            
            </div>
          )
        })
    }
    
    </>
  )
}
