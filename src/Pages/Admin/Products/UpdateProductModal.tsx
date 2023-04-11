import { Dialog, DialogTitle, DialogContent, Box, TextField, Select, MenuItem, DialogActions, Button } from "@mui/material"
import { useForm, SubmitHandler } from 'react-hook-form';
import { INewProductForm, IUpdateProduct } from "../../../models/IProduct";
import { productAPI } from "../../../services/ProductService";
import { toast } from 'react-toastify';
import { categoryAPI } from "../../../services/CategoryService";
import { ICategory } from "../../../models/ICategory";
import uuid from 'react-uuid';
import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { minHeight } from "@mui/system";


type Props = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    open: boolean,
    id: number
}

const UpdateProductModal = ({ setOpen, open, id }: Props) => {
    const { register, handleSubmit, reset } = useForm<INewProductForm>();
    const [update] = productAPI.useUpdateProductMutation();
    const { data: categories, isLoading } = categoryAPI.useFetchAllCategoriesQuery(10);
    const { data: product, isLoading: isLoadingProductData } = productAPI.useFetchSingleProductQuery(id);

    useEffect(() => {
        let defaultValues: any = {};
        defaultValues.name = product?.name;
        defaultValues.price = product?.price;
        defaultValues.quantity = product?.quantity;
        defaultValues.description = product?.description;
        defaultValues.discount = product?.discount;
        defaultValues.image_path = product?.images[0].image_path;
        defaultValues.category_id = product?.category.id;
        reset({ ...defaultValues });
    }, [])
    const updateProductData = async (data: INewProductForm) => {
        const updateProduct: IUpdateProduct = {
            name: data.name,
            description: data.description,
            quantity: data.quantity,
            discount: data.discount,
            price: data.price,
            category_id: data.category_id
        };

        await update({
            id,
            product: updateProduct
        })
            .unwrap()
            .then(response => {
                toast.success("Product updated successfully!", { position: toast.POSITION.TOP_RIGHT, toastId: 'product' });
            })
            .catch(error => toast.error(`${error.data.detail}`, {
                position: toast.POSITION.TOP_RIGHT,
                toastId: 'product'
            }))
    }

    const onSubmit: SubmitHandler<INewProductForm> = (data) => {
        updateProductData(data);
        setOpen(false)
        reset();
    };

    return (
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" style={{ minHeight: 300, minWidth: 300 }}>
            <DialogTitle sx={{ pb: 0 }}>Update product</DialogTitle>
            {
                isLoadingProductData
                    ? <CircularProgress
                        color="inherit"
                        sx={{ position: "absolute", top: "45%", left: "60%" }}
                    />
                    : <form onSubmit={handleSubmit(onSubmit)}>
                        <DialogContent>
                            <Box
                                component="form"
                                sx={{
                                    "& .MuiTextField-root": { m: 1, width: "35ch" },
                                }}
                            >
                                <div>
                                    <TextField
                                        label="Название"
                                        variant="outlined"
                                        {...register("name", { required: true })}
                                    />
                                    <TextField
                                        id="outlined-password-input"
                                        label="Описание"
                                        type="text"
                                        {...register("description", { required: true })}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        label="Цена"
                                        variant="outlined"
                                        type="number"
                                        {...register("price")}
                                    />
                                    <TextField
                                        label="Количество"
                                        variant="outlined"
                                        type='number'
                                        {...register("quantity")}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="outlined-url-input"
                                        label="Ссылка на фото"
                                        type="url"
                                        {...register("image_path", { required: true })}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="outlined-tel-input"
                                        label="Дисконт"
                                        type="number"
                                        {...register("discount", { required: true })}
                                    />
                                    <Select
                                        labelId="select-medium"
                                        id="select-medium"
                                        label="Категория"
                                        defaultValue={product?.id}
                                        sx={{ minWidth: "200px", margin: "8px 0 8px 8px" }}
                                        {...register("category_id", { required: true })}

                                    >
                                        {isLoading ? <MenuItem value={-1}>None</MenuItem>
                                            : categories?.map((category: ICategory) =>
                                                category.id ? <MenuItem value={category.id} key={uuid()}>{category.name}</MenuItem>
                                                    : null
                                            )}
                                    </Select>
                                </div>
                            </Box>
                        </DialogContent>
                        <DialogActions sx={{ pt: 0 }}>
                            <Button onClick={() => setOpen(false)}>Cancel</Button>
                            <Button type="submit">Submit</Button>
                        </DialogActions>
                    </form>
            }

        </Dialog>
    )
}

export default UpdateProductModal;