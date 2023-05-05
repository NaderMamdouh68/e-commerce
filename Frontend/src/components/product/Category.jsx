/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/style-prop-object */
import React from 'react'
import { Link } from 'react-router-dom'
import './cat.css'

function Category(props) {







  return (
    <>
      <div class="card">
        <img className='imgcat' src={`http://localhost:5000/${props.image}`} alt='' />
        <div class="card-text">
          <h2>{props.category_name}</h2>
          <p>{props.description}</p>
          <Link to={`/category/${props.id}`} className="btn">More</Link>
        </div>
      </div>

    </>
  )
}

export default Category