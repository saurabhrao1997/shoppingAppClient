import React,{useEffect,useState} from 'react'
import {Navigate, NavLink} from "react-router-dom"
import {useGetUserDetailQuery} from "../APi/userAPi"
import { useSelector, useDispatch } from 'react-redux'
export default function Navbar() {
  const [hoverProfile,setHoverProfile] = useState(false)
  let {data:getUserData,isLoading:userLoading}= useGetUserDetailQuery(localStorage.getItem("userId"),{skip:!localStorage.getItem("userId")})
  const wishlist = useSelector((state)=> state.wishlist)
console.log("wishlist navabr",wishlist,wishlist?.wishlist?.length)
  return (


<>
<nav className="bg-gray-800">
  <div className="mx-auto  px-10">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    
        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
         
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
       
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          

<svg width="40px" height="40px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg" fill='white'><path d="M882.7 305.3c11.6 14.7 15.7 33.5 11.3 51.6l-43.4 179.9c-8.1 33.5-37.8 56.9-72.3 56.9H454.2v-20.1h324.1c25.1 0 46.8-17.1 52.8-41.5l43.4-179.9c2.9-12.1 0.2-24.7-7.5-34.5s-19.3-15.4-31.8-15.4H336.4v-20.1H835.3c18.5 0 35.8 8.4 47.4 23.1z" fill="#ffffff" /><path d="M800.5 701.8v20.1H415.1c-28.3 0-53.1-19.1-60.4-46.5L233 215.7c-4.9-18.6-21.8-31.5-40.9-31.5h-84.2v-20.1H192c28.3 0 53.1 19.1 60.4 46.5l121.8 459.7c4.9 18.5 21.8 31.5 41 31.5h385.3zM750.2 757.1c38.1 0 69.1 31 69.1 69.1 0 38.1-31 69.1-69.1 69.1s-69.1-31-69.1-69.1c0-38.1 31-69.1 69.1-69.1z m49 69.1c0-27-22-49-49-49s-49 22-49 49 22 49 49 49 49-22 49-49z" fill="ffffff" /><path d="M765.5 199.4V248c0 10.6-8.6 19.1-19.2 19.1h-1.6v15h-8.9v-15h-93.7v15h-10.4v-91c-0.9 0-1.7 0.1-2.5 0.1-7.1 0-14.6-0.2-22.5-0.7h-2.2c-3.1 0.2-6.1 0.3-9.1 0.4v91.2H585v-15h-96.3v15h-8.9v-15h-4.2c-10.6 0-19.2-8.6-19.2-19.1v-48.7c0-10.6 8.6-19.1 19.2-19.1h42.8c-7.4-3.9-13-8.7-16.3-14.6-10.3-18.2 3-37.9 3.6-38.7 9.6-11.6 20.3-16.7 32.3-15.3 30.3 3.4 58.3 48.9 67.6 65.5 9.3-16.6 37.3-62.1 67.6-65.5 11.9-1.3 22.7 3.7 32 14.9 0.9 1.2 14.1 21 3.9 39.1-3.3 5.9-8.9 10.7-16.3 14.6h53.6c10.6 0 19.1 8.6 19.1 19.2zM755.2 248v-48.7c0-4.8-3.9-8.8-8.8-8.8h-98.3c-1.9 0.1-3.9 0.3-5.9 0.4v65.9h104.2c4.8 0 8.8-3.9 8.8-8.8zM700 160.5c7.1-12.5-3-27.7-3.1-27.8-6.7-8.1-14.3-11.8-22.5-10.8-22.4 2.5-47 37.9-58.6 58.3h33.4c33.1-2.5 46.1-11.4 50.8-19.7z m-138.2 19.7h33.7c-11.6-20.4-36.2-55.8-58.6-58.3-8.3-0.9-15.8 2.7-22.8 11.2 0 0-9.8 15-2.8 27.4 4.7 8.2 17.6 17.2 50.5 19.7z m23.3 76.6v-65.6h-3c-6.8 0-13-0.3-18.9-0.7h-87.5c-4.8 0-8.8 3.9-8.8 8.8V248c0 4.8 3.9 8.8 8.8 8.8h109.4z" fill="#ffffff" /><path d="M755.2 199.4V248c0 4.8-3.9 8.8-8.8 8.8H642.2V191c2-0.1 4-0.2 5.9-0.4h98.3c4.8 0 8.8 3.9 8.8 8.8z" fill="#ffffff" /><path d="M642.2 267.2h93.7v15h-93.7z" fill="#ffffff" /><path d="M696.9 132.7c0.1 0.2 10.2 15.3 3.1 27.8-4.7 8.2-17.7 17.2-50.8 19.7h-33.4c11.6-20.4 36.2-55.8 58.6-58.3 8.3-1 15.8 2.7 22.5 10.8zM606.7 190.6c7.9 0.5 15.4 0.7 22.5 0.7 0.9 0 1.7-0.1 2.5-0.1v91h-36.4V191c3-0.1 6-0.2 9.1-0.4h2.3zM595.5 180.2h-33.7c-32.9-2.5-45.9-11.5-50.5-19.7-7.1-12.4 2.8-27.4 2.8-27.4 7-8.5 14.5-12.1 22.8-11.2 22.4 2.5 47 37.9 58.6 58.3z" fill="#ffffff" /><path d="M488.8 267.2h96.3v15h-96.3z" fill="#ffffff" /><path d="M585.1 191.2v65.6H475.7c-4.8 0-8.8-3.9-8.8-8.8v-48.7c0-4.8 3.9-8.8 8.8-8.8h87.5c5.9 0.4 12.1 0.7 18.9 0.7 0.9 0.1 2 0 3 0z" fill="#ffffff" /><path d="M435.7 757.1c38.1 0 69.1 31 69.1 69.1 0 38.1-31 69.1-69.1 69.1s-69.1-31-69.1-69.1c0-38.1 31-69.1 69.1-69.1z m49 69.1c0-27-22-49-49-49s-49 22-49 49 22 49 49 49 49-22 49-49z" fill="#ffffff" /></svg>
          {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/> */}
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4 items-center">
         
            <NavLink to="/"
              className={({ isActive, isPending }) =>
                isPending ? "loading.." : isActive ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              }
            //  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" 
            //  aria-current="page"
             >Home</NavLink>
           
            <NavLink to="/productindex" 
            // className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            className={({ isActive, isPending }) =>
              isPending ? "loading.." : isActive ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            }
            >Product</NavLink>
            <NavLink to="/createproduct" 
            // className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            className={({ isActive, isPending }) =>
              isPending ? "loading.." : isActive ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            }
            >Create Product</NavLink>
            <NavLink to="/createcategory" 
            // className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            className={({ isActive, isPending }) =>
              isPending ? "loading.." : isActive ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            }
            >Create Category</NavLink>
            <div className='relative '>
           { wishlist?.wishlist?.length > 0 &&  <span className='absolute -top-3 -right-3 bg-red-400 text-white border-2 px-2  rounded-full'>{wishlist?.wishlist?.length}</span>}

            <NavLink to="/wishlist" 
            // className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            className={({ isActive, isPending }) =>
              isPending ? "loading.." : isActive ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            }
            >Wishlist</NavLink>
            </div>
            <div className=' '>
           {/* { wishlist?.wishlist?.length > 0 &&  <span className='absolute -top-3 -right-3 bg-red-400 text-white border-2 px-2  rounded-full'>{wishlist?.wishlist?.length}</span>} */}

            <NavLink to="/users" 
            // className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            className={({ isActive, isPending }) =>
              isPending ? "loading.." : isActive ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            }
            >UserList</NavLink>
            </div>
            
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <NavLink to="/login" 
            // className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            className={({ isActive, isPending }) =>
              isPending ? "loading.." : isActive ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            }
            >Login</NavLink>
            <NavLink to="/register" 
             className={({ isActive, isPending }) =>
              isPending ? "loading.." : isActive ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            }
            // className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >Register</NavLink>
        <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">View notifications</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>

        <div className="relative ml-3"  onMouseEnter={()=>{setHoverProfile(true)}} onMouseLeave={()=>{setHoverProfile(false)}}>
          <div>
            <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
       

              <img className="h-8 w-8 rounded-full" src={getUserData?.data?.image?.url}alt="" />
            
            </button>
          </div>
 

        { hoverProfile && <div className="absolute right-0 z-10  w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1" onMouseEnter={()=>{setHoverProfile(true)}} onMouseLeave={()=>{setHoverProfile(false)}}>
      
            <NavLink to="/profile" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</NavLink>
            <NavLink to="/setting" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</NavLink>
            <NavLink to="/login" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2" onClick={()=>{  localStorage.clear();Navigate("/login") }}>Sign out</NavLink>
          </div>}
        </div>
      </div>
    </div>
  </div>


  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
   
      <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
    </div>
  </div>
</nav>



</>
  )
}
