import React from 'react'
import ProductCrousel from '../components/Crousel/ProductCrousel'

const AllProducts = () => {
  return (
    <section className='w-screen py-2 '>
    <p className="text-center text-3xl font-bold">All Products</p>
    <div className="p-2 grid grid-cols-2 gap-2">

    {new Array(15).fill(null).map((_, index) => (
       <ProductCrousel key={index} />
    ))}
    
    </div>
    </section>
  )
}

export default AllProducts
