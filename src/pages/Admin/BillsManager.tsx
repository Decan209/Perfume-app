import { FC, useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import useFetchAxios from '../../hooks/UseFetchAxios';
import {AiOutlineCheck} from "react-icons/ai";
import ADDModal from './ProductsManager/AddModel';

const BillsManager: FC = () => {

    const [dataModelBills, setDataModelBills] = useState()
    const [showModalBills, setShowModalBills] = useState<boolean>(false);
    const { responses, doFetch } = useFetchAxios('https://63f7976de40e087c95925720.mockapi.io/order-management')
    const { data, isLoading } = responses;


    useEffect(() => {
        doFetch({ method: "GET" })
    }, [doFetch])

    const handleDoneBills =(id:any)=>{
        setShowModalBills(true)
        setDataModelBills(id)
    }

    return (
        <>
            {isLoading && <Loading />}
            <div className='pl-4'>
                <ADDModal showModalBills = {showModalBills} dataModelBills={dataModelBills}/>
                <div className='text-center text-red-500 text-2xl font-semibold m-4 pb-5'>Bills Manager</div>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Total Items</th>
                            <th>Total Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        { data && data.map((bill: any, index: number) => (
                            <tr key={bill.id}>
                                <td>{index + 1}</td>
                                <td>{bill.fullName}</td>
                                <td>{bill.totalItems}</td>
                                <td>${bill.totalPrice.toFixed(2)}</td>
                                <td>
                                    <button onClick={()=>handleDoneBills(bill.id)} className=' px-2 bg-red-600 p-1 mr-2 text-white rounded-lg font-medium hover:bg-red-400 text-sm'>
                                        View Detail
                                    </button>
                                    <button className=' px-2 bg-lime-600 p-1 mr-2 text-white rounded-lg font-medium hover:bg-lime-400 text-sm mt-2 sm:mt-0'>
                                        <div className='flex items-center'>
                                            <span>DONE</span>
                                            <AiOutlineCheck />
                                        </div>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default BillsManager;