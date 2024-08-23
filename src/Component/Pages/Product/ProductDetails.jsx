import React, { useEffect,useState } from 'react'
import {  useParams } from 'react-router-dom';
import {useGetProductDetailQuery,useGetSearchProductQuery} from "../../../APi/ProductApi"
import {useNavigate} from "react-router-dom"
import  ProdutCard from '../Product/ProdutCard'
export default function ProductDetails() {
  const Navigate = useNavigate()
  const [search,setSearch]=useState("")
    const {id} = useParams()
    const {data} = useGetProductDetailQuery(id,{skip:!id})
    const {data:searchProductData} = useGetSearchProductQuery(search,{skip:!search})
    console.log("data",data,searchProductData)
    useEffect(()=>{
      if(data?.data?.length > 0){
        setSearch(data?.data[0]?.category?.label)
      }
    },[data])
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
      <div className='px-4 mb-10 '>
      <div className='font-bold my-2'>Relative Product</div>
      <div className='flex gap-4 overflow-x-auto py-1 border-2 rounded-md px-1'>

      {
        searchProductData && searchProductData?.data?.map((obj)=>{
           return(
                
            <ProdutCard
            showAdditionFeature={false}
            id={obj?._id}
            url={obj?.productimage[0]?.url}
            name={obj?.name}
            description={obj?.description}
            offer={obj?.offer}
            discount={obj?.discount}
            onCardClick={(e)=>{
              Navigate(`/productdetail/${obj?._id}`); e.stopPropagation()
            }}
            // onDeleteClick={(e)=>{
            //   setShowModal(true);setDeleteId(obj);e?.stopPropagation();
            // }}
            // onWishList={(e)=>{
            //   dispatch(addToWishlist(obj));e.stopPropagation(); 
            // }}
            />

           )
        })
      }
      </div>
      </div>




    </div>

  )
}
