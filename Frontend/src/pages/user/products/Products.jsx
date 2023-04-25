/* eslint-disable array-callback-return */
import React, { useEffect , useState} from 'react'
import './products.css'
import Product from '../../../components/product/Product'
import { FaSearch } from 'react-icons/fa'
import axios from 'axios';

function Products  () {

  const [categories, setCategories] =useState([])
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  
  useEffect(()=>{
      axios.get('http://localhost:5000/category',{
        headers: {
        authorization : localStorage.getItem('token'),
      },
    })
      .then(res => setCategories(res.data))
      .catch(err => console.log(err))

      axios.get('http://localhost:5000/product')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  },[]
  )

  function handelSearch() {
    axios.get(`http://localhost:5000/product`,{
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
            <input type="text" onChange={e => setSearch(e.target.value)}/>
            <FaSearch onClick={handelSearch} className='searchIcon' />
        </div>
        {categories.map((category)=>{
          return(
            <div className="category">
          <h1>{category.category_name}</h1> 
          <div className='product-cont'>
          {
            products.map((product ,index)=>{
              if(category.category_id === product.category_id){
              return(
                <Product key={index}
                  id ={product.product_id}
                  name ={product.product_name}
                  price = {product.price}
                  image = {product.image}

                />
              )
              }
            })
          }
          </div> 
        </div>
          )
        })}
    </section>
  )
}

export default Products