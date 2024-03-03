import React from 'react'

const Todolist = () => {
    var[data,setData]=React.useState([])
    function add(){
        
    }
  return (
    <div>
      <input type='text' onChange={setData()}/>
      <button onClick={()=>{add()}}>Add</button>
    </div>
  )
}

export default Todolist
