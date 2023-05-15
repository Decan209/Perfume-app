import { FC, useContext } from "react";
import Overflay from "../overflay/Overflay";
import ProductCart from "./ProductCart";
import { UserContext } from "../../context/UserContextProvider";
import useFetchAxios from "../../hooks/UseFetchAxios";
import { useSelector } from "react-redux";
import { selectUser } from "../../pages/Customeraccount/featurnes/useSlice";

const ProductsCart: FC = () => {
  const {idUser} = useSelector(selectUser);
  const {cart , totalItems, handleSetTotalItems, handleSetCart } = useContext(UserContext);
  const {responses, doFetch} = useFetchAxios('https://63782c6a5c477765122d0c95.mockapi.io/users/' + idUser);
  const {data, isLoading} = responses;

  const onCreaseAmount = (product: any, index: number) => {
    const newCart = [...cart];
    newCart[index] = {...product, amount: product.amount + 1};
    doFetch({
      method: "PUT",
      data: {
        cart: newCart
      }
    })
    console.log(data);
    handleSetTotalItems(totalItems+1);
    handleSetCart(newCart);
  }

  const onDecreaseAmount = (product: any, index: number) => {
    const newCart = [...cart];
    if(newCart[index].amount < 2) {
      newCart.splice(index, 1)
    } else {
      newCart[index] = {...product, amount: product.amount - 1}
    }
    doFetch({
      method: "PUT",
      data: {
        cart: newCart
      }
    })
    handleSetTotalItems(totalItems - 1);
    handleSetCart(newCart)
  }

  const onDeleteCart = (product: any, index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1)
    const newTotalItems = totalItems - product.amount;
    doFetch({
      method: "PUT",
      data: {
        cart: newCart
      }
    })
    handleSetTotalItems(newTotalItems);
    handleSetCart(newCart)
  }

  return (
    <>
      {isLoading && (
        <div className="fixed top-0 left-0 bottom-0 right-0 z-10 flex justify-center items-center">
          <Overflay />
          <div className="loading-spinner z-20"></div>
        </div>
      )}

<div className="col lg:col-span-2">
          <div className="border-b border-solid border-slate-300 font-semibold text-base py-6">
            YOUR CART
            <span className=" text-gray-400"> ()</span>
          </div>
          {cart.map((product: any, index: number) => (
            <ProductCart
              key={product.id}
              alt={product.name}
              src={product.imgSrc}
              name={product.name}
              desc={product.desc}
              retailPrice={product.retailPrice}
              ourPrice={product.ourPrice}
              amount={product.amount}
              onCrease={() => onCreaseAmount(product, index)}
              onDecrease={() => onDecreaseAmount(product, index)}
              onDelete={() => onDeleteCart(product, index)}
            />
          ))}
        </div>
    </>
  );
};

export default ProductsCart;


