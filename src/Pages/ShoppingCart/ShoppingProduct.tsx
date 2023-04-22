import { IOrderDetail } from "../../models/IOrder"
import { productAPI } from "../../services/ProductService";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../index.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch } from "../../hooks/redux";
import { cartSlice } from "../../store/reducers/CartSlice";
import { Button } from "react-bootstrap";
type Props = {
    order: IOrderDetail;
}

const ShoppingProduct = ({ order }: Props) => {
    const dispatch = useAppDispatch();

    const { decrement, addProduct, delProduct } = cartSlice.actions;
    const { data: product } = productAPI.useFetchSingleProductQuery(order.product_id);
    return (<tr>
        <td className="li-product-remove"><Button onClick={() => dispatch(delProduct(order.product_id))}><CloseIcon /></Button></td>
        <td className="li-product-thumbnail"><a href="#"><img src={product?.images[0].image_path} alt="Li's Product Image" style={{ width: 100 }} /></a></td>
        <td className="li-product-name"><a href="#">{product?.name}</a></td>
        <td className="li-product-price"><span className="amount">${order?.price}</span></td>
        <td className="quantity">
            <label>Quantity</label>
            <div className="cart-plus-minus">
                <input className="cart-plus-minus-box" value={order.quantity} type="text" />
                <Button className="dec qtybutton" onClick={() => dispatch(decrement(order.product_id))}><KeyboardArrowDownIcon /></Button>
                <Button className="inc qtybutton" onClick={product ? () => dispatch(addProduct(product)) : () => console.log("Error")}><KeyboardArrowUpIcon /></Button>
            </div>
        </td>
        <td className="product-subtotal"><span className="amount">${order?.price * order?.quantity}</span></td>
    </tr>)
}

export default ShoppingProduct;