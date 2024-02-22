import React from 'react'

const ProductsCard = ({cartItems}) => {
  return (
    <div>
      <i className="bi bi-cart4 cartShape"></i>
      <ul>
        {
           cartItems?.map((item)=>{
            return(
                <li>{item.title}
                    <img src={item.image} alt='' width="10%"/>
                    </li>
                
            )
           }) 

        }
      </ul>
      {
         cartItems.length===0 &&<h3>Cart is Empty</h3>
      }
     
    </div>
  )
}

export default ProductsCard
