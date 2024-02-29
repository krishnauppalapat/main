import React from "react";
import { connect } from "react-redux";
function Counter(props){
    // console.log(props)
    function inc(){
        props.dispatch({type:"INC"})
    }
    function dec(){
        props.dispatch({type:'DEC'})
    }
    function reset(){
        props.dispatch({type:'RESET'})
    }
    return(
        <div>
          <h1>Counter:{props.counter.count}</h1>
          <button onClick={inc}>Increment</button>
          <button onClick={dec}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
    )
}
export default connect(store=>store)(Counter);