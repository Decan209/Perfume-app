import { FC } from "react";
import { FaChevronRight } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "./SideBar";
import { useLocation } from "react-router-dom";
// interface PropOutlet {
//     children: any,
//     onCloseSideBarMobile: any
// }

const MainLayout: FC<any> = ({ children } ) => {
    const location = useLocation();
    const title = location.pathname.split('/')[1].toUpperCase();

    // const [openSideBarMobile, setOpenSideBarMobile] = useState(true);

    return (
        <div className="app">
            <Header />
            <div className="title-products flex items-center text-sm pb-4 px-4">
                <span className="mr-2">Home</span>
                <span className="mr-2">
                    <FaChevronRight size={10} />
                </span> 
                <span>Perfume & Cologne Gift Sets</span>
            </div>
            <div className="px-4">
                <div className="grid grid-cols-4 gap-4">
                    <div className="hidden md:block md:col-span-1">
                        <SideBar titleSideBar = {title}/>
                    </div>
                    <div className="col-start-1 col-end-5 md:col-span-3">
                        {children}
                    </div>
                </div>
            </div>
            {/* {openSideBarMobile && <SideBarMobile onCloseSideBarMobile={() => setOpenSideBarMobile(false)}/>}     */}
            <Footer />
        </div>
    )
}

export default MainLayout;