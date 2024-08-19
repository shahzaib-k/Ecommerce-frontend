import React, { useState } from 'react'
import Navbar from '../Navbar'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddProducts = () => {
    const [image, setImage] = useState(null)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [size, setSize] = useState([])
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [color, setColor] = useState('#000000')

    const navigate = useNavigate()

    const handleSizeChange = (e) => {
        const { value, checked } = e.target
        if (checked) {
            setSize([...size, value])
        } else {
            setSize(size.filter((size) => size !== value))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.append('image', image)
            formData.append('title', title)
            formData.append('description', description)
            formData.append('category', category)
            formData.append('size', JSON.stringify(size)) // Convert size array to string
            formData.append('price', price)
            formData.append('quantity', quantity)
            formData.append('color', color)

            const res = await axios.post("http://localhost:3000/products/upload", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            toast.success("Product added successfully")
            formData("")
            
            navigate("/all-products")
            
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <main className='w-full h-screen'>
                <Navbar />

                <h1 className="text-4xl font-serif font-semibold text-center pt-6">Product Information</h1>

                <section className='min-h-[85vh] flex justify-center mt-8 pb-10'>
                    <form onSubmit={handleSubmit} className='flex flex-col'>
                        <label className='text-lg'>Image</label>

                        <label htmlFor='image' className='text-white text-center cursor-pointer w-60 md:w-80 py-1 pl-2 bg-black mt-1
                         hover:bg-transparent hover:text-black hover:border hover:border-black'>Add Image</label>
                        <input required onChange={(e) => setImage(e.target.files[0])} type='file' id='image' className='hidden' />

                        <label className='text-lg mt-2'>Name</label>
                        <input type='text' required onChange={(e) => setTitle(e.target.value)} placeholder='Enter product name' className='w-60 h-10 md:w-80 border border-black outline-none rounded pl-1' />

                        <label className='text-lg mt-2'>Description</label>
                        <textarea required onChange={(e) => setDescription(e.target.value)} placeholder='Enter product description' className='w-60 h-10 md:w-80 border border-black outline-none rounded pl-1 pt-2' />

                        <label className='text-lg mt-2'>Price</label>
                        <input required type='number' onChange={(e) => setPrice(e.target.value)} placeholder='Enter product price' className='w-60 h-10 md:w-80 border border-black outline-none rounded pl-1' />

                        <label className='text-lg mt-2'>Quantity</label>
                        <input required type='number' onChange={(e) => setQuantity(e.target.value)} placeholder='Enter product quantity' className='w-60 h-10 md:w-80 border border-black outline-none rounded pl-1' />

                        <label className='text-lg mt-2'>Category</label>
                        <div className='flex gap-8 text-lg mt-1'>
                            <label className='flex gap-2'>
                                <input type="radio" name="option" value="men" onChange={(e) => setCategory(e.target.value)} />
                                Men
                            </label>
                            <label className='flex gap-2'>
                                <input type="radio" name="option" value="women" onChange={(e) => setCategory(e.target.value)} />
                                Women
                            </label>
                            <label className='flex gap-2'>
                                <input type="radio" name="option" value="kids" onChange={(e) => setCategory(e.target.value)} />
                                Kids
                            </label>
                        </div>

                        <label className='text-lg mt-2'>Size</label>
                        <div className='flex gap-8 text-lg mt-1'>
                            <label className='flex gap-2'>
                                <input type="checkbox" name="option" value="small" onChange={handleSizeChange} />
                                S
                            </label>
                            <label className='flex gap-2'>
                                <input type="checkbox" name="option" value="medium" onChange={handleSizeChange} />
                                M
                            </label>
                            <label className='flex gap-2'>
                                <input type="checkbox" name="option" value="large" onChange={handleSizeChange} />
                                L
                            </label>

                        </div>

                        <label htmlFor="colorPicker" className='text-lg mt-2'>Choose a color </label>
                        <div className='flex gap-8 text-lg mt-1'>
                            <input required type="color" onChange={(e) => setColor(e.target.value)} id="colorPicker" name="colorPicker" />
                        </div>

                        <div className='flex flex-row gap-5' >

                          <input type='submit' className='text-white cursor-pointer w-28 md:w-36 h-8 bg-black mt-4
                          hover:bg-transparent hover:text-black hover:border hover:border-black' />

                          <Link to='/' className='text-center text-black cursor-pointer w-28 md:w-36 h-8 bg-white mt-4 pt-1
                         border border-black'  >Cancel</Link>

                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}

export default AddProducts
