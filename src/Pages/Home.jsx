import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import Header from '../components/Header'
import Article from '../components/Article'
import Categories from '../components/Categories'
import Collection from '../components/Collection'
import Footer from '../components/Footer'

const Home = () => {   
  
    return (
    <>
  
      <Header/>
      
      <Article/>

      <Categories/>

      <Collection/>

      <Footer/>
    </>
  )
}

export default Home
