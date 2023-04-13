import HeaderBottom from '../../Components/HeaderBottom';
import HeaderMiddle from '../../Components/HeaderMiddle';
import HeaderTop from '../../Components/HeaderTop';
import Footer from '../../Components/Footer';
import HeroSection from '../../Components/HeroSection';
import ProductArea from '../../Components/ProductArea';
import './HomePage.css';
import ContactForm from '../../Components/ContactForm';

function HomePage() {
   return (
        <>
            <header>
                <HeaderTop />
                <HeaderMiddle />
                <HeaderBottom />
            </header>
            <ContactForm />
            <HeroSection />
            <ProductArea />
            <Footer />
        </>
    )
}


export default HomePage;