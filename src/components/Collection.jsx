import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Collection = () => {

  const [data, setData] = useState([])

  const BASE_URL =  import.meta.env.VITE_BASE_URL 

    const getProducts = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/products/get-products`)
            setData(res?.data?.product || [])
          
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    useEffect(() => {
        getProducts()
    }, [])


    const [isLargerScreen, setIsLargerScreen] = useState(false)

    useEffect(() => {

      const handleResize = () => {
        if(window.innerWidth > 780 ){
          setIsLargerScreen(true)
        }else{
          setIsLargerScreen(false)
        }
      }

      window.addEventListener('resize', handleResize)
      handleResize()

      return () => window.removeEventListener('resize', handleResize)
    }, [])


    const itemsToDisplay = isLargerScreen ? [...data.slice(0,4), ...data.slice(14, 18)] : [...data.slice(0,2), ...data.slice(14,16)]

  return (
    <>
    
    <main className=' w-full py-20 bg-[#F5F7F8] ' >
    {
      !itemsToDisplay.length == 0 && 
      <h1 className='text-4xl font-serif font-semibold text-center my-8 mb-20'>Latest Collection</h1>
    }

      <section className='flex justify-center gap-11 px-[5%] sm:px-[8%] md:px-[12%] my-14 flex-wrap' >
        {
            itemsToDisplay.map((items, index) => (
                <div key={index} className='w-[80%] sm:w-[40%] md:w-[22%] flex justify-center ' >
                    <img src={items.image} className='w-full h-96' />
                </div>
            ))
        }
       
      </section>

      {!itemsToDisplay.length == 0 &&  
        <div className='w-full flex justify-center' >
          <Link to="/all-products" className='w-28 h-8 pt-1 text-center hover:border hover:border-black hover:text-black hover:bg-white
          bg-black text-[#F5F7F8] rounded ' >See more</Link>
        </div>
      }

    </main>

    </>
  )
}

export default Collection
