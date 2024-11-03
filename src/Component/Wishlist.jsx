import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addToWishlist, RemoveFromWishList, RemoveAllWishlist  } from '../Slices/WishListSlice'
import Delete from '../Component/Comman/Delete'
import { useNavigate } from 'react-router-dom'
export default function Wishlist() {
  const navigate = useNavigate()
    const wishList = useSelector((state)=> state.wishlist)
    const dispatch = useDispatch()
    console.log("wishList",wishList)
  return (
    <>
      <div className="flex justify-between w-full py-10 bg-slate-600 px-10 mb-10">
        <div className="text-start  font-semibold text-[24px] capitalize   text-white">
          List of Wish Cart items
        </div>
      </div>

      <div>
        {wishList?.wishlist?.length > 0 &&
          wishList?.wishlist.map((obj, inx) => {
            return (
              <div className="border-2 px-4 py-2 rounded-lg flex justify-between items-center mx-2 my-4 shadow-lg ">
                <div className="flex gap-4">
                  <img
                    className="w-32"
                    src={obj?.productimage[0]?.url}
                    alt=""
                  />
                  {obj?.name}
                </div>

                <div
                  className=""
                  onClick={() => {
                    dispatch(RemoveFromWishList(inx));
                  }}
                >
                  <Delete />
                </div>
              </div>
            );
          })}
      </div>
      <div className='flex justify-center'>
        <button className='transition-all hover:shadow-lg px-4 py-1 bg-orange-500 hover:bg-orange-800 text-white rounded-full' 
        onClick={()=>{navigate("/placeorder")}}
        >Place Order</button>
      </div>
    </>
  );
}
