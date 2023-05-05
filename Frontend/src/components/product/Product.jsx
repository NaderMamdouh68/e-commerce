import React from 'react'
import { Link } from 'react-router-dom'
import { SiCashapp } from 'react-icons/si'

function Product(props) {







  return (
    <>

      <Link className='prodect' to={`/buy/${props.id}`} >
        <div class="img-prodect">
          <img
            src={`http://localhost:5000/${props.image}`}
            alt=""
            class="prodect-photo"
            id="prodect-photo"
          />
        </div>
        <p className='catname'>{props.category_name}</p>
        <h1 class="name-prodect" id="name-prodect">{props.name}</h1>
        {/* <p class="des-prodect" >{props.description}</p> */}
        <p class="price-prodect">{`${props.price}$`}</p>

      </Link>
    </>
  )
}

export default Product