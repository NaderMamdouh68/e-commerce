import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import React from 'react'
import './featuredInfo.css'

const FeaturedInfo = () => {
  return (
    <div className='featured'>

        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featureMoney">
                <span className="featuredprice">$4,51</span>
                <span className="featuredRate">
                    -11.4 <ArrowDownward className='featuredIcon negative'/>
                </span>
            </div>
            <span className="featuredsub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featureMoney">
                <span className="featuredprice">$4,51</span>
                <span className="featuredRate">
                    -1.4 <ArrowDownward className='featuredIcon negative'/>
                </span>
            </div>
            <span className="featuredsub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featureMoney">
                <span className="featuredprice">$4,51</span>
                <span className="featuredRate">
                    +6.4 <ArrowUpward className='featuredIcon '/>
                </span>
            </div>
            <span className="featuredsub">Compared to last month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo