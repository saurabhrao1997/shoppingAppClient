import React ,{useState}from 'react'
import {useGetAllProductDetailQuery,useDeleteProductMutation} from "../../../APi/ProductApi"
import {useNavigate} from "react-router-dom"
import Delete from '../../Comman/Delete'
import { useSelector, useDispatch } from 'react-redux'
import {addToWishlist, RemoveFromWishList, RemoveAllWishlist  } from '../../../Slices/WishListSlice'
import WishListIcon from "../../Comman/WishListIcon"
import Modal from '../../Comman/Modal'
import Loader from '../../Comman/Loader'
import ProdutCard from './ProdutCard'

export default function ProductIndex() {
  const Navigate = useNavigate()
  const wishlist = useSelector((state)=> state.wishlist)
  const [deleteId,setDeleteId] = useState({})
  const [showModal,setShowModal] = useState(false)
  console.log("wishLiist",wishlist)
  const dispatch = useDispatch()
    const {data:productData,isLoading:productLoading} = useGetAllProductDetailQuery()
    const [deleteProduct,{isLoading:deleteLoading}] = useDeleteProductMutation()
    console.log("proudct",productData)
  
  return (
    <div className=''>
      <div className='flex justify-between w-full py-10 bg-slate-600 px-10 mb-10'>

      <div className="text-start  font-semibold text-[24px] capitalize   text-white">Product</div> 
      <div>
        <input type="text"  className='border-2 px-4 py-1 rounded-full'/> <span className='border-2 border-white px-2 py-1 text-white rounded-lg'>Search</span>
      </div>
      </div>
<div className='flex flex-wrap gap-10 px-10'>


     {productData && productData?.data?.map((obj)=>{
          return (
            <ProdutCard
            id={obj?._id}
            url={obj?.productimage[0]?.url}
            name={obj?.name}
            description={obj?.description}
            offer={obj?.offer}
            discount={obj?.discount}
            onCardClick={(e)=>{
              Navigate(`/productdetail/${obj?._id}`); e.stopPropagation()
            }}
            onDeleteClick={(e)=>{
              setShowModal(true);setDeleteId(obj);e?.stopPropagation();
            }}
            onWishList={(e)=>{
              dispatch(addToWishlist(obj));e.stopPropagation(); 
            }}
            />
           
          )
     })

    }
     </div>

     
    <Modal
  showModal={showModal}
  setShowModal={setShowModal}
  saveName={"Delete"}
  onSave={()=>{
   
    deleteProduct(deleteId?._id).then((res)=>{ setShowModal(false);setDeleteId({})}).catch((err)=>{console.log(err)});
  }}
     heading={"Delete Product"}
     content={
      <>
       <div className='text-white'>
        Don't get again, are you sure to delete these product ?
       </div>
      </>
     }
     />
       {(deleteLoading || productLoading) && (
        <div className="absolute left-0 top-0 w-full h-screen">
          <Loader />
        </div>
      )}
    </div>
  )
}
