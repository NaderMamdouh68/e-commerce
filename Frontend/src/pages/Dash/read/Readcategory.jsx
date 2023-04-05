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
    <div className='editu'>
        <h2 className='table-title'>{category.category_name}</h2>
        <div className="card">
            <div className='datacontaainer'>Name : {category.category_name}</div>
            <div className='datacontaainer'>Title : {category.title}</div>
            <div className='datacontaainer'>Description : {category.description}</div>
        </div>
    </div>
  )
}

export default Readcategory