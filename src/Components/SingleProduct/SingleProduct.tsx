import "./SingleProduct.css";
import { Col } from "react-bootstrap";

type Props = {
  product: {
    manufacturer: string;
    name: string;
    price: number;
    imgSrc: string;
    productUrl: string;
    manufacturerUrl: string;
    discountPercentage: number;
  }
};

function SingleProduct(props: Props) {
  const product = props.product;
  const oldPrice = (product.price * 100) / (100 - product.discountPercentage);

  return (
    <Col lg={12}>
      <div className="single-product-wrap">
        <div className="product-image">
          <a href={product.productUrl}>
            <img src={product.imgSrc} alt={product.name} />
          </a>
          <span className="sticker">New</span>
        </div>
        <div className="product_desc">
          <div className="product_desc_info">
            <div className="product-review">
              <h5 className="manufacturer">
                <a href={product.manufacturerUrl}>{product.manufacturer}</a>
              </h5>
              <div className="rating-box">
                <ul className="rating">
                  <li>
                    <i className="icon-star"></i>
                  </li>
                  <li>
                    <i className="icon-star"></i>
                  </li>
                  <li>
                    <i className="icon-star"></i>
                  </li>
                  <li className="no-star">
                    <i className="icon-star"></i>
                  </li>
                  <li className="no-star">
                    <i className="icon-star"></i>
                  </li>
                </ul>
              </div>
            </div>
            <h4>
              <a className="product_name" href={product.productUrl}>
                {product.name}
              </a>
            </h4>
            <div className="price-box">
              <span
                className={`new-price ${
                  product.discountPercentage !== 0 ? "new-price-2" : null
                }`}
              >
                ${product.price}
              </span>
              {product.discountPercentage !== 0 ? (
                <>
                  <span className="old-price">${oldPrice}</span>
                  <span className="discount-percentage">
                    -{product.discountPercentage}%
                  </span>
                </>
              ) : null}
            </div>
          </div>
          <div className="add-actions">
            <ul className="add-actions-link">
              <li className="add-cart active">
                <a href="#">Add to cart</a>
              </li>
              <li>
                <a className="links-details" href="#">
                <i className="icon-heart-o"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="quick view"
                  className="quick-view-btn"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  <i className="icon-eye"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default SingleProduct;
