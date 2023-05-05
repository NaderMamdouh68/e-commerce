/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './products.css'
import Product from '../../../components/product/Product'
import { FaSearch } from 'react-icons/fa'
import axios from 'axios';

function Category() {

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const { id } = useParams()

  useEffect(() => {
    axios.get('http://localhost:5000/category/categoryproductdetails/' + id, {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    })
      .then(res => setCategories(res.data))
      .catch(err => console.log(err))

    axios.get('http://localhost:5000/product')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }, [id]
  )

  function handelSearch() {
    axios.get(`http://localhost:5000/product`, {
      params: {
        search: search
      }
    }
    )
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }


  return (
    <section className='our-products'>
      <div className="search">
        <input type="text" onChange={e => setSearch(e.target.value)} />
        <FaSearch onClick={handelSearch} className='searchIcon' />
      </div>
      {
        categories.length > 0 &&
        <div className="category">
          <h1>{categories[0].category_name}</h1>
          <div className='product-cont'>
            {
              products.map((product, index) => {
                if (categories[0].category_id === product.category_id) {
                  return (
                    <Product key={index}
                      id={product.product_id}
                      name={product.product_name}
                      price={product.price}
                      description={product.description}
                      image={product.image}

                    />
                  )
                }
              })
            }
          </div>
        </div>
      }
    </section>
  )
}

export default Category