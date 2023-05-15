import { FC } from "react";
import Banner from "../../components/Banner";
import ProductList from "../../components/ProductList/ProductList";

const Gift: FC = () => {
    return (
        <div className="px-4 pt-2">
        <Banner imgBanner="https://cdn.shopify.com/s/files/1/0269/7763/2389/files/collection_header_GiftSets_Mobile.jpg"/>
        <ProductList products={[]} isNavigate  = {true} />
      </div>
    )
}

export default Gift;