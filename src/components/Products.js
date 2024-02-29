import { connect } from "react-redux";
import React from "react";
function Products(props) {
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
                                <button className="card-button">Add to cart</button>
                            </div>

                    })
                }
            </div>
        </div>
    )
}
export default connect(store => store)(Products);