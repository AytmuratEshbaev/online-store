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
import { ICountry } from '../../../models/ICountry';
import { countryAPI } from '../../../services/CountryService';
import CircularProgress from '@mui/material/CircularProgress';

interface ICountryForm {
    country_name: string
}


export default function UpdateCountryModal() {
    const dispatch = useAppDispatch();

    const isOpenUpdateModal = useAppSelector((state) => state.countryReducer.isOpenUpdateModal)

    const { closeUpdateModal } = countrySlice.actions;
    const handleClose = () => {
        dispatch(closeUpdateModal());
    }

    const countryID = useAppSelector((state) => state.countryReducer.countryIdUpdate);

    const { data: country, isLoading } = countryAPI.useFetchSingleCountryQuery(countryID);

    const [updateCountry, { }] = countryAPI.useUpdateCountryMutation();

    const { register, handleSubmit, reset } = useForm<ICountryForm>();

    const onSubmit: SubmitHandler<ICountryForm> = (data) => {
        handleUpdate(data);
        dispatch(closeUpdateModal());
        reset();
    };

    const handleUpdate = async (data: ICountryForm) => {
        if (country) {
            const updatingData: ICountry = {
                country_name: data.country_name,
                id: country.id
            }
            await updateCountry(updatingData);
        }
    };

    return (
        <div>
            <Dialog open={isOpenUpdateModal} onClose={handleClose}>
                {
                    isLoading
                        ? <CircularProgress
                            color="inherit"
                            sx={{ position: "absolute", top: "50%", left: "50%", transform: 'translate(-50%,-50%)' }}
                        />
                        : <>
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
                                        defaultValue={country?.country_name}
                                        {...register("country_name", { required: true })}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button type='submit'>Save</Button>
                                </DialogActions>
                            </form>
                        </>
                }
            </Dialog>
        </div>
    );
}