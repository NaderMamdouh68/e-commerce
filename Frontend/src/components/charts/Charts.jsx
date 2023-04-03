import React from 'react'
import './charts.css'
import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Charts = () => {

  const data = [
    {
      name: 'JAN',
      watches: 40,
      clothes: 24,
      amt: 2400,
    },
    {
      name: 'FEB',
      watches: 30,
      clothes: 13,
      amt: 2210,
    },
    {
      name: 'MAR',
      watches: 20,
      clothes: 98,
      amt: 2290,
    },
    {
      name: 'EPR',
      watches: 27,
      clothes: 39,
      amt: 2000,
    },
    {
      name: 'MAY',
      watches: 18,
      clothes: 48,
      amt: 2181,
    },
    {
      name: 'JUN',
      watches: 23,
      clothes: 38,
      amt: 2500,
    },
    {
      name: 'JUL',
      watches: 34,
      clothes: 43,
      amt: 2100,
    },
  ];



  return (
    <div className='chart'>
      <h3 className="chartTitle">Sales</h3>
      <ResponsiveContainer width="90%" aspect={4 / 2}>
      <LineChart
          
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
          <Line type="monotone" dataKey="clothes" stroke="#8884d8" activeDot={{ r: 8 }}  className='chart-info'/>
          <Line type="monotone" dataKey="watches" stroke="#82ca9d"  className='chart-info'/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Charts