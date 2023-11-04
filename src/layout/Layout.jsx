import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/pages/footer/Footer";

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;