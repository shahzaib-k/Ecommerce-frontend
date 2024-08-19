import React, { useState } from 'react'

const Sort = ({data}) => {

    const [sort, setSort] = useState('')

    const sortedItems = () => {
        const sorted = [...data]

        if(sort ===  "a-z"){
            sorted.sort((a, b) => a.title.localeCompare(b.title))
        }
        if(sort === "z-a"){
            sorted.sort((a, b) => b.title.localeCompare(a.title))
        }if (sort === "lowest") {
            sorted.sort((a,b) => a.price - b.price)
        }
        if (sort === "highest") {
            sorted.sort((a, b) => b.price - a.price)
        }
    }

  return (

    <>

      <section className='w-full flex justify-end pt-20 pr-10 md:pr-20' >
        <select onChange={(e) => {setSort(e.target.value)}} className='appearance-none bg-transparent border-none outline-none text-white cursor-pointer hover:underline p-2' >
          <option  disabled selected hidden >SORT</option>
          <option  value="a-z" className='text-black'  >Alphabetically A-Z</option>
          <option  value="z-a" className='text-black'  >Alphabetically Z-A</option>
          <option  value="highest"  className='text-black'  >Price: High to low</option>
          <option   value="lowest" className='text-black'  >Price: low to High</option>
        </select>
      </section>

    </>
  )
}

export default Sort
