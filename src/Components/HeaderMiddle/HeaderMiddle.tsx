import "./HeaderMiddle.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import SearchByCategory from "../SearchByCategory";
import Minicart from "../Minicart";
import { useState } from "react";

function HeaderMiddle() {
  const [controlMobileMenu, setControlMobileMenu] = useState(false);

  return (
    <>
      <div
        className={`header-middle ${
          controlMobileMenu ? "open-mb" : "close-mb"
        }`}
      >
        <Container>
          <Row>
            <Col lg={3}>
              <div className="logo pb-sm-30 pb-xs-30">
                <a href="index.html">
                  <img src="images/logo.png" alt="logo" />
                </a>
              </div>
            </Col>
            <Col lg={9}>
              <Row>
                <Col md={8}>
                  <Form action="#" className="hm-searchbox col-sm-6">
                    <SearchByCategory />
                    <input type="text" placeholder="Введите ключ поиска ..." />
                    <Button className="li-btn" type="submit">
                      <span className="icon-search"></span>
                    </Button>
                  </Form>
                </Col>
                <Col md={4}>
                  <Row>
                    <Col xs={11} sm={11} md={12}>
                      <div className="header-middle-right col-sm-6">
                        <ul className="hm-menu">
                          <li className="hm-wishlist">
                            <a href="wishlist.html">
                              <span className="cart-item-count wishlist-item-count">
                                0
                              </span>
                              <i className="icon-heart-o"></i>
                            </a>
                          </li>
                          <li className="hm-minicart">
                            <div className="hm-minicart-trigger">
                              <span className="item-icon"></span>
                              <span className="item-text">
                                £160
                                <span className="cart-item-count">2</span>
                              </span>
                            </div>
                            <Minicart />
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xs={1} sm={1} className="d-md-none">
                      <div
                        className="mobile-menu"
                        onClick={() => setControlMobileMenu(!controlMobileMenu)}
                      >
                        <span className="icon-menu"></span>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default HeaderMiddle;
