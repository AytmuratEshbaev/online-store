import { Container, Row, Col } from "react-bootstrap";
import SingleProduct from "../SingleProduct";
import "./ProductArea.css";
import Slider from "react-slick";
import uuid from 'react-uuid';
import { productAPI } from "../../services/ProductService";
import { IProduct } from "../../models/IProduct";


function ProductArea() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const { data: products, isLoading } = productAPI.useFetchAllProductsQuery();

  return (
    <div className="product-area">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="li-product-tab">
              <ul className="nav li-product-menu">
                <li>
                  <a
                    className="active"
                    data-toggle="tab"
                    href="#li-new-product"
                  >
                    <span>New Arrival</span>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <div className="tab-content">
          <div id="li-new-product" className="tab-pane active show" role="tabpanel">
            <Row>
              <Slider className="product-active" {...settings}>
                {products?.map((product: IProduct) => (
                  <SingleProduct product={product} key={uuid()} />
                ))}
              </Slider>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductArea;
