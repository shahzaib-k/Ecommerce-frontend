import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Categories = () => {

  const settings = {
    accessibility:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

    const data = [
      {image: 'https://res.cloudinary.com/dxv0y4eyv/image/upload/v1720353273/q0d7b9upbvditqgl2xfc.jpg' , title: "Men", path : "/men" }, 
      {image: 'https://res.cloudinary.com/dxv0y4eyv/image/upload/v1720349988/dammjjh7jyoxye2lvl2x.jpg' , title: "Women", path : "/women" },
      {image: 'https://res.cloudinary.com/dxv0y4eyv/image/upload/v1720332095/jaskowortmyt4rjpzshi.webp' , title: "Kids", path : "/kids" },
      {image: 'https://shop.dior.co.th/cdn/shop/products/Y0996474_C099600671_E01_GHC.jpg?v=1643611184' , title: "Perfumes", path : "/" },
      {image: 'https://static-01.daraz.pk/p/b2542f964b053c00ea43ed3a777ddbd7.jpg' , title: "Accessories", path : "/" },
    ]

  return (
    <>
      <main className=' w-full h-full bg-[#F5F7F8]' >

      <h1 className='text-4xl font-serif font-semibold text-center py-10' > Categories</h1>
       
        <section className="w-3/4 m-auto">
          <div className="">
            <Slider {...settings} >

              {
                data.map((items) => (
                  
                  <div className='min-w-72 md:min-w-80 min-h-60 py-10 px-4' >
                    <div className="relative group">
                      <img src={items.image} className='w-full h-96 z-[-1] pointer-events-none' /> 
                      <h1 className='absolute top-40 left-[38%] z-[10] group-hover:opacity-0 text-white bg-black bg-opacity-20 px-2 py-0.5 text-2xl font-semibold md:font-bold' >{items.title}</h1>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <Link to={items.path} className="z-[100] bg-green-400 text-white text-center pt-1 w-28 h-8 rounded cursor-pointer">See More</Link>
                      </div>
                    </div> 

                  </div>
                  ))
                }
            </Slider>
              
          </div>
        </section> 
         
      </main>

    </>
  )
}

export default Categories
