import axios from 'axios';
import React, { useEffect } from 'react'
import { BsCheckCircle } from "react-icons/bs";
import { useParams } from 'react-router-dom';

const PaymentSuccess = () => {

  const params =  useParams()
  console.log(params);
  

  const success = async () => {
    try {
      const res =  await axios.get('http://localhost:3000/products/complete')
      console.log(res);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    success();
  }, [])

  return (
    <>
       <main className="min-h-screen flex items-center justify-center bg-green-50">

      <section className="bg-white p-10 rounded-lg shadow-lg text-center max-w-md">
      <div className="text-green-500">
          <BsCheckCircle className="w-16 h-16 mx-auto mb-4" />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800">Payment Successful!</h2>
        <p className="text-gray-600 mt-2">Thank you for your purchase. Your payment was processed successfully.</p>
        <button
          className="mt-6 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-300"
          onClick={() => window.location.href = '/'}>
          Go to Homepage
        </button>
      
      </section>

    </main>
    </>
  )
}

export default PaymentSuccess
