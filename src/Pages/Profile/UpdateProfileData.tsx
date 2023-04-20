import React from "react";
import {TextField, Dialog, DialogActions, DialogContent, DialogTitle, Box, Button} from '@mui/material'
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { IUserFormInput } from "../../models/IUserFormInput";
import { userAPI } from "../../services/UserService";
import { IUser } from "../../models/IUser";
import { toast } from 'react-toastify';

type Props = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    open: boolean,
    user: IUser | undefined
}




const UpdateProfileData = ({setOpen, open,user}: Props) => {
  const userID = user?.id;

  const [updateUser, { }] = userAPI.useUpdateUserMutation();

  const { register, handleSubmit, reset } = useForm<IUserFormInput>();

  const onSubmit: SubmitHandler<IUserFormInput> = (data) => {
    handleUpdate(data);
    setOpen(false);
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
          toast.success("Profile edited successfully!", { position: toast.POSITION.TOP_RIGHT, toastId: 'updateProfile' });
          console.log(updatingUser)
        })
        .catch(error => toast.error(`${error.data.detail}`, {
          position: toast.POSITION.TOP_RIGHT,
          toastId: 'updateProfile'
        }))
    }
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md">
      <DialogTitle sx={{ pb: 0 }}>Update user</DialogTitle>
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
        </DialogContent>
        <DialogActions sx={{ marginTop: '20px' }}>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default UpdateProfileData;
