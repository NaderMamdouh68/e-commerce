import React from 'react'
import './buy.css'
import Product from '../../../components/product/Product'
import { FaPaperPlane } from 'react-icons/fa'

function Buy() {
    return (
        <section className='buy'>
            {/* <div className='buy-product'>
            <div className="about">

            </div>
            <div className="imagepro">
                <img src={require("../../../assits/prodect-11.jpg")} alt="" />
            </div>
        </div>


        <div className='feedback'>
            <input type="text" placeholder='your feedback'/>
            <button> send </button>
        </div>
        <div className='product-cont'>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div> */}
            <div class="Image-Contanir">
                <img src={require("../../../assits/prodect-11.jpg")} alt="" />
            </div>
            <div class="Name-Contanir">
                <span>Name Produact</span>
            </div>
            <div class="Price-Contanir">
                <span>20$</span>
            </div>
            <div class="desctiption-Contanir">
                <h4>description</h4>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque debitis libero magni a, quis illo distinctio?
                </p>
            </div>
            <div class="feedback-Contanir">
                <form action="">
                    <textarea placeholder='your feedback' />
                    <button><FaPaperPlane /> </button>
                </form>
            </div>
            <div className="semilar-proucts">
                <h2>you may like</h2>

                <div className='product-container'>

                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </section>
    )
}

export default Buy