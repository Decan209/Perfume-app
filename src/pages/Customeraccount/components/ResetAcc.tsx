import React, { FC, useState} from 'react'
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';

interface IUser{
    email: string
}


const ResetAcc:FC = () => {
    const [valueOnChange, setValueOnChange] = useState<IUser>()
  return (
    <Formik
    initialValues = {{
        email: ""
    }}
    validationSchema = {Yup.object({
        email:Yup.string()
            .required("Please fill PassWord field")
            .email("Please fill in the correct email")
    })}
    validate={(Change:IUser)=>{
        setValueOnChange(Change);  
    }}
    onSubmit={(data:IUser)=>{
        console.log(data);
    }}
    >
    {({handleSubmit,handleChange})=>(
        <Form onSubmit={handleSubmit} onChange={handleChange}>
            <div className="text-center font-semibold text-2xl mb-4">RESET PASSWORD</div>
            <div className="text-center text-sm">To have your password reset, enter your email address below. We will then send an email containing a link to reset your password.</div>
            <div className="input-container">
                <label className={valueOnChange?.email? "label" : "labels"}>Email</label>
                <Field id="email" name="email" type="text" className=" w-full border-2 pt-4 pl-2 pb-1 inputAcc"/>
                <ErrorMessage name='email' render={msg => <div className="errMessage">{msg}</div>}/>
            </div>
            <div className='px-4'>
                <button className="bg-black text-white w-full mx-auto my-4 py-2 rounded-2xl">Submit</button>
            </div>
        </Form>
    )}

    </Formik>
  )
}

export default ResetAcc