import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { Select } from "@mui/material";
import { FC } from "react";
import { countryAPI } from "../../../services/CountryService";
import Button from "@mui/material/Button";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { userSlice } from "../../../store/reducers/UserSlice";
import { INewUser } from "../../../models/INewUser";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { IUserFormInput } from "../../../models/IUserFormInput";
import { userAPI } from "../../../services/UserService";

const UserModal: FC = () => {
  const { data: countries, isLoading } =
    countryAPI.useFetchAllCountriesQuery(10);
  const dispatch = useAppDispatch();

  const { closeModal } = userSlice.actions;

  const handleClose = () => {
    dispatch(closeModal());
  };
  const isOpen = useAppSelector((state) => state.userReducer.isOpen);

  const [createUser, {}] = userAPI.useCreateUserMutation();

  const { register, handleSubmit, reset } = useForm<IUserFormInput>();

  const onSubmit: SubmitHandler<IUserFormInput> = (data) => {
    handleCreate(data);
    dispatch(closeModal());
    reset();
  };

  const handleCreate = async (data: IUserFormInput) => {
    const newUser: INewUser = {
      user: {
        username: data.username,
        password: data.password,
      },
      user_detail: {
        first_name: data.first_name,
        last_name: data.last_name,
        user_image: data.user_image,
      },
      user_phones: [
        {
          phone_number: data.phone_number,
          type: data.type,
        },
      ],
      user_address: {
        street_address: data.street_address,
        postal_code: data.postal_code,
        city: data.city,
        country_id: data.country_id,
      },
    };
    await createUser(newUser);
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth="md">
      <DialogTitle sx={{ pb: 0 }}>New user</DialogTitle>
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
                label="Username"
                variant="outlined"
                {...register("username", { required: true })}
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                {...register("password", { required: true })}
              />
            </div>
            <div>
              <TextField
                label="First Name"
                variant="outlined"
                {...register("first_name")}
              />
              <TextField
                label="Last Name"
                variant="outlined"
                {...register("last_name")}
              />
            </div>
            <div>
              <TextField
                id="outlined-url-input"
                label="Image Url"
                type="url"
                {...register("user_image", { required: true })}
              />
            </div>
            <div>
              <TextField
                id="outlined-tel-input"
                label="Phone number"
                type="tel"
                {...register("phone_number", { required: true })}
              />
              <Select
                labelId="select-medium"
                id="select-medium"
                label="phone"
                sx={{ minWidth: "200px", margin: "8px 0 8px 8px" }}
                defaultValue="mobile"
                {...register("type", { required: true })}
              >
                <MenuItem value={"mobile"}>Mobile</MenuItem>
                <MenuItem value={"home"}>Home</MenuItem>
                <MenuItem value={"work"}>Work</MenuItem>
              </Select>
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="City"
                variant="outlined"
                {...register("city", { required: true })}
              />
              <TextField
                id="outlined-number-input"
                label="Postcode"
                type="number"
                {...register("postal_code", { required: true })}
              />
            </div>
            <div>
              <TextField
                label="Street Adress"
                variant="outlined"
                {...register("street_address", { required: true })}
              />
              <Select
                labelId="select-medium"
                id="select-medium"
                label="country"
                sx={{ minWidth: "200px", margin: "7px 0 7px 8px" }}
                defaultValue={isLoading ? "" : countries && countries[0].id}
                {...register("country_id", { required: true })}
              >
                {isLoading ? (
                  <MenuItem>No option</MenuItem>
                ) : (
                  countries &&
                  countries.map((country: any, index: number) => (
                    <MenuItem value={country.id} key={country.id}>
                      {country.country_name}
                    </MenuItem>
                  ))
                )}
              </Select>
            </div>
          </Box>
        </DialogContent>
        <DialogActions sx={{ pt: 0 }}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default UserModal;
