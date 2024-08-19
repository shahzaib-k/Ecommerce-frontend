import React from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip, Legend } from 'recharts';
import Navbar from '../Navbar';

const Dashboard = () => {

  const data = [
    {
      name: 'January',
      revenue: 0,
    },
    {
      name: 'Feburary',
      revenue: 0,
    },
    {
      name: 'March',
      revenue: 0,
    },
    {
      name: 'April',
      revenue: 0,
    },
    {
      name: 'May',
      revenue: 0,
    },
    {
      name: 'June',
      revenue: 0,
    },
    {
      name: 'July',
      revenue: 0,
    },
    {
      name: 'August',
      revenue: 0,
    },
    {
      name: 'September',
      revenue: 0,
    },
    {
      name: 'October',
      revenue: 0,
    },
    {
      name: 'November',
      revenue: 0,
    },
    {
      name: 'December',
      revenue: 0,
    },    
  ];

  return (
    <>
    <main className=" w-full h-screen " >
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

        <ResponsiveContainer width="75%" aspect={3} >
        <LineChart data={data} width={800} height={300}
        margin={{ top: 5, right: 30, left: 110,  }} >
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip/>
          <XAxis  dataKey="name" label={{value: ''}} />
          <YAxis dataKey="revenue"   />
          <Line dataKey='uv' type='monotone'/>
        </LineChart>
      </ResponsiveContainer>

    </main>

    </>
  )
}

export default Dashboard
