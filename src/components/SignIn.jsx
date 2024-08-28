import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Password from './Password';
import Navbar from './Navbar';
import {toast } from 'react-toastify';
import axios from 'axios';
import { useCookies } from 'react-cookie';


const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassowrd] = useState("");
    const [cookie, setCookie, removeCookie] = useCookies("")

    console.log(email, password);
    
    
    
    const BASE_URL =  import.meta.env.VITE_BASE_URL 
    console.log(BASE_URL);
    const navigate = useNavigate();  

    const login = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post(`${BASE_URL}/auth/login`, { email, password }, { withCredentials: true });     
        
        if(res.status == "200" ){
           toast.success("logged in successfully")
          navigate("/");
        }
        
      } catch (error) {
        if (error.response) {
        if (error.response.status === 400) {
          toast.error("Bad request. Please check your input.");
        } else {
          toast.error(`Error: ${error.response.status} ${error.response.data.message}`);
        }
      }
    }
  }

  

  return (
    <>

    <Navbar />

    {!cookie.token &&
     <section className="pt-14 flex flex-col items-center">
        <h1 className="text-center text-2xl md:text-3xl font-serif mt-4">Login</h1>

        <form onSubmit={login}  className="flex flex-col items-left w-60 md:w-80 h-64  pt-10 mt-4">

          <div className="flex flex-col">
            <label>Email</label>
            <input type="email" name="name" value={email} onChange={(e) => setEmail(e.target.value)} required 
              placeholder="Email" className="w-60 h-10 md:w-80 border border-black outline-none rounded pl-1"/>
          </div>

          <div className="flex flex-col mt-4">
            <label>Password</label>

            <Password password={password} setPassowrd={setPassowrd}/>
         
          </div>

          <div className="flex justify-center">
            <input type="submit" value="Sign In"
              className="text-white cursor-pointer w-16 md:w-24 h-8 bg-black mt-8
               hover:bg-transparent hover:text-black hover:border hover:border-black "
            />
          </div>
        </form>

        <h1 className="mt-10 text-lg">
          Dont have an account? 
          <Link to="/register" className=" ml-1 font-serif text-black border-b border-black">Create</Link>
        </h1>

        <hr className='w-80 h-1.5 mt-4' />

        <h1 className="mt-2 text-lg">
          Login in as  
          <Link to="/admin" className=" ml-1 font-serif text-black border-b border-black">Admin</Link>
        </h1>

      </section>
    }

    {/* <Account/> */}
    
    </>
  )
}

export default SignIn
