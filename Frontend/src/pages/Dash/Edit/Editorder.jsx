
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import './edituser.css'


const Editorder = () => {

    const { id } = useParams();
    const [user, setUser] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('' + id)
          .then(res => {
            console.log(res)
            setValues({
              ...values,
              product_name: res.data[0].product_name,
              price: res.data[0].price,
              description: res.data[0].description,
              category_name: res.data[0].category_name,
              image: res.data[0].image,
    
            })
          })
          .catch(err => console.log(err))
    
      }, [id])
    
      const [values, setValues] = useState({
        product_name: '',
        price: '',
        description: '',
        category_name: '',
        image:''
      })
    
      const [data, setData] = useState([])
        useEffect(() => {
            axios.get('')
                .then(res => setData(res.data))
                .catch(err => console.log(err))
        },
            []
        )
    
      const handleUpdate = (event) => {
        event.preventDefault()
        axios.put('' + id, values)
          .then(res => {
            console.log(res);
            navigate('/dashboard/manageOrders')
          }
          )
          .catch(err => console.log(err))
      }
    
    

  return (
    <div>
              <div className='editu'>
        <div className='wrapper'>
          <h2 className='table-title'>update Product</h2>
          <form onSubmit={handleUpdate}>
            <>
              <label htmlFor='username'>Name</label>
              <input
                type="text"
                name='product_name'
                value={values.product_name}
                onChange={e => setValues({ ...values, product_name: e.target.value })}
              />
            </>
            <>
              <label htmlFor='category_id'>category_name</label>
              <select name="category_id" id="category_id" onChange={e => setValues({ ...values, category_id: e.target.value })}>
                {data.map((category, index) => {
                  return (
                    <option key={index} value={category.category_id}>{category.category_name}</option>
                  )
                }
                )}
              </select>
            </>
            <>
              <label htmlFor='price'>Price</label>
              <input
                type="text"
                name='price'
                value={values.price}
                onChange={e => setValues({ ...values, price: e.target.value })}
              />
            </>
            <>
              <label htmlFor='description'>Description</label>
              <input
                type="text"
                name='description'
                value={values.description}
                onChange={e => setValues({ ...values, description: e.target.value })}
              />
            </>
            <>
              <label htmlFor='description'>Description</label>
              <input
                type="file"
                name='image'
                onChange={e => setValues({ ...values, image: e.target.value })}

              />
              <p>{values.image}</p>
            </>

            <button className='editbtn'>Edit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Editorder