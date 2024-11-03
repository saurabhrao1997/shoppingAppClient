import React from 'react'
import {useGetAllUserDetailQuery} from "../APi/userAPi"

export default function Users() {
    let {data:getAllUserData,isLoading:allUSrLoading}= useGetAllUserDetailQuery()
    console.log("sakjkjfkj",getAllUserData)
  return (
    <>
     <div className='flex justify-between w-full py-10 bg-slate-600 px-10 mb-10'>

<div className="text-start  font-semibold text-[24px] capitalize   text-white">Home</div> 
<div>
  {/* <input type="text"  className='border-2 px-4 py-1 rounded-full'/> <span className='border-2 border-white px-2 py-1 text-white rounded-lg'>Search</span> */}
</div>
</div>

{getAllUserData?.data?.length > 0 &&
<div className='  flex flex-col md:flex-row flex-wrap gap-x-10 gap-y-4'>
{
    getAllUserData?.data?.map((obj)=>{
        return (
            <>
            <div className='border-2 w-full md:1/2 lg:1/3 xl:w-1/4 rounded-lg flex flex-col justify-center items-center'>
             {obj?.image?.url &&    <img src={obj?.image?.url} alt="" />}
             <div>{obj?.Name}</div>
             <div>{obj?.email}</div>
             <div>{obj?.Mobile}</div>
             <div>{obj?.role}</div>
        { (localStorage.getItem("userId") == obj?._id) &&   <div className='bg-green-900 text-white text-sm px-4 py-1 rounded-full truncate'>Currently User Login</div>}
            </div>
            
            
            
            </>
        )
    })
}
</div>

}
    
   
    </>
  )
}
