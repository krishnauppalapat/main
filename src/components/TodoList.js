import React from "react";
import { connect } from "react-redux";
function TodoList(props){
    const[task,setNewtask]=React.useState('')
    console.log(props)
    function addTask(){
        props.dispatch({type:'ADDTASK',payload:task})
    }
    function del(i){
       props.dispatch({type:'DELETE',payload:i})
    }
    return(
        <div>
            <h1>todo List</h1>
            <input type='text' onChange={(e)=>{setNewtask(e.target.value)}}/>
            <button onClick={addTask}>Add Task</button>
            {
                props.todos.todos.map((t,i)=>{
                    return(
                        <li key={i}>{t}
                        <button onClick={()=>{del(i)}}>Delete</button>
                        <button onClick={()=>{props.dispatch({type:"DONE",payload:i})}}>Done</button>
                        <button onClick={()=>{props.dispatch({type:'UNDO',payload:i})}}>Undo</button>
                        </li>
                    )
                })
            }
            </div>
    )
}
export default connect(store=>store)(TodoList);