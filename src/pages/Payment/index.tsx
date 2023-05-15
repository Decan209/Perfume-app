import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import FormCheckOut from "./FormCheckOut";
import ProductsCart from "../../components/ProductsCart";
import { UserContext } from "../../context/UserContextProvider";

const Payment: FC = () => {
  const {totalPrice} = useContext(UserContext);

  return (
    <div className="px-4 grid grid-cols-3 gap-4">
      <div className="col-span-3 lg:col-span-1 pt-12 xl:pr-14 flex flex-col">
        <div>
          <Link to="/">
            <h3 className=" text-3xl">Perfume</h3>
          </Link>
          <h5 className="mt-4 flex items-center text-sm">
            <span className="mr-2">Cart</span>
            <span>
              <FiChevronRight className="mr-2 relative mt-1" />
            </span>
            <span>Shipping</span>
          </h5>
        </div>
        <div>
          <FormCheckOut />
        </div>
      </div>
      <div className="col-span-3 lg:col-span-2 pt-12 xl:pr-14">
        <ProductsCart/>
        <div className="mt-4 float-right lg:mr-20 text-3xl font-bold">
          <span className="mr-4">TOTAL:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Payment;
