import React from 'react'
import './products.css'
import Product from '../../../components/product/Product'
import { FaSearch } from 'react-icons/fa'

function Products  () {
  return (
    <section className='our-products'>
        <div className="search">
            <input type="text" />
            <FaSearch/>
        </div>
        <div className="category">
          <h2>category name</h2> 
          <div className='product-cont'>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          </div> 
        </div>
        <div className="category">

        </div>
    </section>
  )
}

export default Products