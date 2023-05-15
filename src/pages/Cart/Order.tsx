import { FC, useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContextProvider";
const Order: FC = () => {
    const {cart, totalItems, totalPrice } = useContext(UserContext);

    const totalSavings = useMemo(() => {
        return cart?.reduce((total: number, product: any) => {
            return total + ((product.retailPrice-product.ourPrice)*product.amount)
        },0)
    }, [cart])
    return (
        <div 
            style={{
                boxShadow: "0 3px 14px #0000010"
            }}
            className="order p-5
                border border-solid border-gray-300 rounded-xl
            ">
            <h2 className="text-xl leading-7 font-bold mb-10">Order</h2>
            <div className="text-lg leading-5">    
                <div className="flex justify-between pb-6 mb-5 border-b border-dashed border-gray-300">
                    <span>Total Item {totalItems}(s)</span>
                    <span className="font-semibold"></span>
                </div>
                <div className="flex justify-between mb-3 ">
                    <span>Total</span>
                    <span className="font-bold text-xl leading-6">${totalPrice?.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pb-6 mb-3">
                    <span>Savings</span>
                    <span className="font-bold text-xl text-red-600">${totalSavings?.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pb-6 mb-3">
                    <span>Shipping</span>
                    <span className="font-normal text-sm">YOU ARE ELIGIBLE FOR FREE SHIPPING!</span>
                </div>
                <div className="flex justify-between pb-6 mb-4 font-bold text-2xl leading-7">
                    <span>Subtotal</span>
                    <span>${totalPrice?.toFixed(2)}</span>
                </div>
            </div>
            <Link to="/payment">
                <button className="bg-black text-white w-full py-3 mb-4 rounded-lg hover:opacity-75">PROCEED TO CHECKOUT</button>
            </Link>
        </div>
    )
}

export default Order;