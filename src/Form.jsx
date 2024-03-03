import React from 'react'

const Form = () => {
    var[data1,setData1]=React.useState([])
    var[data2,setData2]=React.useState('')
    function add(){
        setData1([...data1,data2])
    }
  return (
    <div>
      <h1>Registration form</h1>
      <label>Enter name:</label><input type="text" placeholder='username' onKeyUp={(e)=>{setData2(e.target.value)}}/><br/>
      <label>Enter password:</label><input type="text" placeholder='Enter your password'/><br/>
      <button onClick={add()}>Submit</button>
    </div>
  )
}

export default Form;
