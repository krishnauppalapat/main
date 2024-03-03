import React from "react";
import { connect } from "react-redux";

function Cart(props) {
    return (
        <div>
            <h1>Shopping Cart</h1>
            <div className="cart-items">
                {props.cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.title} />
                        <div>
                            <h3>{item.title}</h3>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps)(Cart);
