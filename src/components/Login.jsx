import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import { useCookies } from "react-cookie";
import Navbar from "./Navbar";

const Login = () => {
 
  const [cookie, setCookie , removeCookie] = useCookies("")

  const logout = () => {
    removeCookie("access_token")
    navigate("/")
  }

  return (
    <>
    {!cookie.access_token && 
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    }
 
    {
      cookie.access_token &&
      <>
      <Navbar/>

        <section className="pt-14 flex flex-col items-center">
          <h1 className="text-center text-2xl md:text-3xl font-serif mt-4">Admin Account</h1>

          <button onClick={logout} className="text-white cursor-pointer w-16 md:w-24 h-8 bg-black mt-8
          hover:bg-transparent hover:text-black hover:border hover:border-black ">
          Logout
          </button>
    
        </section>
    </>
    }

    </>
  );
};

export default Login;
