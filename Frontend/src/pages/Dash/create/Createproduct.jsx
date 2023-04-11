import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './create.css'
const CreateProduct = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/category',{
            headers: {
            authorization : localStorage.getItem('token'),
          }},)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, []
    )


    const [product_name, setProduct_name] = useState('');
    const [category_id, setCategory_id] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');

    const nvigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('product_name', product_name);
        formData.append('category_id', category_id);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('image', file);
        
        axios.post('http://localhost:5000/product/productcreate', formData,{
            headers: {
            authorization : localStorage.getItem('token'),
          }},)
            .then(res => {
                console.log(res.data);
                nvigate('/dashboard/manageProducts')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='editu'>
            <h2 className='table-title'>Create New Product</h2>
            <form onSubmit={handleSubmit}>
                
                <div className="inputcontainer">
                    <label htmlFor='product_name'>product_name</label>
                    <input type="text" name='product_name'
                        onChange={e => setProduct_name(e.target.value)}
                    />
                </div>
                <div className="inputcontainer">
                    <label htmlFor='category_id'>category_name</label>
                    <select name="category_id" id="category_id" onClick={e => setCategory_id(e.target.value)}>
                        {data.map((category, index) => {
                            return (
                                <option key={index} value={category.category_id}>{category.category_name}</option>
                            )
                        }
                        )}
                    </select>
                </div>
                <div className="inputcontainer">
                    <label htmlFor='description'>description</label>
                    <input type="text" name='description'
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div className="inputcontainer">
                    <label htmlFor='price'>price</label>
                    <input type="text" name='price'
                        onChange={e => setPrice(e.target.value)}
                    />
                </div>
                <div className="inputcontainer">
                    <label htmlFor='description'>Description</label>
                    <input
                        type="file"
                        name='image'
                        onChange={e => setFile(e.target.files[0])}
                    />
                </div>
                <button className='editbtn'>submit</button>
            </form>
        </div>
    )
}

export default CreateProduct