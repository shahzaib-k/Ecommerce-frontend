import React, { useState } from "react";
import portraitimage from "../assets/portraitimage.jpeg"
import kidsimg from "../assets/kidsimg.jpeg"
import womenimage from "../assets/womenimage.jpeg"
import { useCookies } from "react-cookie";
import Nav from "./Nav"

import { Link } from 'react-router-dom'

const Header = () => {
  
  const [cookie, setCookie] = useCookies("")
  
  return (
    <>
      <main className="w-full min-h-screen relative flex flex-col md:flex-row overflow-x-hidden">
      
        <Nav/>

        <div className="relative flex  w-screen md:w-[33.33vw]">
          <h1 className="absolute top-[63%] left-[40%] sm:left-[37%] md:left-[38%] text-white font-bold text-3xl bg-black bg-opacity-5" >MEN</h1>
          <Link to="/men" className="w-24 h-10 top-[70%] left-[36%] text-center pt-1 absolute inset-0 z-[1] border border-white text-white font-semibold text-lg rounded bg-black bg-opacity-10 hover:bg-white hover:text-black  ">
            Shop now
          </Link>
          <img src={portraitimage} className="h-[85vh] md:h-screen w-screen z-[-10]" />
        </div>

        <div className="relative flex  w-screen md:w-[33.33vw]">
        <h1 className="absolute top-[63%] left-[33%]  md:left-[34%] text-white font-bold text-3xl bg-black bg-opacity-5" >WOMEN</h1>
          
          <Link to="/women" className="w-24 h-10 top-[70%] left-[36%] text-center pt-1 absolute inset-0 z-[1] border border-white text-white font-semibold text-lg rounded bg-black bg-opacity-10 hover:bg-white hover:text-black  ">
            Shop now
          </Link>
          <img src={womenimage}  className="h-[88vh] md:h-screen  w-screen z-[-10]"/>
        </div>

        <div className="relative flex  w-screen md:w-[33.33vw]">
        <h1 className="absolute top-[63%] left-[40%] sm:left-[37%] md:left-[38%] text-white font-bold text-3xl bg-black bg-opacity-5" >KIDS</h1>
         
          <Link to="/kids" className="w-24 h-10 top-[70%] left-[36%] text-center pt-1 absolute inset-0 z-[1] border border-white text-white font-semibold text-lg rounded bg-black bg-opacity-10 hover:bg-white hover:text-black  ">
            Shop now
          </Link>

          <img src={kidsimg} className="h-[90vh] md:h-screen  w-screen  z-[-10]"/>
        </div>
       
      </main>
    </>
  );
};

export default Header;
