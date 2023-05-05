import React, { useEffect, useState } from 'react'
import './home.css'
import '../../../components/header/header.css'
import Product from '../../../components/product/Product'
import Category from '../../../components/product/Category'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { FaShippingFast } from 'react-icons/fa'
function Customerhome() {

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/product')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  },
    []
  )
  const lastproducts = products.slice(-8);
  const foryou = products.reverse().slice(-8);

  useEffect(() => {
    axios.get('http://localhost:5000/category')
      .then(res => setCategories(res.data))
      .catch(err => console.log(err))
  },
    []
  )



  return (
    <div className='Home'>
      <main>
        <div className="content">
          <svg className='title-home'>
            <text x="50%" y="50%" dy="0.2em" text-anchor="middle">
              UP TO 50% OFF
            </text>
          </svg>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, ipsa? Nesciunt est velit qui saepe?</p> */}
          <Link to="/products" className="exploremore">
            Explore More &rarr;
          </Link>
        </div>
        <div className="main-mage">
          <img src={require("../../../assits/main-banner-1.jpg")} alt="" />
        </div>
      </main>
      <section className="categories">
        {
          categories.map((category) => {

            return (
              <Category
                id={category.category_id}
                category_name={category.category_name}
                description={category.description}
                image={products.filter((product) => product.category_id === category.category_id).map((product) => product.image)[0]}

              />
            )
          })
        }
      </section>
      <section className="products">
        <h1 className="headingg">
          <span>L</span>
          <span>A</span>
          <span>T</span>
          <span>E</span>
          <span>S</span>
          <span>T</span>
          <span class="space"></span>
          <span>P</span>
          <span>O</span>
          <span>D</span>
          <span>U</span>
          <span>C</span>
          <span>T</span>
        </h1>
        <div className="order-cont">


            {lastproducts.map((product, index) => {
                return (
                  <div className="order" key={index}>
                    <Link  to={`/buy/${product.product_id}`} >
                    <div className="image">
                      <img src={`http://localhost:5000/${product.image}`} alt="" />
                      <span className='cc'>{product.category_name}</span>
                    </div>
                    <span className='cc'>{product.category_name}</span>
                    <div className="count_data">
                      <h1>{product.product_name}</h1>
                      <span></span>
                      <h1 className='pp'>{product.price}$</h1>
                    </div>
                    </Link>
                  </div>

                )
              }
            )
            }
          </div>
      </section>
      <section className="products">
        <h1 className="headingg">
          <span>F</span>
          <span>O</span>
          <span>R</span>
          <span class="space"></span>
          <span>Y</span>
          <span>O</span>
          <span>U</span>
        </h1>
        <div className='product-cont'>
          {
            foryou.map((product) => {
              return (
                <Product
                  id={product.product_id}
                  name={product.product_name}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                  category_name={product.category_name}
                />
              )
            })
          }
        </div>
      </section>
      <section className="products">
        <h1 className="headingg">
          <span>S</span>
          <span>E</span>
          <span>R</span>
          <span>V</span>
          <span>E</span>
          <span>S</span>
        </h1>
        <div className='ma'>
          <div class="cards">
            <div class="contentt">
              <div class="icon"><FaShippingFast className='i' /></div>
              <div class="title">Web Development</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
            </div>
          </div>
          <div class="cards">
            <div class="contentt">
              <div class="icon"><FaShippingFast className='i' /></div>
              <div class="title">Web Development</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
            </div>
          </div>
          <div class="cards">
            <div class="contentt">
              <div class="icon"><FaShippingFast className='i' /></div>
              <div class="title">Web Development</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
            </div>
          </div>
          <div class="cards">
            <div class="contentt">
              <div class="icon"><FaShippingFast className='i' /></div>
              <div class="title">Web Development</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
            </div>
          </div>
          <div class="cards">
            <div class="contentt">
              <div class="icon"><FaShippingFast className='i' /></div>
              <div class="title">Web Development</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
            </div>
          </div>
          <div class="cards">
            <div class="contentt">
              <div class="icon"><FaShippingFast className='i' /></div>
              <div class="title">Web Development</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
            </div>
          </div>

        </div>
      </section>

      {/* <section className="services">
        <h2>OUR SERVICES</h2>
        <div className="services-cont">
          <article>
            <FaShippingFast className='icon' />
            <h3>fast shipping</h3>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </article>

          <article>
            <FaMoneyBillWave className='icon' />
            <h3>cheap products</h3>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </article>

          <article>
            <MdOutlineEqualizer className='icon' />
            <h3>high quality</h3>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </article>
        </div>
      </section> */}
      <section className="about-us small">
        <h2>ABOUT_US</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id excepturi optio eos aut architecto temporibus suscipit nam enim atque dolores cumque, quasi dolorum, animi eum perspiciatis, totam mollitia dolore expedita beatae possimus. Impedit totam eligendi quibusdam repudiandae tenetur dolor. Odit?</p>
        <Link to='/about'><button className='learn'>learn more</button></Link>
      </section>

    </div>
  )
}

export default Customerhome