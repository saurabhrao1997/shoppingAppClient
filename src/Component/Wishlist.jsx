import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addToWishlist, RemoveFromWishList, RemoveAllWishlist  } from '../Slices/WishListSlice'
import Delete from './Comman/Delete'
export default function Wishlist() {
    const wishList = useSelector((state)=> state.wishlist)
    const dispatch = useDispatch()
    console.log("wishList",wishList)
  return (
    <>
    <div className='w-full text-center'>Wishlist</div>
    <div>{  wishList?.wishlist?.length > 0 &&
      wishList?.wishlist.map((obj,inx)=>{
        console.log("asddldkladk",obj)
        return(
          <div className='border-2 px-2 py-1 rounded-lg flex justify-between items-center mx-2'>
            <div className='flex'>
            <img className='w-32' src={obj?.productimage[0]?.url} alt="" />
              {
                obj?.name
              }

            </div>
        
            <div className='' onClick={()=>{dispatch(RemoveFromWishList(inx));}} >
            
            <Delete />
           </div>
          

          
              
          </div>
        )
      })}

    </div>
    
    
    
    </>
  )
}
