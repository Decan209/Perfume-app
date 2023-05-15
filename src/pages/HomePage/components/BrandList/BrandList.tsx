import React from 'react'
import { BrandData } from '../../data/Brand'
import Slider from "react-slick";
import { settings } from '../Slick/Slick';

interface item{
    id : number,
    img : string
}


const BrandList:React.FC = () => {

  return (
    <div className='lg:w-11/12 w-10/12 mx-auto'>
        <Slider {...settings}>
        {BrandData.map((item:item)=>(
            <div key={item.id}>
                <div className=' h-20 border-2 border-gray-400 p-6 m-3 rounded-xl shadow-lg shadow-gray-500/50'>
                    <img className='mx-auto' src={item.img} alt="" />
                </div>
            </div>
        ))}
        </Slider>
    </div>
  )
}

export default BrandList