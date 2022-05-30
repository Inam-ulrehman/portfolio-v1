import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  Products,
  SingleProduct,
  About,
  Home,
  Error,
  LoginRegister,
  SharedLayout,
} from './pages'
import {
  SharedDashboardLayout,
  Dashboard,
  Profile,
  AllJobs,
  EditJobs,
  AddJobs,
} from './pages/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<LoginRegister />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:productsId' element={<SingleProduct />} />
          <Route path='dashboard' element={<SharedDashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='profile' element={<Profile />} />
            <Route path='all-jobs' element={<AllJobs />} />
            <Route path='edit-jobs' element={<EditJobs />} />
            <Route path='add-jobs' element={<AddJobs />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
