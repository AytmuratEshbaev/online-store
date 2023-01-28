import HeaderBottom from "../../Components/HeaderBottom";
import HeaderMiddle from "../../Components/HeaderMiddle";
import HeaderTop from "../../Components/HeaderTop";
import Footer from "../../Components/Footer";
import "./NotFound.css";
import Breadcrumb from "../../Components/Breadcrumb";

function NotFound() {
    return (
        <>
            <header>
                <HeaderTop />
                <HeaderMiddle />
                <HeaderBottom />
            </header>
            <Breadcrumb />
            <div className="error404-area pt-30 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="error-wrapper text-center ptb-50 pt-xs-20">
                                <div className="error-text">
                                    <h1>404</h1>
                                    <h2>Упс! СТРАНИЦА НЕ НАЙДЕНА</h2>
                                    <p>Извините, но страница, которую вы ищете, не существует, </p>
                                    <p>была удалена, имя изменено или временно недоступна.</p>
                                </div>
                                <div className="error-button">
                                    <a href="index.html">Back to home page</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NotFound;