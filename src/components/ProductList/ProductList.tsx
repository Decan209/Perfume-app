import { FC, useState } from "react";
import ProductItem from "../ProductItem/index";
import Pagination from "../Pagination";
import SideBarMobile from "../layouts/MainLayout/SideBarMobile";


interface Product {
  imgSrc: string,
  name: string,
  desc: string,
  sex: string,
  retailPrice:number,
  ourPrice: number,
  id: any,
}

type Props = {
  products : Product[],
  btnEdit? : boolean,
  isNavigate: boolean,
  onDelteProduct?: any,
  onShowModalEditProduct?:any
}

const ProductList: FC<Props> = ({products,btnEdit, onDelteProduct, onShowModalEditProduct, isNavigate}) => {

  const [isOpenSidebarMobile, setIsOpenSidebarMobile] = useState(false);
  const [isOpenSortBar, setIsOpenSortBar] = useState(false)

  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 12;

  const lastProductIndex = currentPage * productPerPage;
  const firstProductIndex = lastProductIndex - productPerPage ;
 
 
  return (
    <>
      {isOpenSidebarMobile && (
        <SideBarMobile
          onCloseSideBarMobile={() => {
            setIsOpenSidebarMobile(false);
          }}
        />
      )}

      <div className="mt-8 flex justify-end relative">
        <button
          className="mr-auto rounded bg-gray-200 h-8 w-14 flex items-center justify-center md:hidden"
          onClick={() => setIsOpenSidebarMobile(true)}
        >
          Filter
        </button>

        <button
          className="rounded bg-gray-200 h-8 w-14 flex items-center justify-center"
          onClick={() => {setIsOpenSortBar(!isOpenSortBar)}}
        >
          Sort
        </button>
        <div className={isOpenSortBar? "absolute w-36 h-28 right-0 top-8 bg-white shadow-lg" : "hidden"}>
          <ul className="">
            <li className=" hover:bg-gray-200 cursor-pointer px-2 py-1 text-sm" onClick={() => {
              products = products.sort((a,b) => a.ourPrice - b.ourPrice)
              setIsOpenSortBar(!isOpenSortBar)
            }}
            >Price, low to high</li>
            <li className=" hover:bg-gray-200 cursor-pointer px-2 py-1 text-sm" onClick={() => {
              products = products.sort((a,b) => b.ourPrice - a.ourPrice)
              setIsOpenSortBar(!isOpenSortBar)
            }}>Price, high to low</li>
            <li className=" hover:bg-gray-200 cursor-pointer px-2 py-1 text-sm" onClick={() => {
              products = products.sort((a,b) => a.name.localeCompare(b.name))
              setIsOpenSortBar(!isOpenSortBar)
            }}>Alphabetically, A-Z</li>
            <li className=" hover:bg-gray-200 cursor-pointer px-2 py-1 text-sm" onClick={() => {
              products = products.sort((a,b) => b.name.localeCompare(a.name))
              setIsOpenSortBar(!isOpenSortBar)
            }}>Alphabetically, Z-A</li>
          </ul>
        </div>
      </div>
      <div className=" -mr-4  pt-8 grid grid-col md:grid-cols-3 lg:grid-cols-4 ">
        {
        products.slice(firstProductIndex, lastProductIndex).map((product, index) => {
          return (
              <ProductItem 
                key={index} 
                product={product} 
                btnEdit={btnEdit} 
                onDelteProduct = {onDelteProduct}
                onShowModalEditProduct = {onShowModalEditProduct}
                isNavigate={isNavigate}
               />
          );
        })}
      </div>
      <Pagination
        totalProducts={products.length}
        productsPerPage={productPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default ProductList;
