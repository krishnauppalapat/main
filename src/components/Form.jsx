import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const Form = () => {
    const formik = useFormik({
        initialValues: {
            fullname: '',
            pnumber: '',
            email: '',
            course:[],
            mode: '',
            date: '',
            interests: '',
            review: '',
            nextDate: ''
        },
        validationSchema:yup.object({
            fullname:yup.string().required("name is required").min(5,"too short").max(10,"too long"),
            pnumber:yup.string().required("number is required"),
            email:yup.string().required("email is required"),
            course:yup.array().min(1,"select atleast one course"),
            mode:yup.string().min(1,"select one").required('is required'),
            date:yup.string().required("select date"),
            interests:yup.string().required("select the interests"),
            review:yup.string().required("add review"),
            nextDate:yup.string().required("select date")
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });
return(
    <div className='mainDiv'>
        {console.log(formik)}
        <form class="row g-3 d-flex p-4 justify-content-between container m-auto" onSubmit={formik.handleSubmit}>
                       <div className='first w-50'>
                            <h1 className='text-primary m-5'>ENQUIRY FORM</h1>
                               <div className='d-flex'>
                                    <div class="col-md-6">
                                            <input type="fullName" className="form-control" id="inputEmail4" placeholder='Name' name='fullname' onBlur={formik.handleBlur} onChange={formik.handleChange}  />
                                            {formik.touched.fullname && <b>{formik.errors.fullname}</b> }
                                    </div>
                                    <div class="col-md-6">
                                            <input type="phonenumber" className="form-control " id="inputPassword4" placeholder='Phone Number'  name='pnumber' onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                            {formik.touched.pnumber && <b>{formik.errors.pnumber}</b> }
                                    </div>
                               </div><br />
                                <div class="col-12">
                                    <input type="text" className="form-control" id="inputAddress" placeholder="Email" name='email' onBlur={formik.handleBlur} onChange={formik.handleChange}/>
                                    {formik.touched.email && <b>{formik.errors.email}</b>}
                                </div><br />
                                <div class="col-md-6">
                                    <h6>COURSE</h6><br />
                                    <input type='checkbox' id='course' name='course' value='frontendAngular' onChange={formik.handleChange} onBlur={formik.handleBlur}/>&nbsp;
                                    <label for='course'> Frontend with angular</label><br />
                                    <input type='checkbox' id='course' name='course' value='frontendReact' />&nbsp;
                                    <label for='course'> Frontend with react</label><br />
                                    <input type='checkbox' id='course' name='course' value='fullStack' />&nbsp;
                                    <label for='course'> Full stack JAVA</label><br />
                                    <input type='checkbox' id='course' name='course' value='mean' />&nbsp;
                                    <label for='course'> MEAN</label><br />
                                    <input type='checkbox' id='course' name='course' value='mern' />&nbsp;
                                    <label for='course'>MERN</label><br />
                                    <input type='checkbox' id='course' name='course' value='devops' />&nbsp;
                                    <label for='course'>Devops</label><br/>
                                    {formik.touched.course && <b>{formik.errors.course}</b>}
                                    </div>
                                    <div class="col-md-6">
                                        <h6>MODE</h6><br />
                                        <input type='radio' name='mode' value='offline' onChange={formik.handleChange} />&nbsp;
                                        <label for='course'>Offline</label><br />
                                        <input type='radio' name='mode' value='online' onChange={formik.handleChange} />&nbsp;
                                        <label for='course'>Online</label><br />
                                        {formik.touched.mode && <b>{formik.errors.mode}</b>}
                                    </div>
                            </div>

                        <div className='w-50'>
                            <h1 className='text-primary m-4 mt-5'>FEEDBACK</h1>
                            <div className="row g-3 p-3">
                                <div class="col-md-6">
                                    <input type="date" class="form-control" id="inputdate4" placeholder='Date' name='date' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.touched.date && <b>{formik.errors.date}</b>}
                                </div>
                                <div class="col-md-6">
                                    <select name='interests' onChange={formik.handleChange}>
                                        <option value='choose an option' name='interests' selected disabled onChange={formik.handleChange}>Choose an option</option>
                                        <option value='Interested' name='interests' onChange={formik.handleChange}>Interested</option>
                                        <option value='not interested' name='interests' onChange={formik.handleChange}>Not Interested</option>
                                    </select><br/>
                                    {formik.touched.interests && <b>{formik.errors.interests}</b>}
                                </div>
                                <div class="col-12">
                                    <textarea name='review' id='review' rows='4' cols='50' placeholder='Remarks' onChange={formik.handleChange}></textarea><br/>
                                    {formik.touched.review && <b>{formik.errors.review}</b>}
                                </div>
                                <div class="col-md-6">
                                    <input type="date" class="form-control" id="inputdate4" placeholder='Next Call Date' name='nextDate' onChange={formik.handleChange} />
                                    {formik.touched.nextDate && <b>{formik.errors.nextDate}</b>}
                                </div>
                            </div>

                         </div>
                         <div className='d-flex justify-content-center'>
                             <button className='btn btn-primary btn-lg m-5 w-25'>Save</button>
                         </div>

            </form>
        </div>
)}
export default Form;