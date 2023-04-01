import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './create.css'
const CreateProduct = () => {

    const [data, setData] =useState([])
    useEffect(()=>{
        axios.get('')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },
   []
    )

    const [values, setValues] = useState({
        product_name: "",
        category_name: "",
        price: "",
        description: "",
    })
    const nvigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('', values)
            .then(res => {
                console.log(res);
                nvigate('/dashboard/manageproductss')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='wrapper'>
            <h2>Create New Category</h2>
            <form onSubmit={handleSubmit}>
                <>
                    <label htmlFor='product_name'>product_name</label>
                    <input type="text" name='product_name'
                        onChange={e => setValues({ ...values, product_name: e.target.value })}
                    />
                </>
                <>
                    <label htmlFor='category_name'>category_name</label>
                    <select name="cars" id="cars">
                    {data.map((product, index) =>{
                        return(
                        <option value={product.product_id}>{product.product_name}</option>
                        )}   
                    </select>
                </>
                <>
                    <label htmlFor='description'>description</label>
                    <input type="text" name='description'
                        onChange={e => setValues({ ...values, description: e.target.value })}
                    />
                </>
                <>
                    <label htmlFor='price'>price</label>
                    <input type="text" name='price'
                        onChange={e => setValues({ ...values, price: e.target.value })}
                    />
                </>
                <button>submit</button>
            </form>
        </div>
    )
}

export default CreateProduct