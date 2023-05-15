import { FC } from "react";
import DropDown from "./Dropdown";
import { dropdowns } from "./instance"; 

interface PropSideBar {
    titleSideBar: string,
    children?: any
}

const SideBar: FC<PropSideBar> = ({ titleSideBar, children }) => {

    return(
        <div>
            <div>
                <h2 className="sidebar-title font-semibold text-2xl mb-6">{ titleSideBar }</h2>
                { children }
            </div>
            <h4 className="mb-9">Filter</h4>
            {dropdowns.map((dropDown, index) => (
                <DropDown key={index} dropDowntitle = {dropDown.title} dropdownLinks = { dropDown.links }/>
            ))}

        </div>
    )
}

export default SideBar;