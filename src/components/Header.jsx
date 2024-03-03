import React from "react";
import { connect } from "react-redux";
function Header(props){
    console.log(props)
    return(
        <div className="main-div">
            <div className="header-div d-flex justify-content-between">
         <h1>EKART</h1>
       <i class="bi bi-cart4"><sup>{props.prod.cart.length}</sup> </i>
        </div>

        </div>
    )
}
export default connect(store=>store)(Header);