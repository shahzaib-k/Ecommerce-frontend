import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineShoppingCart } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import axios from 'axios'
import {useCookies} from "react-cookie"


const Navbar = () => {

  const [cookie, setCookie, removeCookie] = useCookies("")
  const [user, setUser] = useState('')
  const [cartItems, setCartItems] = useState([]); 
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  
  const BASE_URL =  import.meta.env.VITE_BASE_URL 
  const navigate = useNavigate()

  const fetchUserCart = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/auth/verify-token`, { withCredentials: true });
      setCartItems(res.data.user.cart); 
      setUser(res.data.user);
      
    } catch (error) {
      console.error("Error fetching user cart:", error);
    }
  };

  useEffect(() => {
    fetchUserCart();
  }, [], );           //[fetchUserCart]


  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };


  const logout = () => {
    removeCookie("token")
    navigate('/auth')
  }


  return (
    <>
      
      <main className='max-w-screen  h-12 flex justify-between items-center px-8 md:px-32 bg-gray-200 bg-opacity-10 ' >

        <h1 className='md:text-lg md:font-semibold' >Squirrel's Stash.</h1>

        <section className='flex' >
           { !cookie.access_token &&
            <Link to="/cart">
            <span className=' text-center flex items-center justify-center top-0.5 left-70 ml-2 w-4 h-4 rounded-full 
            bg-red-400 absolute text-sm' >{cartItems.length}</span>
              <MdOutlineShoppingCart  className="cursor-pointer text-2xl md:text-3xl mr-2" />
            </Link>
           }

           <div className="relative">
            <VscAccount className="cursor-pointer text-2xl md:text-3xl" onClick={toggleOverlay} />

            {isOverlayVisible && (
              <div className='w-52 absolute top-10 right-2 p-3 bg-white z-50 rounded-sm border border-gray-600 shadow-sm shadow-gray-400' >
              {
                  cookie.token ? (
                  <p>Welcome, <span className='font-semibold' >{user.name}</span></p>
                  ):(
                    cookie.access_token ? (
                  <p>Admin Account</p>
                    ):(
                  <p>Account Information</p>)
                )
              }

                {
                 cookie.token && 
                 <>

                  <Link to="/orders" className='hover:border-b hover:border-black' >Active Orders</Link>
                
                <br />
                 </>
                }  
                {
                  cookie.token || cookie.access_token ? (
                  <button onClick={logout} className='text-red-500 hover:border-b hover:border-red-500 ' >Logout</button>
                  ):(
                    <Link to="/auth" className='text-green-500 hover:border-b hover:border-green-500 ' >Login</Link>
                  )
                }
              </div>
            )}
          </div>

        </section>

      </main>

    </>
  )
}

export default Navbar
