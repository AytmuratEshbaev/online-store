import { Dialog, DialogTitle, DialogContent, Box, TextField, Select, MenuItem, DialogActions, Button } from "@mui/material"
import { toast } from 'react-toastify';
import { useState } from 'react'

type Props = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    open: boolean
}


const CheckoutModal = ({ setOpen, open }: Props) => {

    const [defaultAddress, setDefaultAddress] = useState<boolean>(true)
    const [newAddress, setNewAddress] = useState<string>('');
    const changingAdressType = (e: React.FormEvent) => {
        const element = (e.target as HTMLInputElement);
        setDefaultAddress(element.checked)
    }

    const createProductData = async () => {
        let address = defaultAddress ? "asdsa" : newAddress;
        
       const data = {
        address
       }

        await createProduct(data)
            .unwrap()
            .then(response => {
                toast.success("Product added successfully!", { position: toast.POSITION.TOP_RIGHT, toastId: 'product' });
            })
            .catch(error => toast.error(`${error.data.detail}`, {
                position: toast.POSITION.TOP_RIGHT,
                toastId: 'product'
            }))
    }

    const onSubmit = () => {
        createProductData();
        setOpen(false)
    };

    return (
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md">
            <DialogTitle sx={{ pb: 0 }}>New product</DialogTitle>

            <form onSubmit={onSubmit}>
                <DialogContent>
                    <Box
                        component="form"
                        sx={{
                            "& .MuiTextField-root": { m: 1, width: "35ch" },
                        }}
                    >
                        <label htmlFor="address">По умолчания адресс</label>
                        <input type="checkbox" name="address" id="address" checked={defaultAddress} required={true} onInput={changingAdressType} />
                        <p>Address</p>
                        <input type="text" name="address" id="address" disabled={!defaultAddress} placeholder="input address..." />
                    </Box>
                </DialogContent>
                <DialogActions sx={{ pt: 0 }}>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button type="submit">Submit</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default CheckoutModal;