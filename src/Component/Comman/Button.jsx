import React from 'react'

export default function Button({  type,className,...rest}) {
  return (
    <button className={`  shadow-lg transition-all hover:bg-blue-600 rounded-[5px] bg-blue-500 text-white px-4 py-1 ${className}`} type={type || "button"} {...rest} ></button>
  )
}
