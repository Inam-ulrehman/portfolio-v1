import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardNavBar from '../../components/DashboardNavBar'
import { useSelector } from 'react-redux'

const SharedDashboardLayout = () => {
  const user = useSelector((state) => {
    return state.user
  })
  const { isSignIn } = user
  return (
    <div>
      <h3 className='title'>Crud Operation</h3>
      <div style={{ marginBottom: '1rem' }} className='title-underline'></div>
      {!isSignIn && (
        <p style={{ margin: '0' }} className='title'>
          Please login to see crud Operation in action...
        </p>
      )}

      <DashboardNavBar />
      <Outlet />
    </div>
  )
}

export default SharedDashboardLayout
