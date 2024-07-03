import React from 'react'

export default function HeaderButton({children}) {
  return (
    <button className='text-gray-text hover:font-semibold text-[1.2rem] hover:text-normal-text hover:underline'>{children}</button>
  )
}
