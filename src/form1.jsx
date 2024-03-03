import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'

const Form1 = () => {
    let[user,setUser]=React.useState([])
    let formik=useFormik({
        initialValues:{
            username:'',
            password:'',
            role:"Developer"
        },
        onSubmit:(data)=>{
            setUser([...user,data])
        }
    })
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <label>Enter username:</label>
            <input type='text'placeholder='Enter username' name='username' onChange={formik.handleChange}/><br/>
            <label>Enter password:</label>
            <input type='password' placeholder='Enter password' name='password' onChange={formik.handleChange}/><br/>
            <Link to='/details'><button>Submit</button></Link>
        </form>
    </div>

  )
}

export default Form1
