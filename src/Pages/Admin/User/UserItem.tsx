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

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  const [deleteUser, {}] = userAPI.useDeleteUserMutation();
  return (
    <TableRow className="user__item">
      <TableCell> {user.id} </TableCell>
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
            <IconButton color="primary">
              <ReadMoreIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton color="secondary">
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton
              style={{ color: "red" }}
              onClick={() => deleteUser(user)}
            >
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Tooltip>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
};

export default UserItem;
