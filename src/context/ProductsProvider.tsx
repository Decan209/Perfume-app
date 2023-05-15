import { FC, createContext, useEffect, useState, useMemo } from "react";
import Loading from "../components/Loading";
import useFetchAxios from "../hooks/UseFetchAxios";

export const ProductsContext = createContext<any>({});
interface PropProvider {
    children: any
}

const ProductsProvider: FC<PropProvider> = ({children}) => {
    const { responses, doFetch } = useFetchAxios('https://63782c6a5c477765122d0c95.mockapi.io/perfume-products');
    const { data, isLoading } = responses;
    const [products, setProducts] = useState<any>([]);

    const productsMen = useMemo(() => {
        return products.filter((product: any) => product.sex === "men")
    }, [products])

    
    const productsWomen = useMemo(() => {
        return products.filter((product: any) => product.sex === "women")
    }, [products])

    useEffect(() => {
        doFetch({
            method: "GET"
        });
    }, [doFetch])

    useEffect(() => {
        if(data) {
            setProducts(data);
        }
    }, [data]);

    const handleSetProducts = (newProducts: any) => {
        setProducts(newProducts)
    }

    const value = {
        products,
        productsMen,
        productsWomen,
        handleSetProducts
    }
    return (
        <ProductsContext.Provider value={value}>
            {isLoading && <Loading />}
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider