import React from 'react'
import {useGetAllNotificationQuery} from "../APi/NotificationApi"
export default function Notification() {
    const {data} = useGetAllNotificationQuery(localStorage.getItem("userId"),{skip:!localStorage.getItem("userId")})
    console.log("data",data)
  return (
  <div>
    {
        data && data?.result?.map((notification)=>{
            return <div className='text-[12px] border-b-2 py-1'>
                <div className=''>{notification?.message}</div> 
                <div>{new Date(notification?.createdAt).toLocaleString()}</div> 
                
                </div>
        })
    }
  </div>
  )
}
