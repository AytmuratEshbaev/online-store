import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import { FC } from "react";
import Button from "@mui/material/Button";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { userSlice } from "../../../store/reducers/UserSlice";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { IUserFormInput } from "../../../models/IUserFormInput";
import { userAPI } from "../../../services/UserService";
import { IUser } from "../../../models/IUser";
import { toast } from 'react-toastify';

const UpdateUser: FC = () => {
  const userID = useAppSelector((state) => state.userReducer.userIdUpdate);
  const { data: user, isLoading: isLoadingUserData } = userAPI.useFetchSingleUserQuery(userID);

  const dispatch = useAppDispatch();

  const { closeUpdateModal } = userSlice.actions;

  const handleClose = () => {
    dispatch(closeUpdateModal());
  };
  const isOpenUpdateModal = useAppSelector((state) => state.userReducer.isOpenUpdateModal);

  const [updateUser, { }] = userAPI.useUpdateUserMutation();

  const { register, handleSubmit, reset } = useForm<IUserFormInput>();

  const onSubmit: SubmitHandler<IUserFormInput> = (data) => {
    handleUpdate(data);
    dispatch(closeUpdateModal());
    reset();
  };

  const handleUpdate = async (data: IUserFormInput) => {
    if (user) {
      const updatingUser: IUser = {
        id: user?.id,
        username: data.username,
        is_admin: user?.is_admin,
        user_detail: {
          first_name: data.first_name,
          last_name: data.last_name,
          user_image: data.user_image
        },
        phone_numbers: user?.phone_numbers,
        addresses: user?.addresses
      }
      await updateUser(updatingUser)
        .unwrap()
        .then(response => {
          toast.success("User edited successfully!", { position: toast.POSITION.TOP_RIGHT, toastId: 'user' });
        })
        .catch(error => toast.error(`${error.data.detail}`, {
          position: toast.POSITION.TOP_RIGHT,
          toastId: 'user'
        }))
    }
  };

  return (
    <Dialog open={isOpenUpdateModal} onClose={handleClose} maxWidth="md">
      <DialogTitle sx={{ pb: 0 }}>Update user</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          {isLoadingUserData
            ? <CircularProgress
              color="inherit"
              sx={{ position: "absolute", top: "50%", left: "50%", transform: 'translate(-50%,-50%)' }}
            />
            : <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "35ch" },
              }}
            >
              <div>
                <TextField
                  label="Username"
                  variant="outlined"
                  defaultValue={user?.username}
                  {...register("username", { required: true })}
                />
              </div>
              <div>
                <TextField
                  label="First Name"
                  variant="outlined"
                  defaultValue={user?.user_detail.first_name}
                  {...register("first_name")}
                />
              </div>
              <div>

                <TextField
                  label="Last Name"
                  variant="outlined"
                  defaultValue={user?.user_detail.last_name}
                  {...register("last_name")}
                />
              </div>
              <div>
                <TextField
                  id="outlined-url-input"
                  label="Image Url"
                  type="url"
                  defaultValue={user?.user_detail.user_image}
                  {...register("user_image", { required: true })}
                />
              </div>
            </Box>
          }
        </DialogContent>
        <DialogActions sx={{ marginTop: '20px' }}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default UpdateUser;
