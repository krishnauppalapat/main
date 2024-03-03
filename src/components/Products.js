import { connect } from "react-redux";
import React from "react";
function Products(props) {
    function isIncart(product){
        var x=props.prod.cart.find((p)=>{
            if(p.id===product.id){
                return true
            }
        })
          return x
    }
    console.log(props)
    return (
        <div>
            <h1>Products</h1>
            <div className="cards-container">
                {
                    props.prod.products.map((product, i) => {
                        return <div className="card">
                                <img src={product.images[0]} alt='' />
                                <p>Title:{product.title}</p>
                                <p> Price:{product.price}</p>
                                {isIncart(product)&&<button>Go to cart</button>}
                         {!isIncart(product) &&<button className="card-button" onClick={()=>{props.dispatch({type:'ADDTOCART',payload:product})}}>Add to cart</button>}
                            </div>

                    })
                }
            </div>
        </div>
    )
}
export default connect(store => store)(Products);