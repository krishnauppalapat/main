import React from "react";
import { connect } from "react-redux";
const TodoList=(props)=>{
    console.log(props);
    const[data,setData]=React.useState('')
    return(
        <div>
            <div>
                <input type='text' onKeyUp={(e)=>{setData(e.target.value)}}/>
                <button onClick={()=>{props.dispatch({type:'ADDTODO',payload:data})}}>Add</button>
            </div>
            <ul>
                {
                    props.list.map((a)=>{
                        return <li>{a}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default connect(store=>store)(TodoList);
