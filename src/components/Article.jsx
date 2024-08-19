import React from 'react'
import AnimatedSection from '../utils/AnimatedSection'
import Portrait from "../assets/Portrait.jpeg"


const Article = () => {
  return (
    <>
      <main className="w-full h-full bg-[#F5F7F8] py-10 md:px-14 flex flex-col-reverse md:flex-row gap-4 overflow-x-hidden">
        <AnimatedSection from="left">
          <section className="w-[98vw] flex justify-center md:w-[45vw]  ">
            
            <img src={Portrait} className='w-[88vw] sm:w-[70vw] md:w-[45vw] lg:w-[30vw] h-[57vh] md:h-[70vh]' />

          </section>
        </AnimatedSection>
        <AnimatedSection from="right">
          <section className=" w-[90vw] pl-10 sm:pl-28 md:pl-2  md:w-[40vw] text-wrap">
            <h2 className=" text-4xl md:text-6xl  lg:text-7xl font-bold">BUILT FOR <br/> EVERY ADVENTURE</h2>
            <p className='mt-6 md:mt-8 leading-7  lg:text-lg' >From rugged hiking pants to breathable trekking shirts we've got the gear to
            take you wherever your compass points. Discover innovative fabrics, durable and timeless designs that 
            blend seamlessly into any trail or terrain.</p>
          </section>
        </AnimatedSection>
        
      </main>
    </>
  )
}

export default Article
