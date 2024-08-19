import React from 'react'
import Login from '../components/Login'
import Email from '../components/Email'
import { Route, Routes } from 'react-router-dom'
import Register from '../components/Register'

const Auth = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/email' element={<Email/>} />
    </Routes> 
    </>
  )
}

export default Auth
