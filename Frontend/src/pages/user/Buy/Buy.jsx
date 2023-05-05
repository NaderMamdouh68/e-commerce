/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './buy.css'
import Product from '../../../components/product/Product'
import { FaPaperPlane } from 'react-icons/fa'

function Buy() {

    const { id } = useParams();
    const [item, seItem] = useState([])
    const [quantity, setQuantity] = useState([])
    const [products, setProducts] = useState([])
    const [feedback, setFeedback] = useState({
        product_id: "",
        comment: "",
    })

    useEffect(() => {
        axios.get('http://localhost:5000/product/productshow/' + id)
            .then(res => {
                seItem(res.data);
                setFeedback({ ...feedback, product_id: res.data.product_id })
            })
            .catch(err => console.log(err))
        axios.get('http://localhost:5000/product')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))

    }, [id])

    function handleSubmit(event) {
        event.preventDefault()
        if (!localStorage.getItem('token')) {
            alert('you must login first')
            return window.location.href = '/login'
        }
        setFeedback({ ...feedback, product_id: item.product_id })
        try {
            axios.post('http://localhost:5000/product/productfeedback', feedback, {
                headers: {
                    authorization: localStorage.getItem('token'),
                }
            })
                .then(res => alert(res.data.msg))
                .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }

    function handelBuy() {
        if (!localStorage.getItem('token')) {
            alert('you must login first')
            return window.location.href = '/login'
        }
        try {
            item.quantity = quantity
            axios.post('http://localhost:5000/order/creatorder', item, {
                headers: {
                    authorization: localStorage.getItem('token'),
                }
            })
                .then(res => alert(res.data.msg))
                .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <section className='buy'>
            <div className="Image-Contanir">
                <img src={`http://localhost:5000/${item.image}`} alt="" />
            </div>
            <div className="Name-Contanir">
                <span>{item.product_name}</span>
            </div>
            <div className="Price-Contanir">
                <span>{`${item.price}$`}</span>
            </div>
            <div className="desctiption-Contanir">
                <h1>Description : </h1>
                <p className='pppp'>
                    {item.description}
                </p>
                <div className='ddd'>
                <button onClick={handelBuy} className='btn'>buy</button>
                <label htmlFor="Quntity" className='lin'>Quntity :</label>
                <input type="text" className='in'
                    name="Quntity"
                    id="Quntity"
                    onChange={e => setQuantity(e.target.value)}
                />
                </div>
            </div>
            <div className="feedback-Contanir">
                <form action="" onSubmit={handleSubmit}>
                    <textarea placeholder='your feedback' onChange={e => setFeedback({ ...feedback, comment: e.target.value })} />
                    <button><FaPaperPlane /> </button>
                </form>
            </div>
            <div className="semilar-proucts ">
                <h2>you may like</h2>

                <div className='product-container'>

                    {products.map((product, index) => {
                        if (product.category_id === item.category_id) {
                            if (product.product_id !== item.product_id) {
                                return (
                                    <Product key={index}
                                        id={product.product_id}
                                        name={product.product_name}
                                        price={product.price}
                                        image={product.image}

                                    />
                                )
                            }
                        }
                    })}


                </div>
            </div>
        </section>
    )
}

export default Buy