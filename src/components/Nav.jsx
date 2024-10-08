import React, { useEffect, useState } from 'react';
import { MdOutlineShoppingCart, MdOutlineDashboardCustomize } from 'react-icons/md';
import { VscAccount } from 'react-icons/vsc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { RiMenu3Fill } from "react-icons/ri";
import { ImCross } from "react-icons/im";


const Nav = () => {
  const [cookie, setCookie, removeCookie] = useCookies('');
  const [cartItems, setCartItems] = useState([]); 
  const [user, setUser] = useState('')
  const [admin, setAdmin] = useState('')
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [active, setActive] = useState(false)
  const BASE_URL =  import.meta.env.VITE_BASE_URL 
  const location = useLocation()
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

  const getAdmin = async () => {
    const res = await axios.get(`${BASE_URL}/admin/verify-token`, { withCredentials: true });
    setAdmin(res.data.user)    
  }

  useEffect(() => {
    fetchUserCart();  
    getAdmin()
  }, []);

  const isUser = user._id
const isAdmin = admin._id
  console.log(isAdmin);
  

  const data = [
    {id: 1, name: "Home", link: "/"},
    { id: 2, name: "All", link: "/all-products"},
    { id: 3, name: "Men", link: "/men"},
    { id: 4, name: "Women", link: "/women" },
    { id: 5, name: "Kids", link: "/kids" }
  ];


  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  const logout = () => {
    removeCookie("token")
    removeCookie("access_token")
    navigate("/auth")    
  }

  return (
    <>
    
    {!active && <RiMenu3Fill onClick={() => setActive(true)} className={`absolute md:hidden ${location.pathname === "/" ? "text-white" : "text-black" }
     text-2xl text-center z-[10] mt-3.5 ml-2 cursor-pointer `} /> }
      
      <section className={`${active ? "w-screen h-72" : "hidden"} ${location.pathname === "/" ? 'bg-[#cccece] md:shadow-md md:shadow-gray-800 text-white' : 'bg-[#cecbcb] text-black' } 
      md:hidden z-[10] flex flex-col pt-10 items-center absolute mt-12 bg-opacity-40 transition-all duration-100 shadow-md shadow-black`} >
            
            {
              data.map((item) => (
                <Link key={item.id} to={item.link}
                className={`md:mr-6 ${  location.pathname === item.link ?  location.pathname === "/"  ? 'text-4xl text-gray-200 border-b border-gray-200 font-semibold' 
                : "text-4xl text-gray-500 border-b border-gray-500 font-semibold"  : 'text-2xl'}`}>
                {item.name} </Link>
              ))
            }

            {isUser || isAdmin ? 
            (
            <Link to="/auth " className="text-2xl " >Logout</Link>              
            ):(
            <Link to="/login " className="text-2xl" >Login</Link>
            )
            }
      </section>

      {active && 
       <ImCross onClick={() => setActive(false)} className={`absolute ${location.pathname === "/" ? "text-white" : "text-black" } text-lg z-[10] mt-4 ml-2 md:hidden cursor-pointer`} />
      } 
     
    <section className={`${location.pathname === "/" ? 'bg-[#cccece] md:shadow-md md:shadow-gray-800' : 'bg-gray-200' } max-w-screen
    flex justify-between items-center md:justify-around px-10 h-12 absolute inset-0 z-[1] pt-1  bg-opacity-40 `}>
     
      <div className={`${location.pathname === "/" ? "text-white" : "text-black" }  text-2xl`}>Squirrel's Stash</div>

      <div className={`hidden md:flex ${location.pathname === "/" ? "text-white" : "text-black" } `}>
        {data.map((item) => (
          <Link key={item.id} to={item.link}
            className={`mr-6 ${  location.pathname === item.link && location.pathname != "/" ? 'text-3xl text-gray-400 border-b border-gray-400' : 'text-2xl'}`}>
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex flex-row items-center gap-2">
        {!isAdmin ? (
          <Link to="/cart">
          <span className={`text-center flex items-center justify-center top-1 left-70 ml-2 w-4 h-4 rounded-full 
            bg-red-400 absolute text-sm text-white `} >{cartItems.length}</span>
            <MdOutlineShoppingCart className={ `cursor-pointer md:text-3xl mr-2 ${location.pathname === "/" ? "text-white" : "text-black" } text-2xl`}/>
          </Link>
        ) : (
          <>
            <Link to="/admin/add-product">
              <FaPlus className={`cursor-pointer md:text-3xl mr-2 ${location.pathname === "/" ? "text-white" : "text-black" } text-2xl`}/>
            </Link>
            <Link to="/admin/dashboard">
              <MdOutlineDashboardCustomize className={`cursor-pointer md:text-3xl mr-2 ${location.pathname === "/" ? "text-white" : "text-black" } text-2xl`} />
            </Link>
          </>
        )}
        

        <div className="relative">
            <VscAccount className={`cursor-pointer text-2xl ${location.pathname === "/" ? "text-white" : "text-black" } md:text-3xl`} onClick={toggleOverlay} />

            {isOverlayVisible && (
              <div className='w-52 absolute top-10 right-2 p-3 bg-white z-50 rounded-sm border border-gray-600 shadow-sm shadow-gray-400' >
                   
                {
                  isUser ? (
                  <p>Welcome, <span className='font-semibold' >{user.name}</span></p>
                  ):(
                    isAdmin ? (
                  <p>Admin Account</p>
                    ):(
                  <p>Account Information</p>)
                )
                }        
                
                {
                  isUser &&
                  <>
                  <Link to="/orders" className='hover:border-b hover:border-black' >Active Orders</Link>
                <br />
                  </>
                }
               
                {
                  isUser || isAdmin ? (
                  <button onClick={logout} className='text-red-500 hover:border-b hover:border-red-500 ' >Logout</button>
                  ):(
                    <Link to="/auth" className='text-green-500 hover:border-b hover:border-green-500 ' >Login</Link>
                  )
                }
              </div>
            )}
          </div>


      </div>
    </section>
    </>
  );
};

export default Nav;
