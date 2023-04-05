import React, { useEffect , useState} from 'react'
import './analytics.css'
import axios from 'axios';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer , BarChart, Bar} from 'recharts';



const Analytics = () => {

  
  const [userdata, setUserData] =useState([])
  const [productdata, setProductrData] =useState([])
  const [orderdata, setOrderData] =useState([])


  useEffect(()=>{
    axios.get('http://localhost:5000/users')
      .then(res => setUserData(res.data))
      .catch(err => console.log(err))
    axios.get('http://localhost:5000/orders')
      .then(res => setOrderData(res.data))
      .catch(err => console.log(err))
    axios.get('http://localhost:5000/products')
      .then(res => setProductrData(res.data))
      .catch(err => console.log(err))
  },
  []
  )
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  

  return (
    <div className="analytics">
      <div className='featured'>
            <div className="featuredItem">
              <span className="featuredTitle">Users</span>
              <span className='num'>{userdata.length}</span>
            </div> 

            <div className="featuredItem">
            <span className="featuredTitle">Orders</span>
            <span className='num'>{orderdata.length}</span>
            </div> 

            <div className="featuredItem">
            <span className="featuredTitle">Products</span>
            <span className='num'>{productdata.length}</span>
            </div> 
      </div>

      <ResponsiveContainer width="90%" aspect={4 / 2}>
      <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

      <div className="info">
        <div className="infoitem"></div>
        <div className="infoitem"></div>
      </div>     
    </div>
  )
}

export default Analytics