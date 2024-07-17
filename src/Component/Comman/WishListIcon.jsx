import React from 'react'

export default function WishListIcon({selected}) {
  return (
    <>
     {selected ?    <svg width="20px" height="20px" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
 
 <path d="M6 7C6 5.34315 7.34315 4 9 4H17C18.6569 4 20 5.34315 20 7V21.0568C20 21.8702 19.0806 22.3433 18.4188 21.8705L13.5812 18.4152C13.2335 18.1668 12.7665 18.1668 12.4188 18.4152L7.58124 21.8705C6.91937 22.3433 6 21.8702 6 21.0568V7Z" stroke="#000000" stroke-width="2" fill="black"/>
 </svg> :
  <svg width="20px" height="20px" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
 
  <path d="M6 7C6 5.34315 7.34315 4 9 4H17C18.6569 4 20 5.34315 20 7V21.0568C20 21.8702 19.0806 22.3433 18.4188 21.8705L13.5812 18.4152C13.2335 18.1668 12.7665 18.1668 12.4188 18.4152L7.58124 21.8705C6.91937 22.3433 6 21.8702 6 21.0568V7Z" stroke="#000000" stroke-width="2" />
  </svg>
 


}
    
    </>

  )
}
