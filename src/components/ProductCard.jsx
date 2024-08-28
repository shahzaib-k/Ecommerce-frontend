import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import {toast } from 'react-toastify';

const ProductCard = ({items}) => {
  
  const [hovered, setHovered] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [cookie, setCookie] = useCookies('')
  const [userId, setUserId] = useState('')

  const BASE_URL =  import.meta.env.VITE_BASE_URL 

  const handleAnimation = () => {
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000); 
  };

  
  const token = async () => {
    const res = await axios.get(`${BASE_URL}/auth/verify-token`, {withCredentials: true})
    setUserId(res.data.user._id)
  }
  

  const handleAddToCart = async (id, title, color, image, size, price) => {
      const res = await axios.post(`${BASE_URL}/products/add-to-cart/${userId}` , 
      {productId: id, quantity: 1, productImage: image.join(', '), productTitle: title, productPrice: price , 
       productSize: size.join(', ')[2] , color : color.join(', ') },
       {withCredentials: true})

       toast.success("Added to Cart")
        
  }


  useEffect(() => {
    token()
  }, [])


  return (
    <>

      <Link  to={`/product-detail/${items._id}`}  key={items._id} className=' w-[330px] '>
        <main className="relative w-[320px] h-[460px] shadow-md rounded-lg overflow-hidden z-[ 1] cursor-pointer bg-white"
            
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}>

          <div className="bg-gray-200  flex items-center justify-center">
          <img loading='lazy' src={items.image} className="text-gray-600 w-full h-96 text-lg" />
          </div>

          <div className='flex justify-between  mt-1' >
            <span className="absolute left-2 bottom-8 z-[10] text-lg font-bold text-gray-800">{items.title}</span>
            <span className="absolute right-2 w-4 h-4 rounded-full border border-black cursor-pointer" style={{ backgroundColor: items.color }} />
          </div>
          <span className="absolute left-2 bottom-2 text-gray-700">${items.price}</span>

    { cookie.token && 
        <div onClick={() => {handleAnimation(); 
        handleAddToCart(items._id, items.title, items.color, items.image, items.size, items.price)}}
        className={`absolute left-0 bottom-0 w-full z-[50] bg-green-500 text-white font-semibold uppercase text-center py-2 transition-opacity ${hovered ? 'opacity-100' : 'opacity-0'}`}>
        {addedToCart ? 'Added to Cart' : 'Add to Cart'}
        </div>
        }
        </main>
    </Link>
    
    </>
  )
}

export default ProductCard
