import React from "react";
import { connect } from "react-redux";
const Counter=(props)=>{
    
    return(
        <div>
             <h1>Counter:{props.count}</h1>
             <button onClick={()=>{props.add(props.dispatch({type:'INC'})}>Increment</button>
             <button>Decrement</button>
             
        </div>
    )
}
export default connect(store=>store) (Counter);