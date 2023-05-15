import { FC, useMemo, useEffect, useState, createContext } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../pages/Customeraccount/featurnes/useSlice';
import useFetchAxios from '../hooks/UseFetchAxios';
import Loading from '../components/Loading';

export const UserContext = createContext<any>({}); 

interface PropUserContext {
  children: any
}

const UserContextProvider:FC<PropUserContext> = ({children}) => {
  const { idUser } = useSelector(selectUser);
  const { responses: allUsersResponses, doFetch: getAllUsers} = useFetchAxios('https://63782c6a5c477765122d0c95.mockapi.io/users');
  const { data: allUsersData } = allUsersResponses
  const {responses, doFetch} = useFetchAxios('https://63782c6a5c477765122d0c95.mockapi.io/users/' + idUser)
  const {data: userData, isLoading} = responses;
  const [cart, setCart] = useState<any>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [allUsers, setAllUsers] = useState<any>([]);

  useEffect(() => {
    if(idUser) {
      doFetch({method: "GET"})
    }
  }, [idUser, doFetch]);

  useEffect(() => {
    getAllUsers({method: "GET"})
  }, [getAllUsers])

  const totalPrice = useMemo(() => {
    return cart.length > 0 
    ? cart.reduce((total: number, product: any) => {
      return total + product.ourPrice*product.amount;
    }, 0)
    : 0
  }, [cart])

  useEffect(() => {
    if(userData) {
      const getTotalItems = userData.cart.reduce((total: number, product: any) => {
        return total + product.amount;
      }, 0)
      setTotalItems(getTotalItems);
      setCart(userData.cart)
    }
  }, [userData]);

  useEffect(() => {
    setAllUsers(allUsersData);
  }, [allUsersData])

  const handleSetCart = (newCart: any) => {
    setCart(newCart)
  }

  const handleSetTotalItems = (newTotalItems : number) => {
    setTotalItems(newTotalItems);
  }

  const handleSetAllUsers = (newAllUsers: any) => {
    setAllUsers(newAllUsers);
  }

  const value = {
    userData,
    cart,
    handleSetCart,
    totalItems, 
    handleSetTotalItems,
    totalPrice,
    allUsers,
    handleSetAllUsers
  }

  return (
    <>
      {isLoading && <Loading />}
      <UserContext.Provider value={value}>
        {children}
      </UserContext.Provider>
    </>
  )
}

export default UserContextProvider