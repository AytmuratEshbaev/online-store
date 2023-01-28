import Breadcrumb from "../../Components/Breadcrumb";
import Footer from "../../Components/Footer";
import HeaderBottom from "../../Components/HeaderBottom";
import HeaderMiddle from "../../Components/HeaderMiddle";
import HeaderTop from "../../Components/HeaderTop";
import Login from "../../Components/Login";




function LoginPage() {
    return (
        <>
            <header>
                <HeaderTop />
                <HeaderMiddle />
                <HeaderBottom />
            </header>
            <Breadcrumb />
            <Login />
            <Footer />
        </>
    )
}

export default LoginPage;