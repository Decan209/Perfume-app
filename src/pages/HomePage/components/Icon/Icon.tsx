import React,{FC} from 'react'
import { ItemData } from '../../interfacae/icons'


interface Item {
    icon : ItemData[]
}
const Icon:FC<Item> = ({icon}) => {
    
  return (
    <div className='grid grid-cols-2 lg:flex'>
        {icon.map((item)=>(
            <div className='lg:w-1/4 py-4 text-center bg-blue-200 border-2 border-r-white' key={item.id}>
                <img src={item.img} alt=""className='w-12 mx-auto pt-6' />
                <div className='font-semibold py-4'>{item.title}</div>
                <div className='px-2'>{item.content}</div>
            </div>
        ))}

    </div>
  )
}

export default Icon