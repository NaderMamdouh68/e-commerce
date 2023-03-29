import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './create.css'
const Createuser = () => {

    const [values, setValues] = useState({
        name:"",
        email:"",
        status:"",
        password:"",
        phone:"",
    })
    const nvigate =useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('حط لينك ال ا بي اي هنا', values)
        .then(res => {
            console.log(res);
            nvigate('/dashboard/manageUsers')
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='wrapper'>
        <h2>Create New User</h2>
        <form onSubmit={handleSubmit}>
            <>
            <label htmlFor='username'>Name</label>
            <input type="text" name='username'
                onChange={e=> setValues({...values, name: e.target.value})}
            />
            </>
            <>
            <label htmlFor='status'>Status</label>
            <input type="text" name='status'
                onChange={e=> setValues({...values, status: e.target.value})}
            />
            </>
            <>
            <label htmlFor='email'>E-mail</label>
            <input type="email" name='email'
                onChange={e=> setValues({...values, email: e.target.value})}
            />
            </>
            <>
            <label htmlFor='phone'>Phone</label>
            <input type="text" name='phone'
                onChange={e=> setValues({...values, phone: e.target.value})}
            />
            </>
            <>
            <label htmlFor='password'>Password</label>
            <input type="password" name='password'
                onChange={e=> setValues({...values, password: e.target.value})}
            />
            </>
            <button>submit</button>
        </form>
    </div>
  )
}

export default Createuser