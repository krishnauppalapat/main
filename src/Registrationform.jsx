import React from 'react';
import {useFormik}  from 'formik';
import * as yup from 'yup';
const Registrationform=()=>{
    let formik=useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            email:'',
            number:''
        },
        validationSchema:yup.object({
            firstname:yup.string().required('first name is required').min(2,"too short").max(15,"Too long"),
            lastname:yup.string().required('last name is required').min(2,"too short").max(15,"Too long"),
            email:yup.string().email('Invalid email').required('required'),
            number:yup.string().length(10, "number invalid").required('required'),
        }),
        onSubmit:(data)=>{
            console.log(data)

        }
         

    })
    return(
        <div className='text-center'>
            <form onSubmit={formik.handleSubmit}>
                <h1>Registration form</h1>
                <label>First Name:</label>
                <input type='text' name="firstname" onChange={formik.handleChange} onBlur={formik.handleBlur}/><br/>
                {formik.touched.firstname&&<p className='red'>{formik.errors.firstname}</p>}
                <label>Last Name:</label>
                <input type='text'  name="lastname" onChange={formik.handleChange}  onBlur={formik.handleBlur}/><br/>
                {formik.touched.lastname&&<p className='red'>{formik.errors.lastname}</p>}
                <label>Email:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" name="email" onChange={formik.handleChange}  onBlur={formik.handleBlur}/><br/>
                {formik.touched.email&&<p className='red'>{formik.errors.email}</p>}
                <label>Phone :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text'  name='number' onChange={formik.handleChange}  onBlur={formik.handleBlur}/><br/><br/>
                {formik.touched.number&&<p className='red'>{formik.errors.number}</p>}
                <button className='btn btn-primary ms-5 mt-2'>Submit</button>

            </form>
        </div>
    )
}
export default Registrationform;