import React, { useEffect, useState } from 'react'
import banner_women from "../assets/banner_women.png"
import Nav from '../components/Nav'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import Loader from '../utils/Loader'

const Women = () => {

  const [data, setData] = useState([])

  const BASE_URL =  import.meta.env.VITE_BASE_URL 

    const getProducts = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/products/get-products`, { withCredentials: true })
            setData(res?.data?.product || [])
          
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    {
      if(data.length == 0){
        return <Loader/>
      }
    }

  return (
    <>
    <main className="w-full min-h-screen bg-[#F5F7F8]" >
        <Nav/>

        <section className='w-full flex justify-center pt-20' >
         <img src={banner_women} className='w-[90%] h-28 md:h-48 md: md:w-[70%]' />
        </section>

        <section className=' flex flex-wrap justify-center gap-6 w-full min-h-screen pt-16 px-10 pb-10'>
            {
                data.filter((items) => (items.category === "women")).map((items) => (
                  <div key={items._id} >
                   <ProductCard items={items} />
                </div>
                ))
            }
        </section>
        
    </main>
    </>
  )
}

export default Women
