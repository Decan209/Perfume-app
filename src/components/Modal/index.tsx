import { useNavigate, Link } from 'react-router-dom';
import { FC, useState, useEffect, useRef  } from "react";
import Overflay from "../overflay/Overflay";

interface PropModal {
    modalText: string;
    navigatePage: string;
    modalBtn: string
}

const Modal: FC<PropModal> = ({ modalText, navigatePage, modalBtn }) => {

    const [count, setCount] = useState(5);
    const navigate = useNavigate()
    const intervalId = useRef<any>();
    useEffect(() => {
        if (count === 0) {
            navigate(navigatePage)
        }
        intervalId.current = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        return () => {
            clearInterval(intervalId.current)
        }
    }, [count, navigate, navigatePage])
    return (
        <>
            <div className="modal-ta">
                <h3 className="mt-3">
                    {modalText} <span className=" text-red-500 text-lg">{count}</span>
                    second
                </h3>
                <Link to={ navigatePage }>
                    <button className="mt-5 ml-5 bg-teal-500 text-white text-base px-2 py-1 rounded hover:bg-teal-300">
                        {modalBtn}
                    </button>
                </Link>
            </div>
            <Overflay />
        </>
    );
};

export default Modal;
