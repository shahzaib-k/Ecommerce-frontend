import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Nav from '../components/Nav'
import ProductCard from '../components/ProductCard'
import Loader from '../utils/Loader'

const Men = () => {

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

    
      if(data.length == 0){
        return <Loader/>
      }
    

  return (
    <>
   <main className="w-full min-h-screen pb-10 bg-[#313131] bg-[radial-gradient(rgba(255,255,255,0.171)_2px,transparent_0)] bg-[length:10px_10px] bg-[-5px_-5px]" >
        <Nav/>

        <section className='flex flex-wrap justify-center gap-6 w-full min-h-screen pt-40'>
            {
              data.filter((items) => (items.category === "men")).map((items) => (
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

export default Men
