import { Container, Row, Col } from 'react-bootstrap';
import './AboutUs.css'

function AboutUs() {
    return (
        <div className="about-us-wrapper">
            <Container>
                <Row>
                    <Col lg={6} className="order-last order-lg-first">
                        <div className="about-text-wrap">
                            <h2><span>Предоставить лучший</span> Продукт для вас</h2>
                            <p>Мы предлагаем лучшее масло для бороды со всего мира. Мы являемся лучшим в мире магазином масла для бороды в Индии. Вы можете купить наш продукт без каких-либо колебаний, потому что они доверяют нам и покупают наш продукт без каких-либо колебаний, потому что они верят и всегда рады купить наш продукт.</p>
                            <p>Некоторые из наших клиентов говорят, что они доверяют нам и покупают наш продукт без каких-либо колебаний, потому что они верят нам и всегда рады купить наш продукт.</p>
                            <p>Мы обеспечиваем то, что они нам доверили, и покупаем наш товар без всяких раздумий, потому что нам верят и всегда рады покупке.</p>
                        </div>
                    </Col>
                    <Col lg={5} md={10}>
                        <div className="about-image-wrap">
                            <img className="img-full" src="images/product/large-size/13.jpg" alt="About Us" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutUs;