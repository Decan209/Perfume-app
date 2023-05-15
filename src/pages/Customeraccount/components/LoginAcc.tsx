import { FC, useState, memo, useContext } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { login } from '../featurnes/useSlice';
import Modal from '../../../components/Modal';
import Overflay from '../../../components/overflay/Overflay';
import { useSelector } from 'react-redux';
import { selectUser } from '../featurnes/useSlice';
import { UserContext } from '../../../context/UserContextProvider';

interface IUser {
    userName: string,
    passWord: string,
}


const Login: FC = () => {

    const {allUsers} = useContext(UserContext);

    const [valueOnChange, setValueOnChange] = useState<IUser>()
    const [loginSuccess, setLoginSucces] = useState(false);
    const [wrongPassword, setWrongPassword] = useState(false)

    const dispatch = useDispatch()

    const { isAdmin } = useSelector(selectUser)


    return (
        <div>
            {loginSuccess && <Modal
                modalText={isAdmin
                    ? 'Congratulations, you have successfully logged in, auto navigate Admin page after'
                    : 'Congratulations, you have successfully logged in, auto navigate Home page after'}
                navigatePage={isAdmin ? '/admin' : '/'}
                modalBtn="Navigate Now!"
            />}
            {wrongPassword &&
                <div>
                    <div className="modal-ta">
                        <p className="text-lg font-semibold">Try re-entering!</p>
                        <div className="flex justify-center items-center mt-4">
                            <button className=" bg-teal-500 text-white text-base py-1 rounded hover:bg-teal-300 px-6" onClick={() => setWrongPassword(false)}>
                                Ok
                            </button>
                        </div>
                    </div>
                    <Overflay />
                </div>
            }

            <Formik
                initialValues={{
                    userName: "",
                    passWord: ""
                }}
                validationSchema={Yup.object({
                    userName: Yup.string()
                        .max(20, "UserName must less than or equal 20 charactes")
                        .required("Please fill UserName field"),
                    passWord: Yup.string()
                        .required("Please fill PassWord field"),
                })}
                validate={(Change: IUser) => {
                    setValueOnChange(Change);
                }}
                onSubmit={(dataAcc: IUser) => {
                    const user = allUsers.find((elm: any) => {
                        return elm.username === dataAcc?.userName && elm.password === dataAcc.passWord

                    })

                    if (allUsers[0].username === dataAcc.userName && allUsers[0].password === dataAcc.passWord) {
                        toast.success("Đăng nhập tài khoản admin thành công")
                        dispatch(
                            login(
                                {
                                    idUser: user.id,
                                    userName: user.username,
                                    isAdmin: true,
                                    isLogin: true,
                                })
                        )
                        setLoginSucces(true)
                        return;
                    }
                    if (user) {
                        toast.success("Đăng nhập thành công")
                        dispatch(
                            login(
                                {
                                    idUser: user.id,
                                    userName: dataAcc.userName,
                                    isLogin: true,
                                    sAdmin: false,
                                })
                        )

                        setLoginSucces(true)
                    } else {
                        toast.error("Tài khoản hoặc mật khẩu không chính xác")
                        setWrongPassword(true);
                    }
                }}
            >
                {({ handleSubmit, handleChange }) => (
                    <Form onSubmit={handleSubmit} onChange={handleChange}>
                        <div className="text-center font-semibold text-2xl mb-4">SING IN</div>
                        <div className="text-center text-sm">Already have an account? Sign in for a more personalized experience</div>
                        <div className="input-container">
                            <label className={valueOnChange?.userName ? "label" : "labels"}>Username</label>
                            <Field id="userName" name="userName" type="text" className=" w-full border-2 pt-4 pl-2 pb-1 inputAcc" />
                            <ErrorMessage name='userName' render={msg => <div className="errMessage">{msg}</div>} />
                        </div>
                        <div className="input-container">
                            <label className={valueOnChange?.passWord ? "label" : "labels"}>Password</label>
                            <Field id='passWord' type="password" name="passWord" className="w-full border-2 pt-4 pl-2 pb-1 inputAcc" />
                            <ErrorMessage name='passWord' render={msg => <div className="errMessage">{msg}</div>} />
                        </div>
                        <div className='px-4'>
                            <button className="bg-black text-white w-full mx-auto my-4 py-2 rounded-2xl">Continue</button>
                        </div>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default memo(Login)

