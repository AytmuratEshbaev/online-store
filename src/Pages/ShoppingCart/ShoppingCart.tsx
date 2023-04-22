import { useAppSelector } from "../../hooks/redux";
import { IOrderDetail } from "../../models/IOrder";
import ShoppingProduct from "./ShoppingProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../index.css';
import { Button } from "@mui/material";

const ShoppingCart = () => {
    const orders = useAppSelector((state) => state.cartReducer.product);
    console.log(orders);
    return (
        <div className="Shopping-cart-area pt-60 pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                            <div className="table-content table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="li-product-remove">remove</th>
                                            <th className="li-product-thumbnail">images</th>
                                            <th className="cart-product-name">Product</th>
                                            <th className="li-product-price">Unit Price</th>
                                            <th className="li-product-quantity">Quantity</th>
                                            <th className="li-product-subtotal">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            orders.map((order: IOrderDetail, index: number) =>
                                                <ShoppingProduct order={order} key={index} />)
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <Button>Заказать</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart;