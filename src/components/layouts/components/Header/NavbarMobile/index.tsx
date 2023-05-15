import { FC } from "react";
import CloseBtn from "../../../../overflay/CloseBtn.tsx";
import Overflay from "../../../../overflay/Overflay";
import { FaUserAlt, FaChevronRight } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import NavbarMoblieRow from "./NavbarMobileRow";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
    logout,
    selectUser,
} from "../../../../../pages/Customeraccount/featurnes/useSlice";
import { useNavigate } from "react-router-dom";

interface PropNavbarMobile {
    onCloseNavbarMobile: Function;
}

const NavbarMobile: FC<PropNavbarMobile> = ({ onCloseNavbarMobile }) => {
    const { isLogin, isAdmin } = useSelector(selectUser);
    const disPatch = useDispatch();
    const navigate = useNavigate();

    const handleAccount = () => {
        if(isLogin) {
            disPatch(logout());
        } else {
            navigate('/customeraccount');
        }
    };

    return (
        <div className="xl:hidden">
            <div
                className="fixed top-0 bottom-0 left-0 bg-white"
                style={{
                    width: "80%",
                    paddingBottom: "100px",
                    zIndex: "2",
                    overflow: "scroll",
                }}
            >
                <div className="p-4 pr-2 flex justify-between items-center">
                    <h3 className="font-semibold">MENU</h3>
                    <CloseBtn onClose={onCloseNavbarMobile} />
                </div>
                <div onClick={handleAccount}>
                    <div className="flex items-center py-4 px-2 cursor-pointer bg-slate-100 hover:bg-slate-300">
                        <div
                            style={{
                                width: "43px",
                                height: "43px",
                                borderRadius: "50%",
                                backgroundColor: "grey",
                                display: "flex",
                            }}
                        >
                            <FaUserAlt className="m-auto" />
                        </div>
                        <p className="ml-4 text-red-600 font-semibold">{isLogin ? "Logn Out" : "My Acount"}</p>
                        <FaChevronRight className="text-gray-300 mr-6 ml-auto" />
                    </div>
                </div>
                {isAdmin && (
                    <NavLink to="/admin">
                        <div className="flex items-center py-4 px-2 cursor-pointer bg-slate-100 hover:bg-slate-300">
                            <div
                                style={{
                                    width: "43px",
                                    height: "43px",
                                    borderRadius: "50%",
                                    backgroundColor: "grey",
                                    display: "flex",
                                }}
                            >
                                <MdSecurity className="m-auto text-red-900" />
                            </div>
                            <p className="ml-4 text-red-600 font-semibold">Admin Manager</p>
                            <FaChevronRight className="text-gray-300 mr-6 ml-auto" />
                        </div>
                    </NavLink>
                )}
                <NavbarMoblieRow
                    alt="women"
                    src="https://cdn.shopify.com/s/files/1/0269/7763/2389/files/women_icon_47eda231-6206-4341-8b62-dfdce31ca056.png"
                    title="Women's Perfume"
                    onCloseNavbarMobile={onCloseNavbarMobile}
                />
                <NavbarMoblieRow
                    alt="men"
                    src="https://cdn.shopify.com/s/files/1/0269/7763/2389/files/men_icon_3fcd8ed9-2d2f-4dd0-b094-f0f56d3f2160.png"
                    title="Men's Perfume"
                    onCloseNavbarMobile={onCloseNavbarMobile}
                />
                <NavbarMoblieRow
                    alt="search"
                    src="https://cdn.shopify.com/s/files/1/0269/7763/2389/files/clearnace_icon_1136ba11-08b4-46e1-8a54-7b56ef389066.png"
                    title="Search"
                    onCloseNavbarMobile={onCloseNavbarMobile}
                />
                <NavbarMoblieRow
                    alt="gift"
                    src="https://cdn.shopify.com/s/files/1/0269/7763/2389/files/Gifts_menu.png?v=1636382258"
                    title="Gift Sets"
                    onCloseNavbarMobile={onCloseNavbarMobile}
                />
                <NavbarMoblieRow
                    alt="brands"
                    src="https://cdn.shopify.com/s/files/1/0269/7763/2389/files/atoz.png"
                    title="Shop by brands"
                    onCloseNavbarMobile={onCloseNavbarMobile}
                />
                <NavbarMoblieRow
                    alt="fragrance"
                    src="https://cdn.shopify.com/s/files/1/0269/7763/2389/files/women_icon_47eda231-6206-4341-8b62-dfdce31ca056.png"
                    title="Join Theo Club"
                    onCloseNavbarMobile={onCloseNavbarMobile}
                />
            </div>
            <Overflay onClose={onCloseNavbarMobile} />
        </div>
    );
};

export default NavbarMobile;
