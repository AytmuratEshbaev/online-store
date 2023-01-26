import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-static-top">
        <Container>
          <div className="footer-shipping">
            <Row>
              <Col lg={3} md={6} sm={6}>
                <div className="li-shipping-inner-box">
                  <div className="shipping-icon">
                    <img src="images/shipping-icon/1.png" alt="Shipping Icon" />
                  </div>
                  <div className="shipping-text">
                    <h2>Бесплатная доставка</h2>
                    <p>
                      И бесплатный возврат. Сроки доставки смотрите в кассе.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6} sm={6}>
                <div className="li-shipping-inner-box">
                  <div className="shipping-icon">
                    <img src="images/shipping-icon/2.png" alt="Shipping Icon" />
                  </div>
                  <div className="shipping-text">
                    <h2>Безопасный платеж</h2>
                    <p>
                      Платите с помощью самого популярного и безопасного платежа
                      в мире методы.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6} sm={6}>
                <div className="li-shipping-inner-box">
                  <div className="shipping-icon">
                    <img src="images/shipping-icon/3.png" alt="Shipping Icon" />
                  </div>
                  <div className="shipping-text">
                    <h2>Делайте покупки с уверенностью</h2>
                    <p>
                      Наша защита покупателей покрывает ваши покупкаот клика до
                      доставки.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6} sm={6}>
                <div className="li-shipping-inner-box">
                  <div className="shipping-icon">
                    <img src="images/shipping-icon/4.png" alt="Shipping Icon" />
                  </div>
                  <div className="shipping-text">
                    <h2>24/7 Центр помощи</h2>
                    <p>
                      Есть вопрос? Позвоните специалисту или пообщайтесь онлайн.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="footer-static-middle">
        <Container>
          <div className="footer-logo-wrap">
            <Row>
              <Col lg={4} md={6}>
                <div className="footer-logo">
                  <img src="./images/logo.png" alt="Footer Logo" />
                </div>
                <ul className="des">
                  <li>
                    <span>Адрес: </span>
                    Нөкис, Қарақалпақстан Республикасы
                  </li>
                  <li>
                    <span>Телефон: </span>
                    <a href="#">(+998) 362 36 21</a>
                  </li>
                  <li>
                    <span>Email: </span>
                    <a href="mailto://a.eshbaev1@gmail.com">
                      a.eshbaev1@gmail.com
                    </a>
                  </li>
                </ul>
              </Col>
              <Col lg={2} md={3} sm={6}>
                <div className="footer-block">
                  <h3 className="footer-block-title">Продукт</h3>
                  <ul>
                    <li>
                      <a href="#">Цены падают</a>
                    </li>
                    <li>
                      <a href="#">Новые продукты</a>
                    </li>
                    <li>
                      <a href="#">Лучшие продажи</a>
                    </li>
                    <li>
                      <a href="#">Свяжитесь с нами</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={2} md={3} sm={6}>
                <div className="footer-block">
                  <h3 className="footer-block-title">Наша компания</h3>
                  <ul>
                    <li>
                      <a href="#">Доставка</a>
                    </li>
                    <li>
                      <a href="#">Уведомление</a>
                    </li>
                    <li>
                      <a href="#">О нас</a>
                    </li>
                    <li>
                      <a href="#">Свяжитесь с нами</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={4}>
                <div className="footer-block">
                  <h3 className="footer-block-title">Подписывайтесь на нас</h3>
                  <ul className="social-link">
                    <li className="twitter">
                      <a
                        href="https://twitter.com/"
                        data-toggle="tooltip"
                        target="_blank"
                        title="Twitter"
                      >
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li className="google-plus">
                      <a
                        href="https://www.plus.google.com/discover"
                        data-toggle="tooltip"
                        target="_blank"
                        title="Google Plus"
                      >
                        <span className="icon-google"></span>
                      </a>
                    </li>
                    <li className="facebook">
                      <a
                        href="https://www.facebook.com/"
                        data-toggle="tooltip"
                        target="_blank"
                        title="Facebook"
                      >
                        <span className="icon-facebook"></span>
                      </a>
                    </li>
                    <li className="youtube">
                      <a
                        href="https://www.youtube.com/"
                        data-toggle="tooltip"
                        target="_blank"
                        title="Youtube"
                      >
                        <span className="icon-youtube-play"></span>
                      </a>
                    </li>
                    <li className="instagram">
                      <a
                        href="https://www.instagram.com/"
                        data-toggle="tooltip"
                        target="_blank"
                        title="Instagram"
                      >
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-newsletter">
                  <h4>Подпишитесь на рассылку новостей</h4>
                  <form
                    action="#"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="footer-subscribe-form validate"
                    target="_blank"
                  >
                    <div id="mc_embed_signup_scroll">
                      <div
                        id="mc-form"
                        className="mc-form subscribe-form form-group"
                      >
                        <input
                          id="mc-email"
                          type="email"
                          placeholder="Введите e-mail..."
                        />
                        <button className="btn" id="mc-submit">
                          Подписаться
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
