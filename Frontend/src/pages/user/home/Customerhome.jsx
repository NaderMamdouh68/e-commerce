import React, { useEffect, useState } from 'react'
import './home.css'
import Product from '../../../components/product/Product'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { FaMoneyBillWave, FaShippingFast } from 'react-icons/fa'
import { MdOutlineEqualizer } from 'react-icons/md'
function Customerhome() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/product')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  },
    []
  )
  const lastproducts = products.slice(-4);

  return (
    <div className='Home'>
      <main>
        <div className="content">
          <svg className='title-home'>
            <text x="50%" y="50%" dy="0.2em" text-anchor="middle">
              title
            </text>
          </svg>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, ipsa? Nesciunt est velit qui saepe?</p>
          <Link to="/products" className="exploremore">
            explore more &rarr;
          </Link>
        </div>
        <div className="main-mage">
          <img src={require("../../../assits/pexels-nataliya-vaitkevich-6214476.jpg")} alt="" />
        </div>
      </main>
      <section className="products">
        <div className='product-cont'>
          {
            lastproducts.map((product) => {
              return (
                <Product
                  id={product.product_id}
                  name={product.product_name}
                  price={product.price}
                  image={product.image}

                />
              )
            })
          }
        </div>
      </section>
      <section className="services">
        <h2>OUR SERVICES</h2>
        <div className="services-cont">
        <article>
          <FaShippingFast className='icon'/>
          <h3>fast shipping</h3>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </article>

        <article>
          <FaMoneyBillWave className='icon'/>
          <h3>cheap products</h3>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </article>

        <article>
          <MdOutlineEqualizer className='icon'/>
          <h3>high quality</h3>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </article>
        </div>
      </section>
      <section className="about-us small">
        <h2>ABOUT_US</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id excepturi optio eos aut architecto temporibus suscipit nam enim atque dolores cumque, quasi dolorum, animi eum perspiciatis, totam mollitia dolore expedita beatae possimus. Impedit totam eligendi quibusdam repudiandae tenetur dolor. Odit?</p>
        <button className='learn'>learn more</button>
      </section>

    </div>
  )
}

export default Customerhome