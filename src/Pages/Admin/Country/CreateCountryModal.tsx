import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { countrySlice } from '../../../store/reducers/CountrySlice';
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { INewCountry } from '../../../models/ICountry';
import { countryAPI } from '../../../services/CountryService';

interface ICountryForm {
    country_name: string
}


export default function CreateCountryModal() {
    const dispatch = useAppDispatch();


    const isOpenCreateModal = useAppSelector((state) => state.countryReducer.isOpenCreateModal)

    const { closeCreateModal } = countrySlice.actions;
    const handleClose = () => {
        dispatch(closeCreateModal());
    }

    const [createCountry, { }] = countryAPI.useCreateCountryMutation();

    const { register, handleSubmit, reset } = useForm<ICountryForm>();

    const onSubmit: SubmitHandler<ICountryForm> = (data) => {
        handleCreate(data);
        dispatch(closeCreateModal());
        reset();
    };

    const handleCreate = async (data: ICountryForm) => {
        const newCountry: INewCountry = {
            country_name: data.country_name
        };
        await createCountry(newCountry);
    };
    return (
        <div>
            <Dialog open={isOpenCreateModal} onClose={handleClose}>
                <DialogTitle>New Country</DialogTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="country_name"
                            label="Country name"
                            type="text"
                            fullWidth
                            variant="standard"
                            {...register("country_name", { required: true })}
                        />
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