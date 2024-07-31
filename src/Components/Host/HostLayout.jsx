import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import HostHeader from './HostHeader'
export default function HostLayout() {
  return (
    <div className='h-screen flex flex-col'>
      <Header/>
      <HostHeader />
      <Outlet />
      <Footer/>
    </div>
  )
}
