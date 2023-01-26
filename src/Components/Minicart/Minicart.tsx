import "./Minicart.css";

function Minicart() {
  return (
    <div className="minicart">
      <ul className="minicart-product-list">
        <li>
          <a href="#" className="minicart-product-image">
            <img src="images/product/small-size/5.jpg" alt="cart products" />
          </a>
          <div className="minicart-product-details">
            <h6>
              <a href="#">Колонка</a>
            </h6>
            <span>£40 x 1</span>
          </div>
          <button className="close" title="Remove">
            <i className="icon-close"></i>
          </button>
        </li>

      </ul>
      <p className="minicart-total">
        Сумма: <span>$80.00</span>
      </p>
      <div className="minicart-button">
        <a href="#" className="li-button li-button-fullwidth li-button-dark">
          <span>Корзина</span>
        </a>
        <a href="#" className="li-button li-button-fullwidth">
          <span>Checkout</span>
        </a>
      </div>
    </div>
  );
}

export default Minicart;
