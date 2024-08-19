import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import Loader from '../utils/Loader'

const Women = () => {

  const [data, setData] = useState([])

    const getProducts = async () => {
        try {
            const res = await axios.get("http://localhost:3000/products/get-products")
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
    <main className="w-full min-h-screen bg-[#313131] bg-[radial-gradient(rgba(255,255,255,0.171)_2px,transparent_0)] bg-[length:10px_10px] bg-[-5px_-5px]" >
        <Nav/>

        <section className=' flex flex-wrap justify-center gap-6 w-full min-h-screen pt-40 px-10 pb-10'>
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
