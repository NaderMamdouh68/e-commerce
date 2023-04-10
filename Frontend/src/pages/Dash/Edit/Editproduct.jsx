import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import './edituser.css'


const Editproduct = () => {

  const { id } = useParams();
  const [user, setUser] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:5000/product/productshow/'+id)
      .then(res => {
        console.log(res)
        setValues({
          ...values,
          product_name: res.data.product_name,
          price: res.data.price,
          description: res.data.description,
          category_name: res.data.category_name,
          image: res.data.image,

        })
      })
      .catch(err => console.log(err))

  }, [id])

  const [values, setValues] = useState({
    product_name: '',
    price: '',
    description: '',
    category_name: '',
    image: ''
  })

  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/category')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  },
    []
  )

  const handleUpdate = (event) => {
    event.preventDefault()
    axios.put('http://localhost:5000/products/productUpdate/' + id, values)
      .then(res => {
        console.log(res);
        navigate('/dashboard/manageproducts')
      }
      )
      .catch(err => console.log(err))
  }



  return (
    <div>
      <div className='editu'>
        
          <h2 className='table-title'>update Product</h2>
          <div>
              <img className='profile-img' src={values.image} alt="" />
          </div>
          <form onSubmit={handleUpdate}>
            <div className='inputcontainer'>
                <label htmlFor='username'>Name</label>
              <input
                type="text"
                name='product_name'
                value={values.product_name}
                onChange={e => setValues({ ...values, product_name: e.target.value })}
              />
            </div>
            

            <div className='inputcontainer'>
              <label htmlFor='category_id'>category_name</label>
              <select name="category_id" id="category_id" onChange={e => setValues({ ...values, category_id: e.target.value })}>
                {data.map((category, index) => {
                  return (
                    <option key={index} value={category.category_id}>{category.category_name}</option>
                  )
                }
                )}
              </select>
            </div>

            <div className='inputcontainer'>
              <label htmlFor='price'>Price</label>
              <input
                type="text"
                name='price'
                value={values.price}
                onChange={e => setValues({ ...values, price: e.target.value })}
              />
            </div>


            <div className='inputcontainer'>
              <label htmlFor='description'>Description</label>
              <input
                type="text"
                name='description'
                value={values.description}
                onChange={e => setValues({ ...values, description: e.target.value })}
              />
            </div>


            <div className='inputcontainer'>
              <label htmlFor='description'>image</label>
              <input
                type="file"
                name='image'
                onChange={e => setValues({ ...values, image: e.target.files[0] })}
              />
            </div>




            <button className='editbtn'>Edit</button>
          </form>
        </div>
  
    </div>
  )
}

export default Editproduct