import { FC, useState } from "react";
import { GrClose } from "react-icons/gr";
import { NavLink } from "react-router-dom"; 
import CreateAcc from "./components/CreateAcc";
import LoginAcc from "./components/LoginAcc";
import './Acccount.css' 
import ResetAcc from "./components/ResetAcc";



const Customeraccount:FC = () => {

    const [hide, setHide] = useState<boolean>(false)

    const handleHide = ()=>{
        setHide(true)
        
    }

    return(
    <div className="p-4" >
    <NavLink to={"/"} className="flex justify-end"><GrClose className="text-2xl border-2 border-black"/></NavLink>
        <div className="block p-4 lg:flex">
        <div className="w-full px-8 my-auto">
            {hide?
            <div>
                <ResetAcc/>
                <button className='w-full text-center pb-8 font-medium'onClick={(e)=>setHide(false)} >or Cancel</button>
                            <div className='text-center text-xs'>If you’re unable to reset your password, please call 1 (866) 557-2368 or email customer.service@perfumania.com Customer Service at for assistance.</div>
            </div>
            :
            <div>
                <LoginAcc/>
                <button className="text-xs font-semibold w-full pb-8" onClick={handleHide}>Forgot your password?</button>
            </div>}
        </div>
        <div className="px-8 lg:border-l-2 lg:border-gray-400">
            <CreateAcc/>
        </div>
        </div>
    </div>           
    )
}

export default Customeraccount;