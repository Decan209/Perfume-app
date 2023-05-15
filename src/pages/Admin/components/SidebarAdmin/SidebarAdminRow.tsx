import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { FaChevronRight } from 'react-icons/fa';

interface PropSidebarAdminRow {
    page: string;
    route: string
}

const SidebarAdminRow: FC<PropSidebarAdminRow> = ( {page, route}) => {

    return (
        <NavLink to={route}>
            <div className='py-4 px-2 flex justify-between items-cente border-b border-slate-200 cursor-pointer hover:bg-slate-300'>
                <h3 className=' text-red-500 font-semibold text-lg uppercase'>{page}</h3>
                <FaChevronRight className='text-red-500 mr-6'/>
            </div>
        </NavLink>
    )
}

export default SidebarAdminRow;