import React from 'react'

function Product (){
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
        src={require('../../assits/4302377512_2_1_1.jpg')}
        alt=""
        class="prodect-photo"
        id="prodect-photo"
      />
      </div>
      <h1 class="name-prodect" id="name-prodect">name</h1>
      <p class="price-prodect" id="price-prodect">20</p>
      
      <div className="con-buton">
      <div className="butn-product">buy now</div>
      </div>
      </article>
    </>
  )
}

export default Product