import React from 'react'
import { useOutletContext } from 'react-router-dom'
export default function VansHostDetails() {
  const {vanData} = useOutletContext();
  return (
    <div className='flex flex-col gap-10'>
      <div className="flex gap-2 ">
        <span className='font-bold'>Name: </span>
        <p>{vanData.name}</p>
      </div>
      <div className="flex gap-2 ">
        <span className='font-bold'>Category: </span>
        <p>{vanData.type}</p>
      </div>
        <p><span className='font-bold'>Description: </span> {vanData.description}</p>
      <div className="flex gap-2 ">
        <span className='font-bold'>Visibility: </span>
        <p>Public</p>
      </div>
    </div>
  )
}
