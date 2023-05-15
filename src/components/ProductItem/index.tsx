import { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

interface Prop {
    product: any,
    btnEdit?:boolean,
    handleDelete?:any,
    handleEdit?:any,
    isNavigate?: boolean,
    onDelteProduct?: any,
    onShowModalEditProduct?: any
}

const ProductItem: FC<Prop> = ({product,btnEdit, onDelteProduct,onShowModalEditProduct, isNavigate}) =>{
    const navigate = useNavigate();


  return (
    <div className=' mr-4 mb-4 border p-4 hover:shadow-lg cursor-pointer'>
        <div className="innerProduct">
            <div className="productImg">
                <img src={product.imgSrc} alt="..." className='w-full h-full'  onClick={() => isNavigate? navigate("/product/" + product.id): undefined}/>
            </div>
            <div className="productdesc">
                <p className='flex justify-start tracking-normal text-black uppercase font-semibold text-base leading-6'>{product.name}</p>
                <p className='py-2 text-sm h-16'>{product.desc}</p>
                <b className='line-through text-gray-400 font-normal'>Retail Price: ${Number(product.retailPrice).toFixed(2)}</b>
                <br/>
                <b className=' text-red-600'>Our Price: ${Number(product.ourPrice).toFixed(2)}</b>
                <br/>
                {(btnEdit)?
                <div className='mt-4'>
                    <button className='bg-green-600 p-1 mr-2 text-white rounded-lg font-medium hover:bg-green-800 px-2' onClick={() => onShowModalEditProduct(product)}>EDIT</button>
                    <button className='bg-red-600 p-1 text-white rounded-lg font-medium hover:bg-red-800' onClick={()=>onDelteProduct(product.id)}>DELETE</button>
                </div>
                :
                <button
                    className='mt-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 '>
                    <NavLink to={"/product/" + product.id}>
                        <span>View details</span>
                    </NavLink>
               </button>
                }
            </div>
        </div>
    </div>
  )
}

export default ProductItem;
