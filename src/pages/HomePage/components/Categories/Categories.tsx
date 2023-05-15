import {FC} from 'react'
import { NavLink } from 'react-router-dom'

const Categories:FC = () => {
  return (
    <div className='flex justify-center lg:gap-3 mx-6 mb-8 '>
        <NavLink to={"/women"}>
            <img src="https://cdn.shopify.com/s/files/1/0269/7763/2389/files/shop_womens_HP_banner.jpg?v=1668002960" alt="" className='rounded-xl hidden lg:flex' />
            <div className='font-semibold text-center block lg:hidden'>SHOP WOMEN</div>
            <ul className='block  lg:flex justify-center gap-2 p-2 mt-2 w-full lg:w-full'>
                <li className='lg:p-3 p-2 text-center mt-2 border-2 border-gray-200 rounded-xl shadow-lg shadow-gray-500/50'>Shop all Women</li>
                <li className='lg:p-3 p-2 text-center mt-2 border-2 border-gray-200 rounded-xl shadow-lg shadow-gray-500/50'>Best Sellers</li>
                <li className='lg:p-3 p-2 text-center mt-2 border-2 border-gray-200 rounded-xl shadow-lg shadow-gray-500/50'>New Arrivals</li>
                <li className='lg:p-3 p-2 text-center mt-2 border-2 border-gray-200 rounded-xl shadow-lg shadow-gray-500/50'>Gift Sets</li>
                <li className='lg:p-3 p-2 text-center mt-2 border-2 border-gray-200 rounded-xl shadow-lg shadow-gray-500/50'>Clearance</li>
            </ul>
        </NavLink>
        <NavLink to={"/men"} >
            <img src="https://cdn.shopify.com/s/files/1/0269/7763/2389/files/shop_mens_HP_banner.jpg?v=1668002960" alt="" className='rounded-xl hidden lg:flex' />
            <div className='font-semibold text-center block lg:hidden'>SHOP MEN</div>
            <ul className='block lg:flex justify-center gap-2 p-2 mt-2 w-44  lg:w-full'>
                <li className='lg:p-3 p-2 text-center mt-2 border-2 border-gray-200 rounded-xl shadow-lg shadow-gray-500/50'>Shop all Men</li>
                <li className='lg:p-3 p-2 text-center mt-2 border-2 border-gray-200 rounded-xl shadow-lg shadow-gray-500/50'>Best Sellers</li>
                <li className='lg:p-3 p-2 text-center mt-2 border-2 border-gray-200 rounded-xl shadow-lg shadow-gray-500/50'>New Arrivals</li>
                <li className='lg:p-3 p-2 text-center mt-2 border-2 border-gray-200 rounded-xl shadow-lg shadow-gray-500/50'>Gift Sets</li>
                <li className='lg:p-3 p-2 text-center mt-2 border-2 border-gray-200 rounded-xl shadow-lg shadow-gray-500/50'>Clearance</li>
            </ul>
        </NavLink>
    </div>
  )
}

export default Categories