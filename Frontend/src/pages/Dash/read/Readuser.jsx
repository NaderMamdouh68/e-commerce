import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './read.css'

const Readuser = () => {
   const {id} = useParams();
   const [student, setStudent] = useState([])
   useEffect(()=>{
    axios.get(''+id)
    .then(res =>{
        console.log(res)
        setStudent(res.data);
    })
    .catch(err => console.log(err))
   },[]) 
  return (
    <div className='readuser'>
        <h2>user.username</h2>
        <div className="card">
            <span>`name mik`</span>
            <span>`phone 012`</span>
            <span>`email @gmail .com`</span>
            <span>`status actiie`</span>
            <span>`password 12323`</span>
        </div>
    </div>
  )
}

export default Readuser