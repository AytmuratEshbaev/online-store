import { Dialog, DialogTitle, DialogContent, Box, TextField, Select, MenuItem, DialogActions, Button } from "@mui/material"
import { useForm, SubmitHandler } from 'react-hook-form';
import { INewProductForm, INewProduct } from "../../../models/IProduct";
import { productAPI } from "../../../services/ProductService";
import { toast } from 'react-toastify';
import { categoryAPI } from "../../../services/CategoryService";
import { ICategory } from "../../../models/ICategory";
import uuid from 'react-uuid';



type Props = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    open: boolean
}

const NewProductModal = ({ setOpen, open }: Props) => {
    const { register, handleSubmit, reset } = useForm<INewProductForm>();
    const [createProduct, { }] = productAPI.useAddNewProductMutation();
    const { data: categories, isLoading } = categoryAPI.useFetchAllCategoriesQuery(10);

    const createProductData = async (data: INewProductForm) => {
        const newProduct: INewProduct = {
            product: {
                name: data.name,
                description: data.description,
                quantity: data.quantity,
                discount: data.discount,
                price: data.price,
                category_id: data.category_id
            },
            product_images: [
                {
                    image_path: data.image_path
                }
            ]
        };

        await createProduct(newProduct)
            .unwrap()
            .then(response => {
                toast.success("Product added successfully!", { position: toast.POSITION.TOP_RIGHT, toastId: 'product' });
            })
            .catch(error => toast.error(`${error.data.detail}`, {
                position: toast.POSITION.TOP_RIGHT,
                toastId: 'product'
            }))
    }

    const onSubmit: SubmitHandler<INewProductForm> = (data) => {
        createProductData(data);
        setOpen(false)
        reset();
    };

    return (
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md">
            <DialogTitle sx={{ pb: 0 }}>New product</DialogTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
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
                                sx={{ minWidth: "200px", margin: "8px 0 8px 8px" }}
                                defaultValue="mobile"
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
        </Dialog>
    )
}

export default NewProductModal;