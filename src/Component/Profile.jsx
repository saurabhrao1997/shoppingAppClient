import React,{useState,useEffect} from 'react'
import {useGetUserDetailQuery,useGetAllUserDetailQuery,useUpdateuserprofileMutation,useUpdateUserProfileImageMutation} from "../APi/userAPi"
import Button from './Comman/Button'
import Modal from './Comman/Modal'
export default function Profile() {
const [showModal,setShowModal] = useState(false)
let {data:getUserData,isLoading:userLoading}= useGetUserDetailQuery(localStorage.getItem("userId"),{skip:!localStorage.getItem("userId")})
let {data:getAllUserData,isLoading:allUSrLoading}= useGetAllUserDetailQuery()
const [form,setForm] = useState({})
 let [updateuserprofile] = useUpdateuserprofileMutation()
 console.log("getUser and getAllUser",getUserData,getAllUserData)

 const onChange = (e)=>{
    const {name,value} = e?.target;
    setForm((pre)=>({...pre,[name]:value}))
 }
 const onSubmit =()=>{
  console.log("aslklklsklgk",form)
  updateuserprofile({...form,id:getUserData?.data?._id}).then((res)=> {console.log("response",res);setShowModal(false)})
 }

const [image,setImage] = useState({})
console.log("lklklakglk",getUserData)
const [updateUserProfileImage,{isLoading:imageLoading}] = useUpdateUserProfileImageMutation()
useEffect(()=>{
  if(image?.name){
    const imageForm = new FormData()
    imageForm.append("image",image)
    imageForm.append("id",localStorage.getItem("userId"))

    updateUserProfileImage(imageForm).then((res)=>{console.log( "res from image",res)})
  }
},[image])


  return (
    <>
    <div className="text-center">Profile</div>

   
    <div className='flex flex-col gap-y-4 mt-10 items-center'>
    <div className='border-2 w-32 h-32 rounded-full flex flex-col justify-center items-center'>
      <img className='w-full h-full rounded-full ' src={getUserData?.data?.image} alt="no image uploaded yet" />
      

     
     
    </div>
{   imageLoading && <span>loading.....</span>}
    <input className='' type="file" onChange={(e)=>{setImage(e?.target?.files[0])}} />

      <span>{getUserData?.data?.Name}</span>
      <span>{getUserData?.data?.email}</span>
      <span>{getUserData?.data?.Mobile}</span>
    <Button onClick={()=>{setShowModal(true)}}>Update</Button>
    </div>

    <Modal
  showModal={showModal}
  setShowModal={setShowModal}
  onSave={()=>{
   
    onSubmit()
  }}
     heading={"update user profile"}
     content={
      <>
         <form className="space-y-4" action="#">
                     <div>
                        <label for="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                        <input type="name" name="Name" id="Name" placeholder="your name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required  onChange={onChange}/>
                    </div>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required onChange={onChange} />
                    </div>
                 
                  
                   
                  
                </form>
      </>
     }
     />

    </>
  )
}
