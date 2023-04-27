import { Dialog, DialogTitle, DialogContent, Box, TextField, Select, MenuItem, DialogActions, Button } from "@mui/material"
import { toast } from 'react-toastify';
import { useState } from 'react'
import { orderAPI } from "../../services/OrderService";
import { Cookies } from "react-cookie";
import jwtDecode from "jwt-decode";
import { userAPI } from "../../services/UserService";
import { IUser } from "../../models/IUser";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { cartSlice } from "../../store/reducers/CartSlice";
import { useNavigate } from "react-router-dom";


type Props = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    open: boolean
}


const CheckoutModal = ({ setOpen, open }: Props) => {
    const cookie = new Cookies();
    const decode: {
        access_token: string,
        sub: string,
        is_admin: number
    } = jwtDecode(cookie.get('token'));

    const { data: users, isLoading } = userAPI.useFetchAllUsersQuery(10);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const resetState = cartSlice.actions.resetState;
    let currentUser = users?.find((user: IUser) => user.username === decode.sub);
    const [setOrder, { }] = orderAPI.useSetOrderMutation();
    const { product } = useAppSelector((state) => state.cartReducer)
    const createOrder = async () => {

        const data = {
            order: {
                user_id: currentUser ? currentUser.id : 0,
                address_id: currentUser ? currentUser.addresses[0].id : 0,
                order_status_id: 1,
                order_date: new Date().toLocaleDateString().split('.').reverse().join('-')
            },
            order_details: product
        }

        await setOrder(data)
            .unwrap()
            .then(response => {
                toast.success("Спасибо за покупку!", { position: toast.POSITION.TOP_RIGHT, toastId: 'order' });
            })
            .catch((error: any) => toast.error(`${error.data.detail}`, {
                position: toast.POSITION.TOP_RIGHT,
                toastId: 'order'
            }))
    }

    const onSubmit = () => {
        createOrder();
        setOpen(false)
        dispatch(resetState());
        navigate('/');
    };

    return (
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md">
            <DialogTitle sx={{ pb: 0 }}>New Order</DialogTitle>

                <DialogContent>
                    <Box
                        component="form"
                        sx={{
                            "& .MuiTextField-root": { m: 1, width: "35ch" },
                        }}
                    >
                        <p>Adress: {`${currentUser?.addresses[0].city}, ${currentUser?.addresses[0].street_address}`}</p>
                    </Box>
                </DialogContent>
                <DialogActions sx={{ pt: 0 }}>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={onSubmit}>Submit</Button>
                </DialogActions>
        </Dialog>
    )
}

export default CheckoutModal;