import { FC, useContext, useState } from 'react';
import Loading from '../../../components/Loading';
import { UserContext } from '../../../context/UserContextProvider';
import axios from 'axios';
import "./usermannager.css"

interface user {
    id: number;
    fullName: string,
    username: string,
    password: string,
    email: string,
    phone: string,
    address: string,
}

const UsersManager: FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const { allUsers, handleSetAllUsers } = useContext(UserContext);

    const handleDelete = (userID: number, index: number) => {
        setIsLoading(true);
        axios.delete('https://63782c6a5c477765122d0c95.mockapi.io/users/' + userID)
            .then(dataUser => {
                setIsLoading(false);
            })
        const newAllUsers = [...allUsers];
        newAllUsers.splice(index, 1);
        handleSetAllUsers(newAllUsers);
    }
    return (
        <>
            {isLoading && <Loading />}
            {allUsers && (
                <div>
                    <div className='text-center text-2xl font-semibold m-4 pb-5'>List of accounts</div>
                    <table className='w-full'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>FullName</th>
                                <th>UserName</th>
                                <th>Block</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers.map((value: user, index: number) => (
                                <tr key={index}>
                                    <td>{value.id}</td>
                                    <td>{value.fullName}</td>
                                    <td>{value.username}</td>
                                    <td>
                                        {value.username !== 'admin123' 
                                        ? <button onClick={() => handleDelete(value.id, index)} className=' px-2 bg-red-600 p-1 mr-2 text-white rounded-lg font-medium hover:bg-red-800 text-sm'>
                                            BLOCK
                                        </button> 
                                        : null}
                                    </td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>)}
        </>
    )
}

export default UsersManager;