import React, { useState } from 'react'
import { FiEye, FiEyeOff } from "react-icons/fi";


const Password = ({password, setPassowrd}) => {

  const [show, setShow] = useState(false);


  return (
    <>
         <span className="w-60 h-10 md:w-80 flex justify-between flex-row border rounded border-black items-center px-1" >

         
            {!show && (
            <input
                type="password" name="password" value={password} minLength="6" required placeholder="Password" 
                onChange={(e) => setPassowrd(e.target.value)} className=" w-44 md:w-60 outline-none pl-1"
            />
            )}

            {show && (
            <input
                type="text" name="password" value={password} minLength="6" required placeholder="Password"
                onChange={(e) => setPassowrd(e.target.value)} className="w-44 md:w-60 outline-none pl-1"   
            />
            )}

            {!show && (
                 <FiEyeOff className="cursor-pointer text-lg" onClick={() => setShow(!show)} />
            )}
            {show && (
                <FiEye className="cursor-pointer text-lg" onClick={() => setShow(!show)} />
            )}
        </span>
    </>
  )
}

export default Password
