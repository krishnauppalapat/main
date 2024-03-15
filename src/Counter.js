import { Component } from "react";
import './Counter.css'
class Counter extends Component{
    state={count:0}
    onIncrement=()=>{
        // console.log('increment clicked')
       this.setState(prevState=>{
        return {count:prevState.count+1}
       })

    }
    onDecrement=()=>{
        // console.log('deccrement clicked')
        this.setState(prevState=>{
            return{
                count:prevState.count-1
            }
        })
    }
     
    render(){
        const {count}=this.state;
       return(
            <div>
                <h1>Counter:{count}</h1>
                <button className="btn btn-primary" onClick={this.onIncrement}>Increment</button>
                <button className="btn btn-primary" onClick={this.onDecrement}>Decrement</button>
            </div>
        )
    }
}
export default Counter;