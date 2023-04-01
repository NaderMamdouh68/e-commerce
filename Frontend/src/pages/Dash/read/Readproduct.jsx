import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './read.css'

const Readproduct = () => {
   const { id } = useParams();
   const [product, setProduct] = useState([])
   
   useEffect(()=>{
    axios.get('http://localhost:5000/products/readproduct/'+id)
    .then(res =>{
        console.log(res)
        setProduct(res.data[0]);
    })
    .catch(err => console.log(err))
    
   }, [id]) 
  return (
    <div className='readuser'>
        <h2>{product.product_name}</h2>
        <div className="card">
            <span>{product.product_name}</span>
            <span>{product.description}</span>
            <span>{product.price}</span>
            <span>{product.category_name}</span>
        </div>
    </div>
  )
}

export default Readproduct