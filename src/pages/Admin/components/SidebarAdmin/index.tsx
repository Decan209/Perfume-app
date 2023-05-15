import { FC } from 'react';
import SidebarAdminRow from './SidebarAdminRow';

const SidebarAdmin: FC = () => {

    return(
        <div>
            <SidebarAdminRow page = "Products Manager" route="/admin"/>
            <SidebarAdminRow page = "Users Manager" route="users-manager"/>
            <SidebarAdminRow page = "Bills Manager" route="bills-manager"/>
        </div>
    )
}

export default SidebarAdmin;