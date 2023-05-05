import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import './edituser.css'

const Edituser = () => {

  const {id} = useParams();
  const navigate = useNavigate()
  const [values, setValues] = useState({
    user_name: '',
    email: '',
    password: '',
    phonenumber: '',
  })

  useEffect(()=>{
    axios.get('http://localhost:5000/user/usershow/'+id)
    .then(res =>{
        console.log(res)
        setValues({...values,
          user_name: res.data.user_name,
          email: res.data.email,
          phonenumber: res.data.phonenumber,
        })
    })
    .catch(err => console.log(err))
    
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [id]) 

  

  const handleUpdate = (event)=>{
    event.preventDefault()
    axios.put('http://localhost:5000/user/userupdate/'+id, values,{
      headers: {
        authorization : localStorage.getItem('token'),
      },
    })
    .then(res =>{
      console.log(res);
      window.location.reload(alert(res.data.msg));
    }
    )
    .catch (err => console.log(err))
  }

  return (
    <div className='editu'>
        <h2 className='table-title'>update User</h2>
        <form onSubmit={handleUpdate}>
          <div className="image">
            <img className='profile-img' src="https://previews.123rf.com/images/yupiramos/yupiramos1610/yupiramos161007352/64369849-young-man-avatar-isolated-icon-vector-illustration-design.jpg" alt=''></img>
            <span className={values.status ? 'status-green' : 'status-red'}></span>
          </div>
        
            <div className="inputcontainer">
            <label htmlFor='username'>Name :</label>
            <input
              type="text"
              name='user_name'
              value={values.user_name}
              onChange={e=> setValues({...values, user_name: e.target.value})}
            />
            </div>
            <div className="inputcontainer">
              <label htmlFor='email'>E-mail</label>
              <input
                type="email"
                name='email'
                value={values.email}
                onChange={e=> setValues({...values, email: e.target.value})}
              />
            </div>
            
            <div className="inputcontainer">
            <label htmlFor='phone'>Phone</label>
            <input
              type="text"
              name='phone'
              value={values.phonenumber}
              onChange={e=> setValues({...values, phonenumber: e.target.value})}
            />
            </div>
             
            <div className="inputcontainer">
              <label htmlFor='password'>Password</label>
              <input
                type="password"
                name='password'
                value={values.password}
                onChange={e=> setValues({...values, password: e.target.value})}
              />
            </div>
        
            <button className='editbtn'>Edit</button>
        </form>

    </div>
  )
}

export default Edituser