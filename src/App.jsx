import React, { useState ,Suspense, useEffect} from 'react'
import {useNavigate,useLocation} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ErrorBoundary from "./Component/ErrorBoundry"
// import './App.css'
import { Routes,Route } from 'react-router-dom'
import Loader from './Component/Comman/Loader'

const Home = React.lazy(()=> import("./Component/Home") )
const Navbar = React.lazy(()=> import("./Component/Navbar") )
const Setting = React.lazy(()=> import("./Component/Setting") )
const Profile = React.lazy(()=> import("./Component/Profile") )
const ProductIndex = React.lazy(()=> import("./Component/Pages/Product/ProductIndex") )
const CreateProduct = React.lazy(()=> import("./Component/Pages/Product/CreateProduct") )
const CreateCategory = React.lazy(()=> import("./Component/Pages/Categarry/CreateCategory") )
const ProductDetails = React.lazy(()=> import("./Component/Pages/Product/ProductDetails") )
const WishListPage = React.lazy(()=> import("./Component/Wishlist") )

const Login = React.lazy(()=> import("./Component/Login") )
const Register = React.lazy(()=> import("./Component/Register") )
const ResetPassword = React.lazy(()=> import("./Component/ResetPassword") )
function App() {
const navigate =   useNavigate()
  useEffect(()=>{
  
  },[])

  const checkUserlogin =()=>{
    console.log("dsglskglk",localStorage.getItem("token"))
    if(localStorage.getItem("token") == null || !localStorage.getItem("token") ){
     navigate("/login")
    }

  }
  // useEffect(()=>{
  //   checkUserlogin()
  // },[])
  

const location = useLocation()

  return (
    <>
    <ErrorBoundary fallback="Error">
    <Suspense  fallback={<><Loader/></>}>
     { (location?.pathname !== "/register" && location?.pathname !== "/login") &&  <Navbar/> }
     <div  className='min-h-[calc(100vh-4.600rem)] bg-[url(/background.svg)] bg-no-repeat bg-cover'>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/Setting' element={<Setting/>} />
      <Route  path='/productindex' element={<ProductIndex/>} />
      <Route  path='/productdetail/:id' element={<ProductDetails/>} />
      <Route path='/createproduct' element={<CreateProduct/>} />
      <Route path='/createcategory' element={<CreateCategory/>} />
      <Route path='/wishlist' element={<WishListPage/>} />
   
    </Routes>

     </div>

    </Suspense>
    </ErrorBoundary>
    
    </>
  )
}

export default App
