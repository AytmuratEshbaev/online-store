import { FC } from "react";
import { IUser } from "../../../models/IUser";
import ButtonGroup from "@mui/material/ButtonGroup";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import "./User.css";
import { userAPI } from "../../../services/UserService";
import UserFullDetails from "./UserFullDetails";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { userSlice } from "../../../store/reducers/UserSlice";
import UpdateUser from "./UpdateUser";
import { toast } from 'react-toastify';

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  const [deleteUser, { }] = userAPI.useDeleteUserMutation();

  const dispatch = useAppDispatch();
  const { openMoreInformation, openUpdateModal } = userSlice.actions;
  const handleClickOpen = () => {
    dispatch(openMoreInformation(user.id));
  };

  const handleOpenModal = () => {
    dispatch(openUpdateModal(user.id))
  }
  const removeUser = async (user: IUser) => {
    await deleteUser(user)
      .unwrap()
      .then(response => {
        toast.success("User remove successfully!", { position: toast.POSITION.TOP_RIGHT, toastId: 'user' });
      })
      .catch(error => toast.error(`${error.data.detail}`, {
        position: toast.POSITION.TOP_RIGHT,
        toastId: 'user'
      }))
  }
  
  const isOpenMore = useAppSelector((state) => state.userReducer.isOpenMore);
  const isOpenUpdateModal = useAppSelector((state) => state.userReducer.isOpenUpdateModal);
  const userIdUpdate = useAppSelector((state) => state.userReducer.userIdUpdate);

  return (
    !isOpenMore
      ?
      <TableRow className="user__item">
        <TableCell> {user.username} </TableCell>
        <TableCell> {user.is_admin ? "admin" : 'user'} </TableCell>
        <TableCell>
          <img
            src={user.user_detail.user_image}
            alt={user.username}
            style={{ maxHeight: "100px" }}
          />
        </TableCell>
        <TableCell> {user.phone_numbers[0].phone_number} </TableCell>
        <TableCell>
          {user.addresses[0].city + "  " + user.addresses[0].street_address}
        </TableCell>
        <TableCell>
          <ButtonGroup variant="text" aria-label="contained button group">
            <Tooltip title="More information">
              <IconButton color="primary"
                onClick={handleClickOpen}
              >
                <ReadMoreIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit">
              <IconButton color="secondary"
                onClick={handleOpenModal}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton
                style={{ color: "red" }}
                onClick={() => removeUser(user)}
              >
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Tooltip>
          </ButtonGroup>
        </TableCell>
        {isOpenUpdateModal && user.id === userIdUpdate ? <UpdateUser /> : null}
      </TableRow>
      : <UserFullDetails />
  );
};

export default UserItem;
