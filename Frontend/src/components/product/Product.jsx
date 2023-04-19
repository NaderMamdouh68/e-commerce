import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Product (props){

  const handlebuy =()=>{
    
  }




  return (
    <>
        {/* <div className="product">
            <div className="productimage">
              <img src={require('../../assits/4302377512_2_1_1.jpg')} alt="" />
            </div>
            <spam className="price">
              20$
            </spam>
            <div className="butn">Buy Now</div>
          </div> */}
          <article class="prodect">
      <div class="img-prodect">
          <img
        src={`http://localhost:5000/${props.image}`}
        alt=""
        class="prodect-photo"
        id="prodect-photo"
      />
      </div>
      <h1 class="name-prodect" id="name-prodect">{props.name}</h1>
      <p class="price-prodect" id="price-prodect">{`${props.price}$`}</p>
      
      <div className="con-buton">
      <Link to={`/buy/${props.id}`} onClick={handlebuy}><div className="butn-product" >buy now</div></Link>
      </div>
      </article>
    </>
  )
}

export default Product