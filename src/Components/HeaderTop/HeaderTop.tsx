import { Container, Row, Col } from "react-bootstrap";
import './HeaderTop.css';

function HeaderTop() {
  return (
    <div className="header-top">
      <Container>
        <Row>
          <Col lg={3} md={4}>
            <div className="header-top-left">
              <ul className="phone-wrap">
                <li>
                  <span>Телефон:</span>
                  <a href="#">(+998) 93 362 36 21</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={9} md={8}>
            <div className="header-top-right">
              <ul className="ht-menu">
                <li>
                  <a href="#">Мой аккаунт</a>
                </li>
                <li>
                  <a href="#">Checkout</a>
                </li>
                <li>
                  <a href="#">Войти</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeaderTop;
