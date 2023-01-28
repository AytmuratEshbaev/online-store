import Breadcrumb from "../../Components/Breadcrumb";
import Footer from "../../Components/Footer";
import HeaderBottom from "../../Components/HeaderBottom";
import HeaderMiddle from "../../Components/HeaderMiddle";
import HeaderTop from "../../Components/HeaderTop";
import Register from "../../Components/Register";




function RegisterPage() {
    return (
        <>
            <header>
                <HeaderTop />
                <HeaderMiddle />
                <HeaderBottom />
            </header>
            <Breadcrumb />
            <Register />
            <Footer />
        </>
    )
}

export default RegisterPage;