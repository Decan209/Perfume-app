import { FC, useContext } from "react";
import Banner from "../../components/Banner";
import ProductList from "../../components/ProductList/ProductList";
import { ProductsContext } from "../../context/ProductsProvider";

const Men: FC = () => {
  const {productsMen} = useContext(ProductsContext);

  return (
    <div className="px-4 pt-2">
      <Banner imgBanner="https://cdn.shopify.com/s/files/1/0269/7763/2389/files/collection_header_Men_Mobile.jpg"/>
      <ProductList 
        products = {productsMen} 
        isNavigate = {true} 
      />
    </div>

      )}


export default Men;

