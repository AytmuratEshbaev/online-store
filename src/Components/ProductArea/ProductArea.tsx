import { Container, Row, Col } from "react-bootstrap";
import SingleProduct from "../SingleProduct";
import "./ProductArea.css";
import Slider from "react-slick";
import uuid from 'react-uuid';

const products = {
  new: [
    {
      manufacturer: "Graphic Corner",
      name: "Accusantium dolorem1",
      price: 46.32,
      imgSrc: "images/product/large-size/1.jpg",
      manufacturerUrl: "#",
      productUrl: "#",
      discountPercentage: 8,
    },
    {
      manufacturer: "Graphic Corner",
      name: "Accusantium dolorem1",
      price: 46.32,
      imgSrc: "images/product/large-size/2.jpg",
      manufacturerUrl: "#",
      productUrl: "#",
      discountPercentage: 8,
    },
    {
      manufacturer: "Graphic Corner",
      name: "Accusantium dolorem1",
      price: 46.32,
      imgSrc: "images/product/large-size/3.jpg",
      manufacturerUrl: "#",
      productUrl: "#",
      discountPercentage: 8,
    },
    {
      manufacturer: "Graphic Corner",
      name: "Accusantium dolorem1",
      price: 46.32,
      imgSrc: "images/product/large-size/4.jpg",
      manufacturerUrl: "#",
      productUrl: "#",
      discountPercentage: 8,
    },
    {
      manufacturer: "Graphic Corner",
      name: "Accusantium dolorem1",
      price: 46.32,
      imgSrc: "images/product/large-size/5.jpg",
      manufacturerUrl: "#",
      productUrl: "#",
      discountPercentage: 8,
    },
    {
      manufacturer: "Graphic Corner",
      name: "Accusantium dolorem1",
      price: 46.32,
      imgSrc: "images/product/large-size/6.jpg",
      manufacturerUrl: "#",
      productUrl: "#",
      discountPercentage: 8,
    },
    {
      manufacturer: "Graphic Corner",
      name: "Accusantium dolorem1",
      price: 46.32,
      imgSrc: "images/product/large-size/7.jpg",
      manufacturerUrl: "#",
      productUrl: "#",
      discountPercentage: 8,
    },
    {
      manufacturer: "Graphic Corner",
      name: "Accusantium dolorem1",
      price: 46.32,
      imgSrc: "images/product/large-size/8.jpg",
      manufacturerUrl: "#",
      productUrl: "#",
      discountPercentage: 8,
    },
  ],
  bestSeller: [
    {
      manufacturer: "Graphic Corner",
      name: "Accusantium dolorem1",
      price: 46.32,
      imgSrc: "images/product/large-size/1.jpg",
      manufacturerUrl: "#",
      productUrl: "#",
      discountPercentage: 8,
    },
    {
      manufacturer: "Graphic Corner",
      name: "Accusantium dolorem1",
      price: 46.32,
      imgSrc: "images/product/large-size/2.jpg",
      manufacturerUrl: "#",
      productUrl: "#",
      discountPercentage: 8,
    },
    {
      manufacturer: "Graphic Corner",
      name: "Accusantium dolorem1",
      price: 46.32,
      imgSrc: "images/product/large-size/3.jpg",
      manufacturerUrl: "#",
      productUrl: "#",
      discountPercentage: 8,
    },
    {
      manufacturer: "Graphic Corner",
      name: "Accusantium dolorem1",
      price: 46.32,
      imgSrc: "images/product/large-size/4.jpg",
      manufacturerUrl: "#",
      productUrl: "#",
      discountPercentage: 8,
    },
    {
      manufacturer: "Graphic Corner",
      name: "Accusantium dolorem1",
      price: 46.32,
      imgSrc: "images/product/large-size/5.jpg",
      manufacturerUrl: "#",
      productUrl: "#",
      discountPercentage: 8,
    },
    {
      manufacturer: "Graphic Corner",
      name: "Accusantium dolorem1",
      price: 46.32,
      imgSrc: "images/product/large-size/6.jpg",
      manufacturerUrl: "#",
      productUrl: "#",
      discountPercentage: 8,
    },
    {
      manufacturer: "Graphic Corner",
      name: "Accusantium dolorem1",
      price: 46.32,
      imgSrc: "images/product/large-size/7.jpg",
      manufacturerUrl: "#",
      productUrl: "#",
      discountPercentage: 8,
    },
    {
      manufacturer: "Graphic Corner",
      name: "Accusantium dolorem1",
      price: 46.32,
      imgSrc: "images/product/large-size/8.jpg",
      manufacturerUrl: "#",
      productUrl: "#",
      discountPercentage: 8,
    },
  ],
  featured: [
    {
      manufacturer: "Graphic Corner",
      name: "Accusantium dolorem1",
      price: 46.32,
      imgSrc: "images/product/large-size/1.jpg",
      manufacturerUrl: "#",
      productUrl: "#",
      discountPercentage: 8,
    },
    {
      manufacturer: "Graphic Corner",
      name: "Accusantium dolorem1",
      price: 46.32,
      imgSrc: "images/product/large-size/2.jpg",
      manufacturerUrl: "#",
      productUrl: "#",
      discountPercentage: 8,
    },
    {
      manufacturer: "Graphic Corner",
      name: "Accusantium dolorem1",
      price: 46.32,
      imgSrc: "images/product/large-size/3.jpg",
      manufacturerUrl: "#",
      productUrl: "#",
      discountPercentage: 8,
    },
    {
      manufacturer: "Graphic Corner",
      name: "Accusantium dolorem1",
      price: 46.32,
      imgSrc: "images/product/large-size/4.jpg",
      manufacturerUrl: "#",
      productUrl: "#",
      discountPercentage: 8,
    },
    {
      manufacturer: "Graphic Corner",
      name: "Accusantium dolorem1",
      price: 46.32,
      imgSrc: "images/product/large-size/5.jpg",
      manufacturerUrl: "#",
      productUrl: "#",
      discountPercentage: 8,
    },
    {
      manufacturer: "Graphic Corner",
      name: "Accusantium dolorem1",
      price: 46.32,
      imgSrc: "images/product/large-size/6.jpg",
      manufacturerUrl: "#",
      productUrl: "#",
      discountPercentage: 8,
    },
    {
      manufacturer: "Graphic Corner",
      name: "Accusantium dolorem1",
      price: 46.32,
      imgSrc: "images/product/large-size/7.jpg",
      manufacturerUrl: "#",
      productUrl: "#",
      discountPercentage: 8,
    },
    {
      manufacturer: "Graphic Corner",
      name: "Accusantium dolorem1",
      price: 46.32,
      imgSrc: "images/product/large-size/8.jpg",
      manufacturerUrl: "#",
      productUrl: "#",
      discountPercentage: 8,
    },
  ],
};

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
                <li>
                  <a data-toggle="tab" href="#li-bestseller-product">
                    <span>Bestseller</span>
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#li-featured-product">
                    <span>Featured Products</span>
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
                {products.new.map((product: any) => (
                  <SingleProduct product={product} key={uuid()} />
                ))}
              </Slider>
            </Row>
          </div>
          <div id="li-bestseller-product" className="tab-pane" role="tabpanel">
            <Row>
              <Slider className="product-active" {...settings}>
                {products.new.map((product: any) => (
                  <SingleProduct product={product} key={uuid()} />
                ))}
              </Slider>
            </Row>
          </div>
          <div id="li-featured-product" className="tab-pane" role="tabpanel">
            <Row>
              <Slider className="product-active" {...settings}>
                {products.new.map((product: any) => (
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
