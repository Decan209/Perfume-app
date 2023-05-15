import { FC } from "react";
import Footer from "../../components/layouts/components/Footer";
import SidebarAdmin from "./components/SidebarAdmin"; 
import { Outlet } from "react-router-dom";
import Header from "../../components/layouts/components/Header";

const Admin: FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="border-t border-slate-300 ">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-4 md:col-span-1 bg-slate-100 pl-4">
            <SidebarAdmin />
          </div>
          <div className="col-start-1 col-end-5 md:col-span-3 pr-4"><Outlet /></div>
        </div>
      </div>
      {/* {openSideBarMobile && <SideBarMobile onCloseSideBarMobile={() => setOpenSideBarMobile(false)}/>}     */}
      <Footer />
    </div>
  );
};

export default Admin;
