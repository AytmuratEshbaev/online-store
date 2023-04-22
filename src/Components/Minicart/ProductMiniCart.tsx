import { IOrderDetail } from "../../models/IOrder"
import { productAPI } from "../../services/ProductService";
import { CircularProgress } from '@mui/material';
import { cartSlice } from "../../store/reducers/CartSlice";
import { useAppDispatch } from "../../hooks/redux";

type Props = {
    order: IOrderDetail;
}

const ProductMiniCart = ({ order }: Props) => {
    const { data: product, isLoading } = productAPI.useFetchSingleProductQuery(order.product_id);
    const {delProduct} = cartSlice.actions;
    const dispatch = useAppDispatch();

    return (
        isLoading
            ? <CircularProgress
                color="inherit"
                sx={{ position: "absolute", top: "45%", left: "60%" }
                } />
            : 
            <li key={order.product_id}>
                <a href="#" className="minicart-product-image">
                    <img src={product?.images[0].image_path} alt="cart products" />
                </a>
                <div className="minicart-product-details">
                    <h6>{product?.name}</h6>
                    <span>{`$ ${order.price} x ${order.quantity}`}</span>
                </div>
                <button className="close" title="Remove" onClick={() => dispatch(delProduct(order.product_id))}>
                    <i className="icon-close"></i>
                </button>
            </li>
    )
}

export default ProductMiniCart;