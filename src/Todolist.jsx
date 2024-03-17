import React from 'react';
const Todolist=()=>{
    const[data,setData]=React.useState([]);
    const[inputValue,setInputValue]=React.useState('')
    function changeHandler(e){
        setInputValue(e.target.value);

    }
    function addTodo(){
        setData([...data,inputValue]);
        setInputValue('')
    }
    return(
        <div>
            <input type="text" value={inputValue} onChange={changeHandler}/>
            <button onClick={addTodo}>Add todo</button>
            <ul>
                {
                    data.map((a,i)=>{
                        return(
                            <li>{a}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Todolist;