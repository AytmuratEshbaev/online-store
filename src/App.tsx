import "./App.css";
import HeaderTop from './Components/HeaderTop';
import HeaderMiddle from "./Components/HeaderMiddle";
import HeaderBottom from "./Components/HeaderBottom";
import HeroSection from "./Components/HeroSection";
import ProductArea from "./Components/ProductArea";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
      <HeroSection />
      {/* <ProductArea /> */}
      <Footer />
    </div>
  );
}

export default App;
