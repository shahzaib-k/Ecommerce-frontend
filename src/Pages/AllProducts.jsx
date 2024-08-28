import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import Loader from '../utils/Loader'
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import Sort from '../utils/Sort'

const AllProducts = () => {

    const [data, setData] = useState([])
    const [number, setNumber] = useState(1)

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
    
    //Pagination

    const itemsPerPage = 12

    const totalPages = Math.ceil(data.length / itemsPerPage)

    const endNumber = number * itemsPerPage
    const startNumber = endNumber - itemsPerPage


    const handleClick = (index) => {
      setNumber(index + 1)

      window.scrollTo({
        top: 0,
        behavior: 'smooth', 
      });
    }

    const handleNext = () => {
      setNumber(number + 1)

      if(number == totalPages)
      setNumber(1)

      window.scrollTo({
        top: 0,
        behavior: 'smooth', 
      });
    }

    const handlePrev = () => {
      setNumber(number - 1)

      if (number === 1) {
        setNumber(totalPages);
      }      
      
      window.scrollTo({
        top: 0,
        behavior: 'smooth', 
      });
    }
    
    {
      if(data.length == 0){
        return <Loader/>
      }
    }
    return (
    <>
    <main className=" w-full  min-h-screen  bg-[#F5F7F8]"  >
        <Nav/>

        <section className='flex flex-wrap justify-center gap-6 w-full min-h-screen pt-20 px-4'>
            {
                data.slice(startNumber, endNumber).map((items) => (
                <div key={items._id} >
                  <ProductCard items={items} />
                </div>
             
                ))
            }
        </section>


        <section className='flex items-center w-full justify-center gap-3 py-8' >
            <FaLessThan onClick={handlePrev} className='cursor-pointer w-10 h-6 text-black' ></FaLessThan>
            {
              [...Array(totalPages)].map((item, index) => (
                 <button onClick={() => handleClick(index)} className={`${number === index + 1 ? "bg-[#1976D2] text-white " :
                  "text-black text-lg font-semibold"} w-8 h-8 rounded-full `} >{index + 1}</button>
              ))
            }  
             
            <FaGreaterThan onClick={handleNext} className='text-black w-10 h-6 cursor-pointer' >next</FaGreaterThan>
        </section>

    </main>

    </>
  )
}

export default AllProducts
