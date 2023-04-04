import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import { Search, StyledInputBase, SearchIconWrapper } from "../AdminStyles";
import Typography from "@mui/material/Typography";
import { useAppDispatch } from "../../../hooks/redux";
import CountryContainer from "./CountriesContainer";
import './Country.css';
import { countrySlice } from '../../../store/reducers/CountrySlice';
import CreateCountryModal from "./CreateCountryModal";
import { ToastContainer } from "react-toastify";

function Country() {
    const dispatch = useAppDispatch();

    const openCreateModal = countrySlice.actions.openCreateModal;

    const openCreatingModal = () => {
        dispatch(openCreateModal());
    }

    return (
        <div className="country-admin">
            <ToastContainer containerId='country'/>
            <Typography variant="h5" component="h1" p={2}>Countries</Typography>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                py={1}
                mb={2}
            >
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                    />
                </Search>

                <div>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#333",
                            fontWeight: "bold",
                            "&:hover": {
                                backgroundColor: "#fed700",
                                color: "#fff",
                            },
                        }}
                        startIcon={<AddIcon />}
                        onClick={openCreatingModal}
                    >
                        New
                    </Button>
                </div>
            </Stack>
            <CountryContainer />
            <CreateCountryModal />
        </div>
    );
}

export default Country;
