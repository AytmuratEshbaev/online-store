import "./SingleProduct.css";
import { Col } from "react-bootstrap";
import { IProduct } from "../../models/IProduct";
import { useAppDispatch } from "../../hooks/redux";
import { cartSlice } from "../../store/reducers/CartSlice";

type Props = {
  product: IProduct;
}

function SingleProduct({ product }: Props) {
  const oldPrice = ((product.price * 100) / (100 - product.discount)).toFixed(2);

  const dispatch = useAppDispatch();

  const handleAddCart = (card: IProduct) => dispatch(cartSlice.actions.addProduct(card));


  return (
    <Col lg={12}>
      <div className="single-product-wrap">
        <div className="product-image">
          <a href='#'>
            <img src={product.images[0].image_path} alt={product.name} />
          </a>
          <span className="sticker">New</span>
        </div>
        <div className="product_desc">
          <div className="product_desc_info">
            <div className="product-review">
              <h5 className="manufacturer">
                <a href='#'>Online Store</a>
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
              <a className="product_name" href={'#'}>
                {product.name}
              </a>
            </h4>
            <div className="price-box">
              <span
                className={`new-price ${product.discount !== 0 ? "new-price-2" : null
                  }`}
              >
                ${product.price}
              </span>
              {product.discount !== 0 ? (
                <>
                  <span className="old-price">${oldPrice}</span>
                  <span className="discount-percentage">
                    -{product.discount}%
                  </span>
                </>
              ) : null}
            </div>
          </div>
          <div className="add-actions">
            <ul className="add-actions-link">
              <li className="add-cart active">
                <button onClick={() => handleAddCart(product)}>Add to a cart</button>
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
