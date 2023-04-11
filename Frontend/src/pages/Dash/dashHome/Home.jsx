import React, {useEffect, useState}from 'react'
import Charts from '../../../components/charts/Charts'
import FeaturedInfo from '../../../components/featuredInfo/FeaturedInfo'
import './home.css'
import axios from 'axios'
const Home = () => {

  const [products, setProducts]= useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/product').then(res => setProducts(res.data))
      .catch(err => console.log(err))

      .catch(err => console.log(err))
  },
    []
  )

  const lastproducts = products.slice(-5);

  return (
    <div className='home'>
        <FeaturedInfo/>
        <Charts/>
        <div className="last-added">
        <h3>last added products</h3>
        <div className="last">
          {lastproducts.map((product)=>{
            return(
              <div className="product-card">
                <img src={(`http://localhost:5000/${product.image}`)} alt="" />
                <p>{product.product_name}</p>
              </div>
            )  
          })
          }
        </div>
        </div>
    </div>
  )
}

export default Home