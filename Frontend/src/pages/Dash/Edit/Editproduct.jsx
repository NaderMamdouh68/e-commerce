import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import './edituser.css'


const Editproduct = () => {

  const { id } = useParams();
  const [user, setUser] = useState([])
  const navigate = useNavigate()
  const [product_name, setProduct_name] = useState('');
  const [category_id, setCategory_id] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/product/productshow/'+id)
      .then(res => {
        console.log(res)
        setProduct_name(res.data.Product_name)
        setCategory_id(res.data.category_id)
        setPrice(res.data.price)
        setDescription(res.data.description)
        setFile(res.file.image)
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

  const handleUpdate = (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append('product_name', product_name);
    formData.append('category_id', category_id);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('image', file);
    
    axios.put('http://localhost:5000/product/productupdate/' + id, formData,{
      headers: {
        authorization : localStorage.getItem('token'),
      }
    })
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
              <img className='profile-img' src={`http://localhost:5000/${file}`} alt="" />
          </div>
          <form onSubmit={handleUpdate}>
            <div className='inputcontainer'>
                <label htmlFor='username'>Name</label>
              <input
                type="text"
                name='product_name'
                value={product_name}
                onChange={e => setProduct_name(e.target.value)}
              />
            </div>
            

            <div className='inputcontainer'>
              <label htmlFor='category_id'>category_name</label>
              <select name="category_id" id="category_id" onClick={e => setCategory_id(e.target.value)}>
                {data.map((category, index) => {
                  return (
                    <option key={index} value={category_id}>{category.category_name}</option>
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
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
            </div>


            <div className='inputcontainer'>
              <label htmlFor='description'>Description</label>
              <input
                type="text"
                name='description'
                value={description}
                onChange={e => setDescription(e.target.value)}
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


            <div className='inputcontainer'>
              <label htmlFor='description'>image</label>
              <input
                        type="file"
                        name='image'
                        onChange={e => setFile(e.target.files[0])}
                    />
            </div>
            



            <button className='editbtn'>Edit</button>
          </form>
        </div>
  
    </div>
  )
}

export default Editproduct