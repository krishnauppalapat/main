import React from "react";
import { connect } from "react-redux";
const Counter=(props)=>{
    
    return(
        <div>
             <h1>Counter:{props.count}</h1>
             <button onClick={()=>{props.dispatch({type:'INC'})}}>Increment</button>
             <button onClick={()=>{props.dispatch({type:'DEC'})}}>Decrement</button>
             
        </div>
    )
}
export default connect(store=>store) (Counter);