import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './read.css'

const Readproduct = () => {
   const { id } = useParams();
   const [product, setProduct] = useState([])
   
   useEffect(()=>{
    axios.get(''+id)
    .then(res =>{
        console.log(res)
        setProduct(res.data[0]);
    })
    .catch(err => console.log(err))
    
   }, [id]) 
  return (
    <div className='readuser'>
        <h2>{product.name}</h2>
        <div className="card">
            <span>{product.name}</span>
            <span>{product.password}</span>
            <span>{product.email}</span>
        </div>
    </div>
  )
}

export default Readproduct