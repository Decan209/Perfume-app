import { FC, MouseEventHandler } from "react";
import Image from "../Image";
import { AiOutlineClose } from "react-icons/ai";

interface ProductProp {
  alt: string;
  src: string;
  name: string;
  desc: string;
  retailPrice: number;
  ourPrice: number;
  amount: number;
  onDecrease: MouseEventHandler;
  onCrease: MouseEventHandler;
  onDelete: MouseEventHandler;
}

const ProductCart: FC<ProductProp> = ({
  alt,
  src,
  name,
  desc,
  retailPrice,
  ourPrice,
  amount,
  onDecrease,
  onCrease,
  onDelete
}) => {
  return (
    <div className="flex py-8 items-center border-b border-solid border-slate-300 relative">
      <div className="product-cart-img mr-5 sm:w" style={{ width: "135px", height: "135px", minWidth: "135px" }}>
        <Image src={src} alt={alt} w="135px" h="135px" />
      </div>
      <div className="w-2/3 flex flex-col md:flex-row items-start md:items-center">
        <div className="w-2/3 md:w-1/3">
          <div className="text-lg uppercase font-semibold leading-6">{name}</div>
          <p className=" text-base font-extralight mt-2">{desc}</p>
        </div>  
        <div className="md:ml-4 font-normal text-base leading-tight">
          <h3 className="text-gray-400 mb-2 line-through">
            Retail Price ${retailPrice}
          </h3>
          <h3>Our Price ${ourPrice}</h3>
        </div>
        <div className="w-1/6 flex md:ml-auto mt-4 md:mt-0">
          <div
            onClick={onDecrease}
            className="flex justify-center items-center w-7 h-7 cursor-pointer border border-slate-300 mr-3 hover:bg-black hover:text-white"
            style={{
              borderRadius: "50%",
            }}
          >
            <span
              style={{
                position: "relative",
                top: "-2px",
              }}
            >
              -
            </span>
          </div>
          <span>{amount}</span>
          <div
            onClick={onCrease}
            className="flex justify-center items-center w-7 h-7 cursor-pointer border border-slate-300 ml-3 bg-black hover:opacity-60"
            style={{
              borderRadius: "50%",
            }}
          >
            <span
              className="text-white relative"
              style={{
                top: "-2px",
              }}
            >
              +
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <h4 className="md:mr-10 text-xl font-bold leading-5 ml-3  absolute left-0 sm:static bottom-0 right-0 mb-8 md:mb-0 md:static">
          ${(ourPrice * amount).toFixed(2)}
        </h4>
        <div
          onClick={onDelete}
          className=" bg-slate-300 hover:bg-red-500 cursor-pointer absolute top-0 right-0 mt-8 md:mt-0 md:static"
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <AiOutlineClose className="text-gray-400 hover:text-black" />
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
