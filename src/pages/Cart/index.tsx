import { FC } from "react";
import Order from "./Order";
import ProductsCart from "../../components/ProductsCart";

const Cart: FC = () => {

  return (
    <div className="cart px-4 pt-9 pb-5">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <ProductsCart />
        <div className="col-span-1">
          <Order/>
        </div>
      </div>
    </div>
  );
};

export default Cart;
