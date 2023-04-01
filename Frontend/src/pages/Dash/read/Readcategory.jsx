import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './read.css'

const Readcategory = () => {
   const { id } = useParams();
   const [category, setCategory] = useState([])
   
   useEffect(()=>{
    axios.get('http://localhost:5000/categories/categorydetails/'+id)
    .then(res =>{
        console.log(res)
        setCategory(res.data[0]);
    })
    .catch(err => console.log(err))
    
   }, [id]) 
  return (
    <div className='readuser'>
        <h2>{category.category_name}</h2>
        <div className="card">
            <span>{category.category_name}</span>
            <span>{category.title}</span>
            <span>{category.description}</span>
        </div>
    </div>
  )
}

export default Readcategory