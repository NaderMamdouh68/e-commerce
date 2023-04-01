import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './read.css'

const Readuser = () => {
   const { id } = useParams();
   const [user, setUser] = useState([])
   
   useEffect(()=>{
    axios.get('http://localhost:5000/users/userdetails/'+id)
    .then(res =>{
        console.log(res)
        setUser(res.data[0]);
    })
    .catch(err => console.log(err))
    
   }, [id]) 
  return (
    <div className='readuser'>
        <h2>{user.user_name}</h2>
        <div className="card">
              <span>{user.user_id}</span>
              <span>{user.user_name}</span>
              <span>{user.status}</span>
              <span>{user.email}</span>
              <span>{user.phonenumber}</span>
        </div>
    </div>
  )
}

export default Readuser