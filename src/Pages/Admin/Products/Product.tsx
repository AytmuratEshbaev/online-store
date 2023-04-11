import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { IProduct } from "../../../models/IProduct";
import ButtonGroup from "@mui/material/ButtonGroup";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import UpdateProductModal from "./UpdateProductModal";
import { productAPI } from "../../../services/ProductService";
import { toast } from 'react-toastify';

type Props = {
    product: IProduct;
}


const Product = (props: Props) => {
    const [openUpdateModal, setOpenUpdateModal] = useState(false);

    const [deleteProduct, { }] = productAPI.useDeleteProductMutation();
    const removeProduct = async (id: number) => {
        await deleteProduct(id)
            .unwrap()
            .then(response => {
                toast.success("Product remove successfully!", { position: toast.POSITION.TOP_RIGHT, toastId: 'product' });
            })
            .catch(error => toast.error(`${error.data.detail}`, {
                position: toast.POSITION.TOP_RIGHT,
                toastId: 'product'
            }))
    }

    const { product } = props;
    return (
        <TableRow hover role="checkbox" tabIndex={-1}>
            <TableCell>
                {product.name}
            </TableCell>
            <TableCell>
                <img src={product.images[0].image_path} alt={product.name} />
            </TableCell>
            <TableCell>
                {product.description}
            </TableCell>
            <TableCell>
                {product.category.name}
            </TableCell>
            <TableCell>
                {product.price}
            </TableCell>
            <TableCell>
                {product.quantity}
            </TableCell>
            <TableCell>
                {product.discount}
            </TableCell>
            <TableCell>
                <ButtonGroup variant="text" aria-label="contained button group">
                    <Tooltip title="Edit">
                        <IconButton color="secondary" onClick={() => setOpenUpdateModal(true)}
                        >
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <IconButton
                            style={{ color: "red" }} onClick = {() => removeProduct(product.id)}
                        >
                            <DeleteOutlineOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </ButtonGroup>
            </TableCell>
            {openUpdateModal ?
                <UpdateProductModal open={openUpdateModal} setOpen={setOpenUpdateModal} id={product.id} /> : null}
        </TableRow>
    )
}

export default Product;