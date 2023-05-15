import { FC } from "react";
import Overflay from "../../../overflay/Overflay";
import SideBar from "../SideBar";
import CloseBtn from "../../../overflay/CloseBtn.tsx";


interface PropSideBarMobile {
    onCloseSideBarMobile: any
}

const SideBarMobile: FC<PropSideBarMobile> = ( {onCloseSideBarMobile} ) => {

    return (
        <div className="md:hidden">
            <div 
                className="fixed top-0 left-0 bottom-0 bg-white px-4"
                style={{
                    zIndex: "2",
                    width: "80%",
                    overflow: "scroll"
                }}
            >
                <SideBar titleSideBar="">
                    <CloseBtn onClose={onCloseSideBarMobile}/>
                </SideBar>
            </div>
            <Overflay onClose = { onCloseSideBarMobile }/>
        </div>
    )
}

export default SideBarMobile;