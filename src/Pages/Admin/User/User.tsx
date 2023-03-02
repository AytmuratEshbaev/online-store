import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import { Search, StyledInputBase, SearchIconWrapper } from "../AdminStyles";
import Typography from "@mui/material/Typography";
import UserDataTable from "./UsersContainer";
import UserModal from "./UserModal";
import { useAppDispatch } from "../../../hooks/redux";
import { userSlice } from "../../../store/reducers/UserSlice";

function User() {
  const dispatch = useAppDispatch();
  const { openModal } = userSlice.actions;
  const handleClickOpen = () => {
    dispatch(openModal());
  };
  
  return (
    <div className="users-admin">
      <Typography variant="h5" component="h1" p={2}>
        {" "}
        Users{" "}
      </Typography>
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
            onClick={handleClickOpen}
          >
            New
          </Button>
          <UserModal/>
        </div>
      </Stack>
      <UserDataTable />
    </div>
  );
}

export default User;
