import HeaderBottom from '../../Components/HeaderBottom';
import HeaderMiddle from '../../Components/HeaderMiddle';
import HeaderTop from '../../Components/HeaderTop';
import Footer from '../../Components/Footer';
import HeroSection from '../../Components/HeroSection';
import ProductArea from '../../Components/ProductArea';


function Home() {
    return (
        <>
            <header>
                <HeaderTop />
                <HeaderMiddle />
                <HeaderBottom />
            </header>
            <HeroSection />
            <ProductArea />
            <Footer />
        </>
    )
}


export default Home;