import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { countryAPI } from '../../../services/CountryService';
import { toast } from 'react-toastify';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { categorySlice } from '../../../store/reducers/CategorySlice';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from 'react';
import { categoryAPI } from '../../../services/CategoryService';
import { ICategory, INewCategory } from '../../../models/ICategory';


export default function CreateCategoryModal() {
    const dispatch = useAppDispatch();
    const [isSubCategory, setIsSubCategory] = React.useState(false);

    const handleChangeCategoryType = () => {
        setIsSubCategory(!isSubCategory);
    }
    const isOpenCreateModal = useAppSelector((state) => state.categoryReducer.isOpenCreateModal)

    const { closeCreateModal } = categorySlice.actions;
    const handleClose = () => {
        dispatch(closeCreateModal());
    }
    const { data: categories, isLoading } =
        categoryAPI.useFetchAllCategoriesQuery(100);

    const [createCategory, { }] = categoryAPI.useCreateCategoryMutation();

    const { register, handleSubmit, reset } = useForm<INewCategory>();

    const onSubmit: SubmitHandler<INewCategory> = (data) => {
        handleCreate(data);
        dispatch(closeCreateModal());
        reset();
    };

    const handleCreate = async (data: INewCategory) => {
        const newCategory: INewCategory = {
            name: data.name,
            parent_category_id: data.parent_category_id ? data.parent_category_id : null
        };

        await createCategory(newCategory)
            .unwrap()
            .then(response => toast.success('Category added successfully!', { position: toast.POSITION.TOP_RIGHT, toastId: 'category' }))
            .catch((error) => toast.error(`${error.data.detail}`, { position: toast.POSITION.TOP_RIGHT, toastId: 'category' }))
    };
    return (
        <div>
            <Dialog open={isOpenCreateModal} onClose={handleClose}>
                <DialogTitle>New Category</DialogTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="category_name"
                            label="Category name"
                            type="text"
                            fullWidth
                            variant="standard"
                            {...register("name", { required: true })}
                        />
                        <FormControlLabel control={<Checkbox value={isSubCategory} onChange={handleChangeCategoryType} />} label="Subcategory" />
                        <div>
                            <FormControl sx={{ m: 1, minWidth: 200 }} disabled={!isSubCategory}>
                                <InputLabel id="demo-simple-select-autowidth-label">Parent category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    autoWidth
                                    label="Age"
                                    {...register('parent_category_id')}
                                >
                                    {isLoading
                                        ? <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        : categories?.map((category: ICategory, i: number) => <MenuItem value={category.id}>{category.name}</MenuItem>
                                        )
                                    }
                                </Select>
                            </FormControl>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type='submit'>Submit</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}