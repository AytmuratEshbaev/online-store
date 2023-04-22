import { useAppSelector } from "../../hooks/redux";
import { IOrderDetail } from "../../models/IOrder";
import "./Minicart.css";
import ProductMiniCart from "./ProductMiniCart";
import { Link } from "react-router-dom";

function Minicart() {
  const orders = useAppSelector((state) => state.cartReducer.product);
  const summa = orders.reduce((sum, order: IOrderDetail) => sum += order.price * order.quantity, 0);

  return (
    <div className="minicart">
      <ul className="minicart-product-list">
        {orders.map((product: IOrderDetail) =>
          <ProductMiniCart order={product} />
        )}
      </ul>
      <p className="minicart-total">
        Сумма: <span>${summa}</span>
      </p>
      <div className="minicart-button">
        <Link to='cart' className="li-button li-button-fullwidth li-button-dark">
          <span>Корзина</span>
        </Link>
      </div>
    </div>
  );
}

export default Minicart;
