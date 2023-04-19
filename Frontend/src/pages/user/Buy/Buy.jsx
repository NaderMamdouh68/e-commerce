import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './buy.css'
import Product from '../../../components/product/Product'
import { FaPaperPlane } from 'react-icons/fa'

function Buy() {

    const { id } = useParams();
    const [item, seItem] = useState([])
    const [categories, setCategories] =useState([])
    const [products, setProducts] = useState([])
    const [feedback, setFeedback] = useState({
        user_id : "",
        product_id : item.product_id,
        comment:"",
    })
    
    useEffect(()=>{
     axios.get('http://localhost:5000/product/productshow/'+id)
     .then(res =>{
         console.log(res)
         seItem(res.data);
     })
     .catch(err => console.log(err))
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
     
    }, [id]) 
    
    function handleSubmit(event) {
        event.preventDefault()        
        try {
            axios.post('http://localhost:5000/product/', feedback, {
                headers: {
                    authorization: localStorage.getItem('token'),
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className='buy'>
            <div class="Image-Contanir">
                <img src={`http://localhost:5000/${item.image}`} alt="" />
            </div>
            <div class="Name-Contanir">
                <span>{item.product_name}</span>
            </div>
            <div class="Price-Contanir">
                <span>{`${item.price}$`}</span>
            </div>
            <div class="desctiption-Contanir">
                <h4>description</h4>
                <p>
                    {item.description}
                </p>
            </div>
            <div class="feedback-Contanir">
                <form action="" onSubmit={handleSubmit}>
                    <textarea placeholder='your feedback'  onChange={e=> setFeedback({...feedback, comment: e.target.value})}/>
                    <button><FaPaperPlane /> </button>
                </form>
            </div>
            <div className="semilar-proucts">
                <h2>you may like</h2>

                <div className='product-container'>
                    {    
                     
                    }
                    <Product />
                    <Product />
                    
                </div>
            </div>
        </section>
    )
}

export default Buy