import { FC } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import BrandList from "./components/BrandList/BrandList";
import ProductList from "./components/ProductList/ProductList";
import { BestSallers } from "./data/BestSallers";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Deals } from "./data/Deals";
import Icon from "./components/Icon/Icon";
import { IconData } from "./data/IconData";
import { PerfectData } from "./data/Perfect";
import { GoLocation } from 'react-icons/go';
import Categories from "./components/Categories/Categories";




const HomePage: FC = () => {
    
    return (
        <div>
            <img src="https://cdn.shopify.com/s/files/1/0269/7763/2389/files/Perfumania_02-06-2023_VDAY_GuideWeb_Banner_1500x.jpg?v=1675690297" alt="" />
            <div className="flex justify-between my-6">
                <div className="text-2xl">OUR FRAGRANCE BRANDS</div>
                <div className="flex my-auto">Shop by brand <AiOutlineArrowRight className="text-2xl mx-1 pt-1 text-center"/></div>
            </div>
            <BrandList/>
            <div className="text-center mt-12 pt-10">
                <div className="text-3xl">BEST SELLERS</div>
                <div className="p-3">Explore the best selling perfumes of all times</div>
            </div>
            <ProductList data={BestSallers}/>
            <div className="text-center mt-12 pt-10">
                <div className="text-3xl">BUNDLE DEALS</div>
                <div className="p-3">Limited Quantities Available! These bundle duos provide you with bigger savings than ever before! </div>
            </div>
            <ProductList data={Deals}/>
            <div className="flex justify-end my-5 p-5">Shop bundle deals <AiOutlineArrowRight className="text-2xl mx-1 pt-1 text-center"/></div>
            <Icon icon={IconData} />
            <div className="text-center mt-12 pt-10">
                <div className="text-3xl">PERFECT SCENTS FOR WINTER</div>
                <div className="p-3">Warm, woody and floral fragrances that are perfect for Winter!</div>
            </div>
            <ProductList data={PerfectData}/>
            <div className="flex justify-end my-5 p-5">Shop perfect scents for winter<AiOutlineArrowRight className="text-2xl mx-1 pt-1 text-center"/></div>
            <div className="block lg:flex">
                <img src="https://cdn.shopify.com/s/files/1/0269/7763/2389/files/Perfumania_Store.jpg?v=1636134750" className="lg:max-w-lg" alt="" />
                <div className="bg-black text-white text-center p-8">
                    <div className=" text-4xl font-medium ">OVER 100 STORES ACROSS THE US</div>
                    <div className="text-lg my-6">With over 100 discount fragrance retail stores throughout the United States, Perfumania offers a wide selection of high-quality products at substantial savings, serviced by our dedicated associates offering superior customer service.</div>
                    <div className="flex my-5">
                        <div className="px-8">
                            <img src="https://cdn.shopify.com/s/files/1/0269/7763/2389/files/Group_43.svg?v=1632918604" alt="" className="mx-auto w-8 mb-5" />
                            <div>OVER 100 STORES</div>
                            <div>One of America’s Largest Fragrance retailers</div>
                        </div>
                        <div className="px-7 border-l-2 border-l-white">
                            <img src="https://cdn.shopify.com/s/files/1/0269/7763/2389/files/Offers.svg?v=1636631784" alt="" className="mx-auto mb-3"/>
                            <div>BEST PRICES</div>
                            <div>Genuine designer fragrances at discounted prices</div>
                        </div>
                    </div>
                    <div className="bg-white text-black flex justify-center lg:w-1/3 w-3/4 my-6 mx-auto p-2 rounded-xl cursor-pointer">
                        <GoLocation className="m-1"/>
                        <div>Find your local store</div>
                    </div>
                </div>
            </div>
            <div className="text-3xl text-center my-9">POPULAR CATEGORIES</div>
            <Categories/>
        </div>
    )
}

export default HomePage;