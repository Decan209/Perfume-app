import React,{FC} from 'react'
import Loading from '../../components/Loading'
import useFetch from '../../hooks/useFetch'

interface bills {
    dataModelBills?: any
}
const ViewBills:FC<bills> = ({dataModelBills}) => {
    const {data, loadding} = useFetch("https://63f7976de40e087c95925720.mockapi.io/order-management/" + dataModelBills) 
    console.log(dataModelBills);
    
    return (
    <div>
    {loadding&& <Loading/>}
    {data && (
        <div className='border-2 border-black rounded-lg'>
            <div className='p-4 ' key={data.id}>
                <div className='text-center text-xl font-bold'>VIEW DETAIL</div>
                <div className='text-lg font-semibold'>STT : {data.id}</div>
                <div className='text-lg font-semibold'>Name : {data.fullName}</div>
                <div className='text-lg font-semibold'>Total Items : {data.totalItems}</div>
                <div className='text-lg font-semibold'>Total Price : {data.totalPrice}</div>
                <div className='text-lg font-semibold'>Phone : {data.phone}</div> 
            </div>                             
        </div>
        )
    }
    </div>
  )
}

export default ViewBills