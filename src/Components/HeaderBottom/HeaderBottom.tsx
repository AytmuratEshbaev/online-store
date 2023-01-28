import "./HeaderBottom.css";
import { Container, Row, Col } from "react-bootstrap";

function HeaderBottom() {
  return (
    <>
      <div className="header-bottom header-sticky">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="hb-menu">
                <nav>
                  <ul>
                    <li>
                      <a href="#">Главная</a>
                    </li>
                    <li>
                      <a href="#">Список Покупок</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">О Нас</a>
                    </li>
                    <li>
                      <a href="#">Контакт</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default HeaderBottom;
