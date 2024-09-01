import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import { useCookies } from "react-cookie";
import Navbar from "./Navbar";

const Login = () => {
 
  const [cookie, setCookie , removeCookie] = useCookies("")
  const [admin, setAdmin] = useState("")

  const logout = () => {
    removeCookie("access_token")
    navigate("/")
  }

  const getAdmin = async () => {
    const res = await axios.get(`${BASE_URL}/admin/verify-token`, { withCredentials: true });
    setAdmin(res.data.user)
  }

  useEffect(() => { 
    getAdmin()
  }, []);

const isAdmin = admin._id

  return (
    <>
    {!isAdmin && 
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    }
 
    {
      isAdmin &&
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
