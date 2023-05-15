import { FC } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

interface PropNotSideBarLayOut {
    children: any
}

const NotSideBarLayOut: FC<PropNotSideBarLayOut> = ({ children }) => {

    return (
        <div className="app">
            <Header />
                { children }
            <Footer />
        </div>
    )
}

export default NotSideBarLayOut;