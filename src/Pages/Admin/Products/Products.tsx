import { ToastContainer } from "react-toastify";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { Search, StyledInputBase, SearchIconWrapper } from "../AdminStyles";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ProductsContainer from "./ProductsContainer"
import { useState } from "react";
import NewProductModal from "./NewProductModal";


const Products = () => {
    const [openCreateModal, setOpenCreateModal] = useState(false);


    return (
        <div className="products-admin">
            <ToastContainer containerId='product' />
            <Typography variant="h5" component="h1" p={2}>Products</Typography>
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
                        onClick = {() => setOpenCreateModal(true)}
                    >
                        New
                    </Button>
                </div>
            </Stack>
            <ProductsContainer />
            <NewProductModal open={openCreateModal} setOpen={setOpenCreateModal} />
        </div>
    )
}

export default Products;