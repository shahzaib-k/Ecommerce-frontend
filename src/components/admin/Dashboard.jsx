import React from 'react'
import Navbar from '../Navbar';

const Dashboard = () => {

  return (
    <>
    <main className=" w-full h-screen">
        <Navbar/>

        <section className='w-full flex flex-wrap  justify-evenly h-[35vh] px-4 pt-28' >

          <div className='flex flex-col items-center w-64 md:w-80 h-32 border text-2xl border-black mt-2' >
            <h1>Total Orders</h1>
            <span>0</span>
          </div>

          <div className='flex flex-col items-center w-64 md:w-80 h-32 text-2xl border border-black mt-2' >
            <h1>Total Revenue</h1>
            <span>$ 0</span>
          </div>

          <div className='flex flex-col items-center w-64 md:w-80 h-32 border text-2xl border-black mt-2' >
            <h1>Completed Orders</h1>
            <span>0</span>
          </div>

        </section>

        <h1 className='text-center mb-8 mt-4 text-lg md:text-2xl' >Sales Over Month</h1>

    </main>

    </>
  )
}

export default Dashboard
