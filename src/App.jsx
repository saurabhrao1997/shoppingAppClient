import React, { useState ,Suspense, useEffect} from 'react'
import {useNavigate,useLocation} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ErrorBoundary from "./Component/ErrorBoundry"
// import './App.css'
import { Routes,Route } from 'react-router-dom'
import Loader from './Component/Comman/Loader'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const Home = React.lazy(()=> import("./Component/Home") )
const AllUsers = React.lazy(()=> import("./Component/Users") )
const Navbar = React.lazy(()=> import("./Component/Navbar") )
const Setting = React.lazy(()=> import("./Component/Setting") )
const Profile = React.lazy(()=> import("./Component/Profile") )
const AllOder = React.lazy(()=> import("./Component/Pages/Oder/AllOder") )
const ProductIndex = React.lazy(()=> import("./Component/Pages/Product/ProductIndex") )
const CreateProduct = React.lazy(()=> import("./Component/Pages/Product/CreateProduct") )
const CreateCategory = React.lazy(()=> import("./Component/Pages/Categarry/CreateCategory") )
const ProductDetails = React.lazy(()=> import("./Component/Pages/Product/ProductDetails") )
const OrderPace = React.lazy(()=> import("./Component/Pages/Oder/PlaceOder") )
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
const initialOptions = {
  // clientId: import.meta.env.PAYPAL_CLIENT_ID,
  "client-id":import.meta.env.VITE_PAYPAL_CLIENT_ID,
  currency: "USD",
  vault:"true",
  intent: "capture",
};


  return (
    <>
    <ErrorBoundary fallback="Error">
    <Suspense  fallback={<div className='absolute top-0 w-full min-h-screen'><Loader/></div>}>
     { (location?.pathname !== "/register" && location?.pathname !== "/login") &&  <Navbar/> }
     <div  className='min-h-[calc(100vh-4.600rem)] bg-[url(/background.svg)] bg-no-repeat bg-cover'>
     <PayPalScriptProvider options={initialOptions} style={{ layout: "horizontal" }}>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/users' element={<AllUsers/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/Setting' element={<Setting/>} />
      <Route path='/order' element={<AllOder/>} />
      <Route  path='/productindex' element={<ProductIndex/>} />
      <Route  path='/productdetail/:id' element={<ProductDetails/>} />
      <Route path='/createproduct' element={<CreateProduct/>} />
      <Route path='/createcategory' element={<CreateCategory/>} />
      <Route path='/wishlist' element={<WishListPage/>} />
      <Route path='/placeorder' element={<OrderPace/>} />
   
    </Routes>
    </PayPalScriptProvider>

     </div>

    </Suspense>
    </ErrorBoundary>
    
    </>
  )
}

export default App
