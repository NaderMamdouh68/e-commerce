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
   const imgname = 'download.jpeg'
  return (
    <div className='editu'>
        <h2 className='table-title'>{user.user_name}</h2>
        <div className="">
              <div className="image">
                <img className='profile-img' src={require(`../../../images/${imgname}`)}></img>
              </div>
              <div className='datacontaainer'>ID : {user.user_id}</div>
              <div className='datacontaainer'>Name : {user.user_name}</div>
              {/* <div >{user.status}</div> */}
              <div className='datacontaainer'>E-mail : {user.email}</div>
              <div className='datacontaainer'>Phone : {user.phonenumber}</div>
        </div>
    </div>
  )
}

export default Readuser