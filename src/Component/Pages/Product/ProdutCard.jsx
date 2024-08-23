import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import WishListIcon  from "../../Comman/WishListIcon"
import Delete from '../../Comman/Delete';
export default function ProdutCard({id,url,name,description,offer,discount,onCardClick,onDeleteClick,onWishList,showAdditionFeature=true}) {
    const Navigate = useNavigate()
    let someDiv = {
        lineHeight: "1.5em",
        height: "3em",
        overflow: "hidden",
        whiteSpace: "wrap",
        textOverflow: "ellipsis",
        width: "100%",
    }
    const wishlist = useSelector((state)=> state.wishlist)
  return (
    <div key={id} className='border-2 rounded-lg  w-1/5 shadow-lg bg-slate-200' onClick={onCardClick}>
    {url && <div className='' >
       <img src={url} alt="no image" className='w-full' />
     </div>}
     <div className='flex flex-col justify-between'>

   
     <div className=' px-4 py-1'>
     <div style={someDiv}><span className='text-gray-400 font-bold' >Name:</span>{name}</div>
      <div style={someDiv}><span className='text-gray-400 font-bold'>Description :</span>{description}</div>
     <div><span className='text-gray-400 font-bold'>Offer :</span> {offer}</div>
     <div><span className='text-gray-400 font-bold'>Discount : </span>{discount}</div>

     </div>
 { showAdditionFeature && <div className='flex justify-end items-end gap-2'>
   <div className=''onClick={onDeleteClick}>
   
   <Delete />
  </div>
  <div className='' onClick={onWishList}>
 <WishListIcon selected={wishlist?.wishlist.find((objj)=> objj?._id == id)}/>
  </div>

   </div>}
   </div>


   </div>
  )
}
