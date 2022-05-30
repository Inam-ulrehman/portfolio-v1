import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components'

const SharedLayout = () => {
  return (
    <div className='section'>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default SharedLayout
