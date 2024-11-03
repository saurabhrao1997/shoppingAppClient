import React,{useMemo, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Delete from '../../Comman/Delete'
import Button from "../../Comman/Button"
import { useCreateCategoryMutation } from '../../../APi/OrderApi'
export default function PlaceOder() {
    const wishList = useSelector((state)=> state.wishlist)
const [step,setStep] = useState(1)
const [shippingAddress,setShippingAddress] = useState({})
const onChange = (e)=>{
   const {name,value} = e?.target;
   setShippingAddress((pre)=> ({...pre,[name]:value}))

}

console.log("askasjsfkj",   wishList?.wishlist?.reduce((sum,obj)=>{
  obj?.price
  sum= sum +  Number(obj?.price);
  return sum
},0))


const totalPrice = useMemo(()=> {
  if(wishList?.wishlist?.length > 0){
  return  wishList?.wishlist?.reduce((sum,obj)=>{
      obj?.price
      sum= sum +  Number(obj?.price);
      return sum
    },0)
  }
},[wishList?.wishlist])

  return (
    <>
<div className='text-center font-bold my-2'>Place order</div>
    {
        step == 0 && <div>
            <div className='flex flex-col gap-y-4 mx-auto border-2 px-10'>
                <div className='font-bold'>shipping Address</div>
                <div  className='flex items-start'>Address : <textarea rows={3} className='border-2 rounded-md' name='address' onChange={onChange}/></div>
                <div>pin code: <input type='number' className='border-2 rounded-md' name='pinCode' onChange={onChange}/></div>
                <div>City: <input type='text' className='border-2 rounded-md' name='city' onChange={onChange}/></div>
                <div>Country: <input type='text' className='border-2 rounded-md' name='country' onChange={onChange}/></div>
              <div className='w-1/6  flex justify-end'>

                <button className='border-2 px-4 py-1 rounded-lg bg-blue-600 text-white'
                onClick={()=>{
                  if(shippingAddress?.address && shippingAddress?.pinCode && shippingAddress?.city && shippingAddress?.country){
                    setStep(1)
                  }
                }}
                >Next</button>
              </div>
            </div>
        </div>
    }
    {
        step == 1 && <div>
           
           <div>
        {wishList?.wishlist?.length > 0 &&
          wishList?.wishlist.map((obj, inx) => {
            console.log("sajkjkfj",obj?.discount,obj?.price,obj?.rating,obj)
            return (
              <div className="border-2 px-4 py-2 rounded-lg flex justify-between items-center mx-2 my-4 shadow-lg">
                <div className="flex gap-4">
                  <img
                    className="w-32"
                    src={obj?.productimage[0]?.url}
                    alt=""
                  />
                  <div className='flex flex-col'>
                    <div>{ obj?.name}</div>
                    <div>{obj?.price}</div>
                    <div>{obj?.rating}</div>
                    <div>{obj?.discount}</div>
                  </div>
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

       <div className='flex justify-between mr-10'>
        <div>Total Price : {totalPrice ? totalPrice : 0}</div>
          <div>
            <Button onClick={()=>{
              payloadData = {
                users:"id",
                orderItems:[{
                  name:"",
                  qty:"",
                  price:"",
                  product:"id"
                }],
                shippingAddress:{
                   address:"",
                   city:"",
                   postalCode:"",
                   country:""
                },
                paymentMethod:"",
                paymentResult:{
                  id:"",
                  status:"",
                  updateTime:"date",
                  emailAddress:""
                },
                itemsPrice:"number",
                taxPrice:"number",
                shippingPrice:"number",
                TotalPrice:"number",
                isPaid:"number",
                paidAt:"date",
                isDelivered:"status",
                deliveredAt:"date"

              }

useCreateCategoryMutation(payloadData).then((res)=>{console.log("sakjsfk",res)}).catch((err)=>{console.log('skjkjsdg',err)})




          }}>Buy now</Button></div>
       </div>




        </div>
    }
    
    

    </>
  )
}
