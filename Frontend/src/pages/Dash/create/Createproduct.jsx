import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './create.css'
const CreateProduct = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/categories')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, []
    )

    const [values, setValues] = useState({
        product_name: "",
        category_id: "",
        price: "",
        description: "",
        image: ""
    })
    const nvigate = useNavigate();
    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('product_name', values.product_name);
        formData.append('category_id', values.category_id);
        formData.append('price', values.price);
        formData.append('description', values.description);
        formData.append('image', values.image);
        e.preventDefault();
        axios.post('http://localhost:5000/products/productcreate', values)
            .then(res => {
                console.log(res.data);
                console.log(res);
                nvigate('/dashboard/manageproducts')
            })
            .catch(err => {
                console.log(err)
                console.log(err.response);
            })
    }

    return (
        <div className='editu'>
            <h2 className='table-title'>Create New Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="inputcontainer">
                    <label htmlFor='product_name'>product_name</label>
                    <input type="text" name='product_name'
                        onChange={e => setValues({ ...values, product_name: e.target.value })}
                    />
                </div>
                <div className="inputcontainer">
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
                <div className="inputcontainer">
                    <label htmlFor='description'>description</label>
                    <input type="text" name='description'
                        onChange={e => setValues({ ...values, description: e.target.value })}
                    />
                </div>
                <div className="inputcontainer">
                    <label htmlFor='price'>price</label>
                    <input type="text" name='price'
                        onChange={e => setValues({ ...values, price: e.target.value })}
                    />
                </div>
                <div className="inputcontainer">
                    <label htmlFor='description'>Description</label>
                    <input
                        type="file"
                        name='image'
                        onChange={e => setValues({ ...values, image: e.target.value })}

                    />
                    <p>{values.image}</p>
                </div>
                <button className='editbtn'>submit</button>
            </form>
        </div>
    )
}

export default CreateProduct