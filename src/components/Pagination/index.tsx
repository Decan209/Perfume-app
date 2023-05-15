import React, { FC } from "react";

interface Prop {
  totalProducts: number;
  productsPerPage: number;
  setCurrentPage: any;
}

const Pagination: FC<Prop> = ({ totalProducts, productsPerPage, setCurrentPage }) => {
  let pages = [];

  


  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pages.push(i);
  }

  return (

  <div className="flex flex-wrap justify-center mt-4">
  {
  pages.map((page, index) => {
    return <button className="w-10 h-10 font-semibold text-base rounded-md cursor-pointer bg-transparent mx-2 ease-in-out duration-300 decoration-black border-4 hover:bg-gray-200 focus:bg-gray-200" 
    key={index} onClick={() => setCurrentPage(page)}>{page}</button>
  })
  }
  </div>
  );
};

export default Pagination;
