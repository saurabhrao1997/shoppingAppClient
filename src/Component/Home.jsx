


import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment ,incrementByAmount} from '../Slices/CounterSlice'
import {useGetAllProductDetailQuery} from "../APi/ProductApi"
export default function  Home () {
  const count =    useSelector((state) => state.counter.value)
 
  const dispatch = useDispatch()
  const {data:productData} = useGetAllProductDetailQuery()
  console.log("proudct",productData)
  return (
    <>
    
    <div className='flex justify-between w-full py-10 bg-slate-600 px-10 mb-10'>

<div className="text-start  font-semibold text-[24px] capitalize   text-white">Home</div> 
<div>
  {/* <input type="text"  className='border-2 px-4 py-1 rounded-full'/> <span className='border-2 border-white px-2 py-1 text-white rounded-lg'>Search</span> */}
</div>
</div>
  
    <div className='flex flex-col gap-y-4 min-h-[500px] justify-center items-center'>
    <div className=''>
    <input type="number" className='border border-gray-400' onChange={(e)=>{dispatch(incrementByAmount(Number(e?.target?.value)))}}/>
   </div>
      <div className=''>
      <button
          aria-label="Decrement value"
           className='border-2 px-4 py-1 text-bold rounded-[5px]'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
       
        <span className='mx-10'>{count}</span>
     
        <button
          aria-label="Increment value"
          className='border-2 px-4 py-1 text-bold rounded-[5px]'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
    </div>
    
    </>
 
  )
}

