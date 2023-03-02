import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import CircularProgress from "@mui/material/CircularProgress";
import { userAPI } from "../../../services/UserService";
import { IUser } from "../../../models/IUser";
import UserItem from "./UserItem";
import "./User.css";

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  maxWidth?: number;
  maxheight?: number;
}

const columns: readonly Column[] = [
  { id: "id", label: "Id" },
  { id: "username", label: "Username" },
  { id: "role", label: "Role" },
  { id: "image", label: "Image" },
  { id: "phones", label: "Phones" },
  { id: "adress", label: "Adress" },
  { id: "control", label: "Control" },
];

export default function UserDataTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const { data: users, isLoading } = userAPI.useFetchAllUsersQuery(rowsPerPage);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 600, minHeight: 300 }}>
        <Table stickyHeader aria-label="sticky table" className="users">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ position: "relative" }}>
            {isLoading ? (
              <TableRow>
                <TableCell>
                  <CircularProgress
                    color="inherit"
                    sx={{ position: "absolute", top: "50px", left: "45%" }}
                  />
                </TableCell>
              </TableRow>
            ) : (
              users &&
              users.map((user: IUser, index: number) =>
                index >= page * rowsPerPage &&
                  index < (page + 1) * rowsPerPage ? (
                  <UserItem key={user.id} user={user} />
                ) : null
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20, 40]}
        component="div"
        count={users ? users.length : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
