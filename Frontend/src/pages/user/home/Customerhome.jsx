import React from 'react'
import './home.css'
import Product from '../../../components/product/Product'
import { Link } from 'react-router-dom'
function Customerhome() {
  return (
    <div>
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
          <Product />
          <Product />
          <Product />
          <Product />
        </div>

      </section>
    </div>
  )
}

export default Customerhome