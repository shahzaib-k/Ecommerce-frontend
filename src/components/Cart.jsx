import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]); 
  const [checkout, setCheckout] = useState('')
  const [userId, setUserId] = useState('');

  const BASE_URL =  import.meta.env.VITE_BASE_URL 
  const navigate = useNavigate()  
  
  const fetchUserCart = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/auth/verify-token`, { withCredentials: true });
      setCartItems(res.data.user.cart);       
      setUserId(res.data.user._id);
    } catch (error) {
      console.error("Error fetching user cart:", error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/products/delete-cart-items/${id}`, { withCredentials: true });
      fetchUserCart(); 
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const updateQuantity = async (id, quantity) => {
    try {
      await axios.patch(`${BASE_URL}/products/update-cart/${id}`, { quantity }, { withCredentials: true });
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const incrementQuantity = (id) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item => {
        if (item.productId === id) {
          const updatedQuantity = item.quantity + 1;
          updateQuantity(id, updatedQuantity); // Update in database
          return { ...item, quantity: updatedQuantity };
        }
        return item;
      })
    );
  };

  const decrementQuantity = (id) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item => {
        if (item.productId === id && item.quantity > 1) {
          const updatedQuantity = item.quantity - 1;
          updateQuantity(id, updatedQuantity); // Update in database
          return { ...item, quantity: updatedQuantity };
        }
        return item;
      })
    );
  };

  useEffect(() => {
    fetchUserCart();
  }, []);

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + (item.productPrice * item.quantity), 0);
  };

  const handleCheckout = async (id, title, price, quantity, size , image) => {

    try {
      if(id){
        const res = await axios.post(`${BASE_URL}/products/checkout`, {id, title, price, quantity, size, image}, 
          { withCredentials: true } )
        setCheckout(res.data.url);
      }      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(checkout){
      window.location.href = checkout
    }
  }, [checkout])

  const handleCheckoutClick = () => {
    const id = userId
    const title = cartItems.map((items) => items.productTitle )
    const price = cartItems.map((items) => items.productPrice )
    const quantity = cartItems.map((items) => items.quantity ) 
    const size = cartItems.map((items) => items.productSize)
    const image = cartItems.map((items) => items.productImage)

    handleCheckout(id, title, price, quantity, size, image)
  }  
  

  return (
    <>
      <Navbar />

      <main className='w-full min-h-[93vh] flex items-center pt-14 flex-col'>
        <h1 className='text-lg md:text-2xl font-serif'>Your cart</h1>

        {cartItems.length == 0 ? (
          <h1 className='text-lg md:text-2xl font-serif'>is empty</h1>
        ) : (
          <>
            <hr className='w-[90vw] h-1 mx-4' />
            {cartItems.map((item, index) => (
             <> 
              <section key={index} className='w-full flex justify-between md:justify-around px-4 md:px-0 pt-4'>
                <img src={item.productImage} className='w-32 h-40 md:w-36 md:h-44' alt='product' />
                
                <div className='' >
                  <h1 className='w-28 sm:w-44 md:w-60 font-semibold text-sm md:text-lg'>{item.productTitle}</h1>
                  <h2 className='text-gray-600'>${item.productPrice}</h2>
                  <h2 className='text-gray-600 capitalize'>Size: {item.productSize.charAt(0)}</h2>
                </div>

                <div className='flex flex-col items-end gap-6'>
                  <span className='flex border border-black'>
                    <button onClick={() => decrementQuantity(item.productId)} className='w-6'>-</button>
                    <h1 className='w-6 text-center'>{item.quantity}</h1>
                    <button onClick={() => incrementQuantity(item.productId)} className='w-6'>+</button>
                  </span>

                  <button onClick={() => handleDeleteItem(item.productId)} className='pr-2'>
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </section>
          </>
            ))}
          </>
        )}

        {!cartItems.length == 0 && (
          <>

          <h1 className='text-lg md:text-2xl font-serif mt-6'>Subtotal: $ {calculateSubtotal()} </h1>
      
          <div>
        <button onClick={handleCheckoutClick}
         className='border border-black w-48 text-black  py-1 pb-2 mt-6'>
          Checkout
        </button>
          </div>
          </>
        )}
      

        <Link to="/" className='bg-black w-48 text-white pl-6 py-1 pb-2 mb-10 mt-5'>
          Continue Shopping
        </Link>
      </main>
    </>
  );
};

export default Cart;
