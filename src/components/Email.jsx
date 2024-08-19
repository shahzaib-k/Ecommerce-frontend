import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Email = () => {
  return (
    <>
     <Navbar/>

     <main className='w-full h-[92vh] flex flex-col items-center pt-20' >
        <h1 className='text-3xl md:text-4xl font-serif font-bold' >Reset Your Password</h1>

        <form className='flex flex-col items-center mt-4 gap-8' >
          <label className='md:text-lg text-gray-500' >We will send you an email to reset your password</label>
          <input type='email' placeholder='Email' className='w-72  md:w-80 h-10 pl-1 md:pl-2 border border-black' />
          <button type='submit' className='text-white cursor-pointer w-16 md:w-24 h-8 bg-black mt-6
               hover:bg-transparent hover:text-black hover:border hover:border-black pb-0.5' >Submit</button>
        </form>
        <Link to="/login" className='text-gray-500 text-lg mt-4' >Cancel</Link>
     </main> 
    </> 
  )
}

export default Email
