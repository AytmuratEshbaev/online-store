import "./HeroSection.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import CategoryMenu from "../CategoryMenu";
import { useState } from "react";

function HeroSection() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    index === 2 ? setIndex(0) : setIndex(selectedIndex);
  };

  return (
    <div className="slider-with-banner">
      <Container>
        <Row>
          <Col lg={3}>
            <CategoryMenu />
          </Col>
          <Col lg={9}>
            <div className="slider-area">
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100"
                    src="./images/slider/1.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption className="slider-content">
                    <h5>
                      Sale Offer <span>-20% Off</span> This Week
                    </h5>
                    <h2>Chamcham Galaxy S9 | S9+</h2>
                    <h3>
                      Starting at <span>$589.00</span>
                    </h3>
                    <div className="default-btn slide-btn">
                      <a className="links" href="#">
                        Shopping Now
                      </a>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100"
                    src="./images/slider/2.jpg"
                    alt="Second slide"
                  />
                  <Carousel.Caption className="slider-content">
                    <h5>
                      Sale Offer <span>Black Friday</span> This Week
                    </h5>
                    <h2>Work Desk Surface Studio 2018</h2>
                    <h3>
                      Starting at <span>$1599.00</span>
                    </h3>
                    <div className="default-btn slide-btn">
                      <a className="links" href="#">
                        Shopping Now
                      </a>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100"
                    src="./images/slider/3.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption className="slider-content">
                    <h5>
                      Sale Offer <span>Black Friday</span> This Week
                    </h5>
                    <h2>Work Desk Surface Studio 2018</h2>
                    <h3>
                      Starting at <span>$1599.00</span>
                    </h3>
                    <div className="default-btn slide-btn">
                      <a className="links" href="#">
                        Shopping Now
                      </a>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
