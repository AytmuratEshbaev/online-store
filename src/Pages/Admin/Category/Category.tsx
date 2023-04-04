import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CategoryContainer from "./CategoryContainer";
import SearchIcon from "@mui/icons-material/Search";
import { Search, StyledInputBase, SearchIconWrapper } from "../AdminStyles";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import CreateCategoryModal from "./CreateCategoryModal";
import { categorySlice } from "../../../store/reducers/CategorySlice";
import { useAppDispatch } from "../../../hooks/redux";
import { ToastContainer } from "react-toastify";


function Category() {
    const dispatch = useAppDispatch();

    const openCreateModal = categorySlice.actions.openCreateModal;

    const openCreatingModal = () => {
        dispatch(openCreateModal());
    }

    return (
        <div className="category-admin">
            <ToastContainer containerId='category' />
            <Typography variant="h5" component="h1" p={2}>Categories</Typography>
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
            <CategoryContainer />
            <CreateCategoryModal />
        </div>
    )
}

export default Category;