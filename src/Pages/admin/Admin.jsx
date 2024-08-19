import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from '../../components/admin/AdminLogin'
import AddProducts from '../../components/admin/AddProducts'
import Dashboard from '../../components/admin/Dashboard'
import { useCookies } from 'react-cookie'

const Admin = () => {

    const [cookie, setCookie] = useCookies("")

  return (
    <>
     <Routes>
        <Route path='/' element={<AdminLogin/>} />
        {cookie.access_token && 
        <>
        <Route path='/add-product' element={<AddProducts/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        </>
        }
     </Routes> 
    </>
  )
}

export default Admin
