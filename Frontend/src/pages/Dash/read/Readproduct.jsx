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
    <div className='editu'>
        <h2 className='table-title'>{product.product_name}</h2>
        <div className="card">
            <div className='datacontaainer'>Name : {product.product_name}</div>
            <div className='datacontaainer'>Desciption : {product.description}</div>
            <div className='datacontaainer'>Price : {product.price}</div>
            <div className='datacontaainer'>Category : {product.category_name}</div>
        </div>
    </div>
  )
}

export default Readproduct