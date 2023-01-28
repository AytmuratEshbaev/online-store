import AboutUs from "../../Components/AboutUs";
import Breadcrumb from "../../Components/Breadcrumb";
import Footer from "../../Components/Footer";
import HeaderBottom from "../../Components/HeaderBottom";
import HeaderMiddle from "../../Components/HeaderMiddle";
import HeaderTop from "../../Components/HeaderTop";




function AboutUsPage() {
    return (
        <>
            <header>
                <HeaderTop />
                <HeaderMiddle />
                <HeaderBottom />
            </header>
            <Breadcrumb />
            <AboutUs />
            <Footer />
        </>
    )
}

export default AboutUsPage;