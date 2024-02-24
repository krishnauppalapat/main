import React from 'react';
import { useEffect } from 'react';
const Todos=()=>{
    var[todo,setTodo]=React.useState([]);
    var ref1=React.useRef();
    function add(){
        setTodo([...todo,ref1.current.value]);
        ref1.current.value='';
    }
    useEffect(()=>{
        ref1.current.focus()
    })
    function handleKeyPress(event){
        if(event.key==='Enter'){
            add();

        }
    }
    return(

        <>
        <h1>Todos application</h1>
        <input type='text' ref={ref1}  onKeyUp={handleKeyPress}/>
        <button onClick={()=>{add()}}>Add todo</button>
        <ul>
            {
                todo.map((a)=>{
                   return <li>{a}</li>
                })
            }
        </ul>
        
        </>

    )
}
export default Todos;