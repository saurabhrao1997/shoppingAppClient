


import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Slices/CounterSlice'
import {useGetAllProductDetailQuery} from "../APi/ProductApi"
export default function  Home () {
  const count =    useSelector((state) => state.counter.value)
 
  const dispatch = useDispatch()
  const {data:productData} = useGetAllProductDetailQuery()
  console.log("proudct",productData)
  return (
    <>
    
   <h1 className='flex justify-center font-bold'>Home</h1>

    <div className='flex min-h-[500px] justify-center items-center'>
      <div className=''>
        <button
          aria-label="Increment value"
          className='border-2 px-4 py-1 text-bold rounded-[5px]'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className='mx-10'>{count}</span>
        <button
          aria-label="Decrement value"
           className='border-2 px-4 py-1 text-bold rounded-[5px]'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
    
    </>
 
  )
}

