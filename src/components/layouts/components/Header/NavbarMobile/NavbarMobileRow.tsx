import { FC } from 'react';
import Image from '../../../../Image';
import { FaChevronRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


interface PropNavbarMobileRow {
    alt: string,
    src: string,
    title: string,
    onCloseNavbarMobile: any
}

const NavbarMoblieRow: FC<PropNavbarMobileRow> = ({ alt, src, title, onCloseNavbarMobile }) => {

    return (
        <NavLink to={"/" + alt}>
            <div className='py-4 px-2 flex justify-between items-center bg-slate-100 cursor-pointer hover:bg-slate-300' onClick={onCloseNavbarMobile}>
                <div className='flex items-center'>
                    {<Image alt={alt} src={src} w="43px" h="43px"/>}
                    <h4 className='ml-4'>{title}</h4>
                </div>
                <FaChevronRight className='text-gray-300 mr-6'/>
            </div>
        </NavLink>
    )
}

export default NavbarMoblieRow;