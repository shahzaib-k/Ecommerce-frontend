import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useCookies } from 'react-cookie';
import {toast } from 'react-toastify';
import Loader from "../utils/Loader"

const ProductDetail = () => {

    const params = useParams()
    const navigate = useNavigate()

    const [data, setData] = useState([])
    const [userId, setUserId] = useState('')
    const [cookie, setCookie] = useCookies('')

    const BASE_URL =  import.meta.env.VITE_BASE_URL 

    const getProducts = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/products/get-products`)
        setData(res?.data?.product?.filter( item => item._id === params.id)  || [])
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    const token = async () => {

         const res = await axios.get(`${BASE_URL}/auth/verify-token`, {withCredentials: true})
        setUserId(res.data.user._id)
      }

    const handleAddToCart = async (id, title, color, image, size, price) => {
      try {
        if(!cookie.token){
          return toast.error("Please Login first");
        }
        const res = await axios.post(`${BASE_URL}/products/add-to-cart/${userId}` , 
        {productId: id, quantity: 1, productImage: image.join(', '), productTitle: title, productPrice: price , productSize: size.join(', ')[2] , color : color.join(', ') },
        {withCredentials: true})
  
        toast.success("Added to Cart")
        
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }

    const handleDelete = async (id) => {
      try {
        
        const res = await axios.delete(`${BASE_URL}/products/delete-product/${id}`, {withCredentials: true})
        alert("Product deleted successfully")
        navigate("/all-products")
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      getProducts()
      token()
    }, [])

    if(data.length == 0){
      return <Loader/>
    }

  return (
    <>
        <main className='w-screen h-screen relative overflow-x-hidden' >
            <Navbar/>

         {
            data.map((items) => (
                <>
                    <section className='flex flex-col items-center md:items-start md:flex-row justify-around h-[90vh] px-8 md:px-12 pt-12' >
                        <img src={items.image} className='h-[78vh] w-[70vw] md:w-[45%] lg:w-[30%] ' />

                        <div>
                            <h1 className='text-lg font-semibold py-3' >{items.title}</h1>
                            <h1 className='pb-3' >${items.price}</h1>
                            
                            <span className='flex gap-4 items-center pb-3'  >
                            COLORS
                            <div className="w-4 h-4 rounded-full border border-black cursor-pointer" 
                            style={{ backgroundColor: items.color[0] }} />
                            </span>

                            <span className='flex gap-4 capitalize pb-3' >
                             SIZE
                             <h1> {items.size.join(', ').charAt(2)}</h1>
                             <h1> {items.size.join(', ').charAt(10)}</h1>
                             <h1> {items.size.join(', ').charAt(19)}</h1> 
                            </span>

                            <span className='flex gap-4 capitalize pb-3' >
                            GENDER
                            <h1>{items.category}</h1>
                            </span>

                          {
                            cookie.access_token ? ( 
                              <button  onClick={() => {handleDelete(items._id)}} 
                              className='w-[70vw] md:w-[400px] bg-black text-white h-8 mb-5' >Delete</button>
                            ):(
                              <button  onClick={() => {handleAddToCart(items._id, items.title, items.color, items.image, items.size, items.price)}}
                              className='w-[70vw] md:w-[400px] bg-black text-white h-8 mb-5' >ADD TO CART</button>
                            )
                          }

                            <div className='w-[70vw] md:w-[400px] pb-8' >
                                <h2 className='text-gray-500' >{items.description}</h2>
                            </div>

                        </div>
                    </section>
                </>
            ))
         }
        </main>    
    </>
  )
}

export default ProductDetail
