import { FC, useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../featurnes/useSlice";
import Loading from "../../../components/Loading";
import Modal from "../../../components/Modal";
import { UserContext } from "../../../context/UserContextProvider";


interface newUser {
    fullName: string,
    username: string,
    password: string,
    email: string,
    phone: string,
    address: string,
}


const CreateAcc: FC = () => {

    const [newValue, setNewValue] = useState<newUser>()
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const dispatch = useDispatch()
    const { allUsers, handleSetAllUsers } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div>
            {isLoading && <Loading />}
            {registerSuccess && !isLoading && <Modal
                modalText="Congratulations, you have successfully registered. Auto navigate Home Page after "
                navigatePage="/"
                modalBtn="Navigate Home Now"
            />}
            <ToastContainer />
            <Formik
                initialValues={{
                    fullName: "",
                    username: "",
                    password: "",
                    email: "",
                    phone: "",
                    address: ""
                }}
                validationSchema={Yup.object({
                    fullName: Yup.string()
                        .max(20, "Name must less than or equal 20 charactes")
                        .required("Please fill Full Name field"),
                    username: Yup.string()
                        .max(20, "UserName must less than or equal 20 charactes")
                        .required("Please fill UserName field"),
                    password: Yup.string()
                        .required("Please fill PassWord field"),
                    email: Yup.string()
                        .required("Please fill Email field")
                        .email("Please fill in the correct email"),
                    phone: Yup.string()
                        .max(10, "Phone must less than or equal 10 charactes")
                        .required("Please fill Phone field"),
                    address: Yup.string()
                        .required("Please fill Address field"),

                })}
                validate={(valueChange: newUser) => {
                    setNewValue(valueChange)
                }}
                validateOnChange={false}

                onSubmit={(values: newUser) => {
                    setIsLoading(true)
                    const isExi = allUsers.some((elemen: any) => {
                        return elemen.username === values.username
                    })
                    if (isExi) {
                        toast.error("Tài khoản đã tồn tại")
                    } else {
                        // CreatUser({
                        //     method: "Post",
                        //     data: {
                        //         ...values,
                        //         avtSrc: "",
                        //         cart: []
                        //     }
                        // })
                        const data = {
                            ...values,
                            avtSrc: "",
                            cart: []
                        }
                        fetch('https://63782c6a5c477765122d0c95.mockapi.io/users', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(data)
                        })
                            .then(response => response.json())
                            .then(dataUser => {
                                dispatch(login({
                                    idUser: Number(allUsers[allUsers.length - 1].id) + 1,
                                    userName: values.username,
                                    isAdmin: false,
                                    isLogin: true
                                }))
                                const newAllUsers = [...allUsers, dataUser]
                                handleSetAllUsers(newAllUsers);
                                toast.success("Đăng ký tài khoản thành công")
                                setIsLoading(false);
                                setRegisterSuccess(true);
                            })
                    }
                }}

            >
                <Form>
                    <div>
                        <div className="text-center font-semibold text-2xl mb-4">NEW TO PERFUMANIA?</div>
                        <div className="text-center text-sm">By creating an account you will be able to shop faster, be up to date on an order’s status, and keep track of the orders you have previously made.</div>
                        <div className="input-container">
                            <label htmlFor="FullName" className={newValue?.fullName ? "label" : "labels"}>Full Name</label>
                            <Field id='fullName' name="fullName" type="text" className=" w-full border-2 pt-4 pl-2 pb-1  inputAcc" />
                            <ErrorMessage name="fullName" render={msg => <div className="errMessage">{msg}</div>} />
                        </div>
                        <div className="input-container">
                            <label htmlFor="username" className={newValue?.username ? "label" : "labels"}>Username</label>
                            <Field id='username' name="username" type="text" className=" w-full border-2 pt-4 pl-2 pb-1  inputAcc" />
                            <ErrorMessage name="username" render={msg => <div className="errMessage">{msg}</div>} />
                        </div>
                        <div className="input-container">
                            <label htmlFor="password" className={newValue?.password ? "label" : "labels"}>Password</label>
                            <Field id='password' name="password" type="password" className=" w-full border-2 pt-4 pl-2 pb-1  inputAcc" />
                            <ErrorMessage name="password" render={msg => <div className="errMessage">{msg}</div>} />
                        </div>
                        <div className="input-container">
                            <label htmlFor="email" className={newValue?.email ? "label" : "labels"}>Email</label>
                            <Field id='email' type="text" name="email" className=" w-full border-2 pt-4 pl-2 pb-1  inputAcc" />
                            <ErrorMessage name="email" render={msg => <div className="errMessage">{msg}</div>} />
                        </div>
                        <div className="input-container">
                            <label htmlFor="phone" className={newValue?.phone ? "label" : "labels"}>Phone</label>
                            <Field id='phone' type="number" name="phone" className=" w-full border-2 pt-4 pl-2 pb-1  inputAcc" />
                            <ErrorMessage name="phone" render={msg => <div className="errMessage">{msg}</div>} />
                        </div>
                        <div className="input-container">
                            <label htmlFor="address" className={newValue?.address ? "label" : "labels"}>Address</label>
                            <Field id='address' type="address" name="address" className=" w-full border-2 pt-4 pl-2 pb-1  inputAcc" />
                            <ErrorMessage name="address" render={msg => <div className="errMessage">{msg}</div>} />
                        </div>
                        <div className='px-4'>
                            <button className="bg-black text-white w-full my-4 py-2 rounded-2xl" type="submit" >Create an Account </button>
                        </div>
                        <div className="text-center text-xs">By clicking “Create an Account” you acknowledge that you are a U.S. resident and (1) have read Perfumania’s Privacy Policy, (2) agree to the Terms & Conditions and to automatically receive offers and notifications via email or text.</div>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default CreateAcc;