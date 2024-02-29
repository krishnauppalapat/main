import React from "react";
import { connect } from "react-redux";
function TodoList(props){
    console.log(props)
    const[task,setNewtask]=React.useState('')
    // console.log(props)
    function addTask(){
        props.dispatch({type:'ADDTASK',payload:task})
    }
    function del(i){
       props.dispatch({type:'DELETE',payload:i})
    }
    function updatedFilter(e){
        props.dispatch({type:e.target.value})
    }
    console.log(props.todos)
    return(
        <div>
            <h1>todo List</h1>
            <input type='text' onChange={(e)=>{setNewtask(e.target.value)}}/>
            <button onClick={addTask}>Add Task</button><br></br>
            <input type='radio' name='filter' value='ALL' onChange={(event)=>{updatedFilter(event)}}/>:All Todos
            <input type='radio' name='filter' value='DONE' onChange={(event)=>{updatedFilter(event)}}/>:Completed
            <input type='radio' name='filter' value='NOTDONE' onChange={(event)=>{updatedFilter(event)}}/>:pending
            {
                props.todos.filteredTodos.map((todo,i)=>{
                    return(
                        <li key={i}>
                        <b style={{textDecoration:todo.status && 'line-through'}}>{todo.title}</b>
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