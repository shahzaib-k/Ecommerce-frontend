import React from 'react'
import Login from '../components/Login'
import { Route, Routes } from 'react-router-dom'
import Register from '../components/Register'

const Auth = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/register' element={<Register/>} />
    </Routes> 
    </>
  )
}

export default Auth
