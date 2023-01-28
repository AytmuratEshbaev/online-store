import Breadcrumb from "../../Components/Breadcrumb";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
import HeaderBottom from "../../Components/HeaderBottom";
import HeaderMiddle from "../../Components/HeaderMiddle";
import HeaderTop from "../../Components/HeaderTop";

function ContactPage() {
    return (
        <>
            <header>
                <HeaderTop />
                <HeaderMiddle />
                <HeaderBottom />
            </header>
            <Breadcrumb />
            <Contact />
            <Footer />
        </>
    )
}

export default ContactPage;