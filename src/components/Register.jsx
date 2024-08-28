import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Password from './Password'
import {toast } from 'react-toastify';


const Register = () => {
 
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const BASE_URL =  import.meta.env.VITE_BASE_URL 
   const navigate = useNavigate()

   const register = async (e) => {
      e.preventDefault()
      try {
         const res= await axios.post(`${BASE_URL}/auth/register`, {name, email, password}, { withCredentials: true })
         if(res.status == "201"){
            toast.success("Registration Successful")
            navigate("/login")
         }
      } catch (error) {

         if (error.response) {
        if (error.response.status === 409) {
          toast.error("Email already exists");
        } else {
          toast.error(`Error: ${error.response.status} ${error.response.data.message}`);
        }
      }
    }
   }

   return (
    <>
     <Navbar/>

     <section className='pt-14 flex flex-col items-center' >
     <h1 className='text-center font-serif text-2xl md:text-3xl mt-4' >Create Account</h1> 

        <form onSubmit={register}  className='flex flex-col items-center w-80 h-76 pt-10 mt-4 ' >
            <div className='flex flex-col'>
               <label>Name</label>
               <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} required
                placeholder='Enter Your Name' className='w-60 md:w-80 h-10 border border-black rounded outline-none pl-1 '  />
            </div>

            <div className='flex flex-col mt-4'>
               <label>Email</label>
               <input type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required 
               placeholder='Enter Your Email' className='w-60 md:w-80 h-10 border border-black rounded outline-none pl-1'  />
            </div>

            <div className='flex flex-col mt-4'>
               <label>Password</label>
               
               <Password password={password} setPassowrd={setPassword} />
            </div>

            <input type='submit' className='text-white cursor-pointer w-16 md:w-24 py-1 bg-black mt-8
               hover:bg-transparent hover:text-black hover:border hover:border-black ' />
        </form>

        <h1 className='mt-4 text-lg' >Already have an account? <Link to="/login" 
        className='text-black border-b border-black font-serif' >Login</Link></h1>

     </section>
     
    </>
  )
}

export default Register
