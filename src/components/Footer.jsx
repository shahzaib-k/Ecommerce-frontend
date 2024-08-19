import React, { useState } from 'react'
import { FaGreaterThan , FaXTwitter} from "react-icons/fa6";
import { FaFacebookF, FaInstagram , FaLinkedinIn} from "react-icons/fa";


const Footer = () => {
  
  return (
    <>
      
      <main className='flex flex-col items-center md:flex-row  w-full h-[98vh] md:h-[48vh] bg-black' >

        <section className='md:w-[50vw] p-6 pl-14' >
            <h1 className='text-white text-2xl mb-2' >Connect with Us</h1>
            <p className='text-white' >Subscribe and be the first one to hear about <br/> new products, sales and more.</p>
       
            <form onSubmit={(e) => e.preventDefault() } className='flex pt-4'>
                <input type='email' required placeholder="Enter Your Email" 
                className='pl-2 rounded w-60' />
                <button type='submit' className='bg-[#F4CE14] opacity-90 h-8 text-black px-2 ml-2 rounded'><FaGreaterThan/></button>
            </form>

            <h1 className='text-3xl font-semibold text-[#F4CE14] mt-4' >SQUIRREL'S <br/> STASH</h1>

            <h1 className='text-white mt-4' > Copyright &copy; {new Date().getFullYear()}. All rights reserved.</h1>

        </section>


        <section>

            <div className='flex justify-center gap-32 lg:gap-48 md:gap-60 pl-4 md:pl-0' >
                <section className='text-white ' >
                  <h1 className='pt-6 text-2xl mb-4' >Support</h1>
                  
                    <ul  >
                        <li className='cursor-pointer hover:text-gray-400' >Shipping</li>
                        <li className='cursor-pointer hover:text-gray-400'>Returns</li>
                        <li className='cursor-pointer hover:text-gray-400'>Track Order</li>
                        <li className='cursor-pointer hover:text-gray-400'>Size Guide</li>
                        <li className='cursor-pointer hover:text-gray-400'>Career</li>
                    </ul>
                </section>

                <section className='text-white ' >
                  <h1 className='pt-6 text-2xl mb-4' >Sales</h1>

                    <ul >
                        <li className='cursor-pointer hover:text-gray-400' >Find Stores</li>
                        <li className='cursor-pointer hover:text-gray-400'>Affiliate</li>
                        <li className='cursor-pointer hover:text-gray-400'>Business</li>
                        <li className='cursor-pointer hover:text-gray-400'>Rewards</li>
                    </ul>
                </section>
            </div>

            <div className='flex text-white text-2xl gap-4 cursor-pointer mt-4 pl-4 md:pl-0' >
                    <FaFacebookF />
                    <FaInstagram  />
                    <FaXTwitter  />
                    <FaLinkedinIn/>
            </div>

            <div className='flex px-4 md:px-0 gap-10 sm:gap-28 md:gap-32' >
                <h1 className='text-white pt-6 text-sm md:text-lg ' >2118 Thornidge,<br/> connecticut</h1>
            </div>

        </section>

      </main>

    </>
  )
}

export default Footer
