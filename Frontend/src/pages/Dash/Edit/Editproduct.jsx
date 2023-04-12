import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import './edituser.css'


const Editproduct = () => {

  const { id } = useParams();
  const navigate = useNavigate()
  const [category_id, setCategory_id] = useState('');
  const [file, setFile] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/product/productshow/' + id)
      .then(res => {
        setProductData({
          product_name: res.data.product_name,
          category_id: res.data.category_id,
          price: res.data.price,
          description: res.data.description,
        })
        setFile(res.data.image)
      })
      .catch(err => console.log(err))

  }, [id])




  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/category')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  },
    []
  )
  const [productData, setProductData] = useState({
    product_name: '',
    category_id: '',
    price: '',
    description: '',
  })

  const handleUpdate = (event) => {
    event.preventDefault()

    axios.put('http://localhost:5000/product/productupdate/' + id, productData, {
      headers: {
        authorization: localStorage.getItem('token'),
      }
    })
      .then(res => {
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
          <img className='profile-img' src={`http://localhost:5000/${file}`} alt="" />
        </div>
        <form onSubmit={handleUpdate}>
          <div className='inputcontainer'>
            <label htmlFor='username'>Name</label>
            <input
              type="text"
              name='product_name'
              value={productData.product_name}
              onChange={e => setProductData({ ...productData, product_name: e.target.value })}
            />
          </div>


          <div className='inputcontainer'>
            <label htmlFor='category_id'>category_name</label>
            <select name="category_id" id="category_id" onClick={e => setProductData({ ...productData, category_id: e.target.value })}>
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
              value={productData.price}
              onChange={e => setProductData({ ...productData, price: e.target.value })}
            />
          </div>


          <div className='inputcontainer'>
            <label htmlFor='description'>Description</label>
            <input
              type="text"
              name='description'
              value={productData.description}
              onChange={e => setProductData({ ...productData, description: e.target.value })}
            />
          </div>
          {/* <div className='inputcontainer'>
              <label htmlFor='description'>img</label>
              <input
                type="text"
                name='img'
                value={values.image}
                onChange={e => setValues({ ...values, image: e.target.value })}
              />
            </div> */}







          <button className='editbtn'>Edit</button>
        </form>
      </div>

    </div>
  )
}

export default Editproduct