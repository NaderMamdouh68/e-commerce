import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './read.css'

const Readcategory = () => {
   const { id } = useParams();
   const [category, setCategory] = useState([])
   
   useEffect(()=>{
    axios.get(''+id)
    .then(res =>{
        console.log(res)
        setCategory(res.data[0]);
    })
    .catch(err => console.log(err))
    
   }, [id]) 
  return (
    <div className='readuser'>
        <h2>{category.name}</h2>
        <div className="card">
            <span>{category.name}</span>
            <span>{category.password}</span>
            <span>{category.email}</span>
        </div>
    </div>
  )
}

export default Readcategory