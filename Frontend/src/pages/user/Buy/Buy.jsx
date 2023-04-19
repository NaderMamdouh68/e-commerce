import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './buy.css'
import Product from '../../../components/product/Product'
import { FaPaperPlane } from 'react-icons/fa'

function Buy() {

    const { id } = useParams();
    const [product, setProduct] = useState([])
    
    useEffect(()=>{
     axios.get('http://localhost:5000/product/productshow/'+id)
     .then(res =>{
         console.log(res)
         setProduct(res.data);
     })
     .catch(err => console.log(err))
     
    }, [id]) 
    
    function handleSubmit(event) {
        event.preventDefault()
        console.log("feedback")
    }

    return (
        <section className='buy'>
            <div class="Image-Contanir">
                <img src={`http://localhost:5000/${product.image}`} alt="" />
            </div>
            <div class="Name-Contanir">
                <span>{product.product_name}</span>
            </div>
            <div class="Price-Contanir">
                <span>{`${product.price}$`}</span>
            </div>
            <div class="desctiption-Contanir">
                <h4>description</h4>
                <p>
                    {product.description}
                </p>
            </div>
            <div class="feedback-Contanir">
                <form action="" onSubmit={handleSubmit}>
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