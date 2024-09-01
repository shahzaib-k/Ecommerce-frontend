import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from '../../components/admin/AdminLogin'
import AddProducts from '../../components/admin/AddProducts'
import Dashboard from '../../components/admin/Dashboard'
import { useCookies } from 'react-cookie'

const Admin = () => {

    const [cookie, setCookie] = useCookies("")
    const [admin, setAdmin] = useState("")

    const getAdmin = async () => {
      const res = await axios.get(`${BASE_URL}/admin/verify-token`, { withCredentials: true });
      setAdmin(res.data.user)    
    }

    useEffect(() => {
      getAdmin()
    }, [])

    const isAdmin = admin._id

  return (
    <>
     <Routes>
        <Route path='/' element={<AdminLogin/>} />
        {isAdmin && 
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
