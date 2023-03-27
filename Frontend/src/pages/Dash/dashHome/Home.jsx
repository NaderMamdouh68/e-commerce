import React from 'react'
import Charts from '../../../components/charts/Charts'
import FeaturedInfo from '../../../components/featuredInfo/FeaturedInfo'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Charts/>
        <div className="homeWidgets">
          
        </div>
    </div>
  )
}

export default Home