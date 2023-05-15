import React from 'react'
import ReactStars from 'react-stars'
import { Data } from '../../interfacae/interface'
import Slider from "react-slick";
import { settings } from '../Slick/Slick';



interface Props {
  data : Data[]
}

const ProductList:React.FC<Props> = (props) => {
  const {data} = props

  return (
    <div className='lg:w-11/12 w-10/12 mx-auto'>
      <Slider {...settings}>
      {data.map((data)=>(
      <div className='w-full' key={data.id}>
        <div className='flex justify-end'>
            <div className='w-14 h-14 bg-red-500 text-white text-sm text-center rounded-full relative top-10 font-semibold'>{data.sale}</div>
        </div>
        <div className='px-4'>
          <img src={data.img} alt="" />
          <div className='font-semibold'>{data.name}</div>
          <div>{data.content}</div>
          <div className='font-semibold'>{data.price}</div>
          <div className='flex'>
              <ReactStars
                  size={24}
                  color2={'black'}
              />
              <div className='p-2'>3</div>
          </div>
        </div>
       </div>
        ))}
      </Slider>
    </div>

  )
}

export default ProductList