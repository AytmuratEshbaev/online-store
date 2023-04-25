import { useAppSelector } from "../../hooks/redux";
import { IOrderDetail } from "../../models/IOrder";
import ShoppingProduct from "./ShoppingProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../index.css';
import { Button, Typography } from "@mui/material";
import Breadcrumb from "../../Components/Breadcrumb";
import HeaderBottom from "../../Components/HeaderBottom";
import HeaderMiddle from "../../Components/HeaderMiddle";
import HeaderTop from "../../Components/HeaderTop";

const ShoppingCart = () => {
    const orders = useAppSelector((state) => state.cartReducer.product);
    const summa = orders.reduce((sum, order) => sum + order.price * order.quantity, 0);
    return (
        <>
            <header>
                <HeaderTop />
                <HeaderMiddle />
                <HeaderBottom />
            </header>
            <Breadcrumb />
            <div className="Shopping-cart-area pt-60 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="table-content table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="li-product-remove">Удалять</th>
                                            <th className="li-product-thumbnail">Изображение</th>
                                            <th className="cart-product-name">Продукт</th>
                                            <th className="li-product-price">Цена за единицу товара</th>
                                            <th className="li-product-quantity">Количество</th>
                                            <th className="li-product-subtotal">Общий</th>
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
                            <div className="control" style={{ margin: '15px 0 30px', display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography variant="h6">
                                Итого: <span style={{ fontWeight: 600 }}>${summa}</span>
                                </Typography>
                                <Button style={{ fontWeight: '500', fontSize: '16px', letterSpacing: '1px' }}>Заказать</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoppingCart;