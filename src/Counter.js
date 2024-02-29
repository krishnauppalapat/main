import React from "react";
import { connect } from "react-redux";
function Counter(props){
    console.log(props)
    return(
        <div>
            <h1>Counter:{props.count}</h1>
            <button onClick={()=>{props.dispatch({type:'INCREMENT'})}}>Increment</button>
            <button onClick={()=>{props.dispatch({type:'DECREMENT'})}}>Decrement</button>
            <button onClick={()=>{props.dispatch({type:'RESET'})}}>Reset</button>
        </div>
    )
}
export default connect(store=>store)(Counter);