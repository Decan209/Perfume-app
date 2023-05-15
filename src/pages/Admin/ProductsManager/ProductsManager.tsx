import { FC, useState, useContext } from 'react';
import Loading from '../../../components/Loading';
import ProductList from '../../../components/ProductList/ProductList';
import ADDModal from './AddModel';
import "./ProductsManager.css";
import { ProductsContext } from '../../../context/ProductsProvider';
import axios from 'axios';



const ProductsManager:FC = () => {

    const [btnEdit, setBtnEdit] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [productEdit, setProductEdit] = useState<any>({});
    const [isModalAddProduct, setIsModalAddProduct] = useState(false);
    const { products, handleSetProducts } = useContext(ProductsContext);
    const [loading, setLoading] = useState(false);
     
    const handleDeleteProduct = (productID: number) => {
        setLoading(true);
        axios.delete('https://63782c6a5c477765122d0c95.mockapi.io/perfume-products/' + productID);
        const newProducts = products.filter((product: any) => product.id !== productID);
        handleSetProducts(newProducts);
        setLoading(false);
    }
    
    const handleShowModalEditProduct = (product: any) => {
        setShowModal(true);
        setProductEdit(product);
    }

    const handleShowModalAddProduct = () => {
        setShowModal(true)
        setIsModalAddProduct(true);
    }

    return (
        <>
        {loading && <Loading/>}       
        {products && (
            <div>
                <div className='flex justify-end mt-4'>
                    <button className='bg-blue-500 p-1 mr-2 text-white rounded-lg font-medium hover:bg-blue-800 px-2' onClick={handleShowModalAddProduct}>ADD</button>
                    <button onClick={() => setBtnEdit(!btnEdit)} className='bg-green-500 p-1 mr-2 text-white rounded-lg font-medium hover:bg-green-800 px-2'>EDIT</button>
                </div>
                <div>
                 <ADDModal 
                    showModal = {showModal}
                    onCloseModal = {() => setShowModal(false)}  
                    productEdit = {productEdit}  
                    isModalAddProduct = {isModalAddProduct}
                />
                </div>
                <ProductList 
                    products={products} 
                    btnEdit ={btnEdit} 
                    onDelteProduct = {handleDeleteProduct}  
                    onShowModalEditProduct = {handleShowModalEditProduct}
                    isNavigate={false}
                />
            </div>
        )
        }  
        </>
    )
}

export default ProductsManager;