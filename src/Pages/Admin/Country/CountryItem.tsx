import { FC } from 'react';
import Tooltip from "@mui/material/Tooltip";
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { ICountry } from '../../../models/ICountry';
import { countryAPI } from '../../../services/CountryService';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import UpdateCountryModal from './UpdateCountry';
import { countrySlice } from '../../../store/reducers/CountrySlice';


interface CountryItemProps {
    country: ICountry;
}

const CountryItem: FC<CountryItemProps> = ({ country }) => {
    const [deleteCountry, { }] = countryAPI.useDeleteCountryMutation();

    const { isOpenUpdateModal, countryIdUpdate } = useAppSelector((state) => state.countryReducer);

    const dispatch = useAppDispatch();
    const { openUpdateModal } = countrySlice.actions;

    const handleOpenModal = () => {
        dispatch(openUpdateModal(country.id))
      }
    return (
        <TableRow hover role="checkbox" tabIndex={-1} >
            <TableCell>{country.id}</TableCell>
            <TableCell>{country.country_name}</TableCell>
            <TableCell className='control'>
                <ButtonGroup variant="text" aria-label="contained button group">
                    <Tooltip title="Edit">
                        <IconButton color="secondary" 
                        onClick={handleOpenModal}>
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <IconButton
                            style={{ color: "red" }}
                            onClick={() => deleteCountry(country)}
                        >
                            <DeleteOutlineOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </ButtonGroup>
            </TableCell>
            {isOpenUpdateModal && country.id === countryIdUpdate ? <UpdateCountryModal /> : null}
        </TableRow>
    )
}

export default CountryItem;