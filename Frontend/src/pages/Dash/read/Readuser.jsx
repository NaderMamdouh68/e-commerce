import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './read.css'

const Readuser = () => {
   const { id } = useParams();
   const [user, setUser] = useState([])
   
   useEffect(()=>{
    axios.get('http://localhost:5000/users/read/'+id)
    .then(res =>{
        console.log(res)
        setUser(res.data[0]);
    })
    .catch(err => console.log(err))
    
   }, [id]) 
  return (
    <div className='readuser'>
        <h2>{user.name}</h2>
        <div className="card">
            <span>{user.name}</span>
            <span>{user.password}</span>
            <span>{user.email}</span>
        </div>
    </div>
  )
}

export default Readuser