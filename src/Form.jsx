import React from 'react'

const Form = () => {
  return (
    <div>
      <h1>Registration form</h1>
      <label>Enter name:</label><input type="text" placeholder='username'/><br/>
      <label>Enter password:</label><input type="text" placeholder='Enter your password'/><br/>
      <button>Submit</button>
    </div>
  )
}

export default Form;
