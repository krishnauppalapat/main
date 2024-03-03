import React from 'react';
import {useFormik} from 'formik';


function Form() {
    let formik=useFormik({
        initialValues:{
            username:'',
            password:''
  },
  onSubmit:(data)=>{
      console.log(data)
  }

    })
  return (
    <div>
    <form onSubmit={formik.handleSubmit}>
      <h1>Registration form</h1>
      <label>Enter name:</label><input type="text" placeholder='username' name='username' onChange={formik.handleChange}/><br/>
      <label>Enter password:</label><input type="text" placeholder='Enter your password' name='password' onChange={formik.handleChange}/><br/>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default Form;
