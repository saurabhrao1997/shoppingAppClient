import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
export default function Login() {
  const navigate = useNavigate()
  const [form,setForm] = useState({})
  const onSubmit =async(e)=>{
      e?.preventDefault()
    try {
   let response =   await fetch("http://localhost:5000/api/v1/login",{
        method:"POST",
        headers:{
          "Content-type": "application/json",
        },
        body:JSON.stringify(form)

      }) 
      if(response.status == 200){
        let result = await response.json()
        console.log("result",result?.data?.token)
        if(result?.message == "success"){
          localStorage.setItem("token",result?.data?.token)
          localStorage.setItem("userId",result?.data?._id)
          localStorage.setItem("userName",result?.data?.Name)
          alert(`${result?.data?.Name} your login successfully done`)
          navigate("/")
        }
      }
    } catch (error) {
     console.log("error",error) 
    }

  }
  const onChange = async(e)=>{
    const {name,value} = e?.target;
    setForm((pre)=>({...pre,[name]:value}))
  }
  return (
   <>
   
   <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#"  onSubmit={onSubmit}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={onChange}/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500" onClick={()=>{navigate("/resetpassword")}}>Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={onChange}/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
    </p>
  </div>
</div>
   
   </>
  )
}
