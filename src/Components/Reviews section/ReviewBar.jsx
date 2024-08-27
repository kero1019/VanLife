import React from 'react'

export default function ReviewBar({color, percentage, number}) {
  return (
    <div className='flex items-center gap-4 font-semibold text-gray-text'>
      <p>{number} stars</p>
      <p className={`w-[80%] h-2 ${color} rounded-lg`}></p>
      <p>{percentage}%</p>
    </div>
  )
}
