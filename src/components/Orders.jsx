import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Loader from '../utils/Loader';

const Orders = () => {

    const [data, setData] = useState([])
    

    const token = async () => {
        const res = await axios.get('http://localhost:3000/auth/verify-token', {withCredentials: true})
         setData(res.data.user.purchaseProducts)         
      }

      useEffect(() => {
        token()
      }, [])

      if (data.length == 0) {
        return <Loader/>
      }

  return (
    <>

        <Navbar/>
        <h1 className='text-center text-2xl mt-4 font-semibold' >Your Orders</h1> 

    <main className='' >

        {
            data.map((items, index) => (
                <section key={index} className="flex flex-col md:flex-row items-center justify-between md:gap-20 px-5 w-[90%] min-h-80 p-4
                 bg-gray-100 my-20 mx-auto lg:w-[90%] lg:max-w-none shadow-lg rounded-lg">
                   <div className=' flex flex-row w-full md:w-[50%]'>

                    <img src={items.image} alt={items.title} className="w-24 md:w-40 h-40 md:h-48 object-cover lg:h-64" />
                    <div className="p-6 ">
                        <h1 className="text-2xl font-semibold mb-2">{items.title}</h1>
                        <p className="text-gray-700">Price: $ {items.price}</p>
                        <p className="text-gray-700">Quantity: {items.quantity}</p>
                        <p className="text-gray-700">Size: <span className='capitalize'>{items.size}</span></p>
                    </div>
                   </div> 

                    <div className='w-full md:w-[50%] md:h-52' >

                        <p className="text-gray-700">Subtotal: $ {items.price * items.quantity}</p>
                        <p className="text-green-600 font-medium mt-3">Payment status: Paid</p>
                    </div>
                </section>
            ))
        }
        
    </main>
    </>
  )
}

export default Orders
