import React from 'react'

export default function Button({children, type}) {
  let background;
  if(type === "simple")
  background = "bg-orange-button";
  else if(type === "rugged")
  background = "bg-green-button";
  else if(type ==="luxury")
  background = "bg-black-button";
  else 
  background = "bg-light-beige"
  return (
    <button className={` px-5 py-2 rounded-md  ${background} ${background ==="bg-light-beige" ? "text-gray-text" : "text-white capitalize car-button" }`}>{children}</button>
  )
}
