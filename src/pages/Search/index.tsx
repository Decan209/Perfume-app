import { FC, useMemo, useContext } from "react";
import ProductList from "../../components/ProductList/ProductList";
import { useLocation } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsProvider";

const Search: FC = () => {

    const { state } = useLocation();
    const searchValue = state?.searchValue ?? '';

    const {products} = useContext(ProductsContext);

    const productsSearch = useMemo(() => {
      return products.filter((product: any) => product.name.toLowerCase().includes(searchValue.toLowerCase()))
    }, [products, searchValue])

      return (
          <div className="px-4 pt-2">
        <ProductList products={productsSearch} isNavigate={true}/>
      </div>
      )
}

export default Search;