import { FaChevronDown } from "react-icons/fa";
import { FC, useState } from "react";

interface DropDownProp {
  dropDowntitle: string;
  dropdownLinks: string[];
}

const DropDown: FC<DropDownProp> = ({ dropDowntitle, dropdownLinks }) => {
  const [openDropDown, setOpenDropDown] = useState<Boolean>(false);

  return (
    <div 
      className="mb-6 border-b border-stone-200"
      style={{width: "90"}}  
    >
      <div
        className="drop-down-title flex justify-between items-center mb-6 cursor-pointer"
        onClick={() => setOpenDropDown(!openDropDown)}
      >
        <h3 className="font-semibold text-lg">{dropDowntitle}</h3>
        <FaChevronDown className="mr-6"/>
      </div>
      {openDropDown && (
        <ul 
          className="ml-2 text-sm"
          style={{
            height: "180px",
            overflowY: "scroll"
          }}
        >
          {dropdownLinks.map((dropdownLink, index) => (
            <li key={index} className="mt-6 cursor-pointer">
              <input className="mr-2" type="checkbox" /> {dropdownLink}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
