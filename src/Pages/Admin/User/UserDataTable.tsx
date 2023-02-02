import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useQuery } from 'react-query';
import CircularProgress from '@mui/material/CircularProgress';
import ButtonGroup from '@mui/material/ButtonGroup';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

interface Column {
    id: 'id' | 'username' | 'image' | 'phones' | 'adress' | 'control';
    label: string;
    minWidth?: number;
    maxWidth?: number;
    maxheight?: number;
}


const columns: readonly Column[] = [
    { id: 'id', label: 'Id', minWidth: 50, maxWidth: 100 },
    { id: 'username', label: 'Username', minWidth: 100, maxWidth: 200 },
    { id: 'image', label: 'Image', minWidth: 100, maxWidth: 200, maxheight: 100 },
    { id: 'phones', label: 'Phones', minWidth: 100, maxWidth: 200 },
    { id: 'adress', label: 'Adress', minWidth: 100, maxWidth: 200 },
    { id: 'control', label: 'Control', minWidth: 100, }
];




async function fetchUsers() {
    const res = await fetch("https://ecommerce-h6sh.onrender.com/users/");
    return res.json();
}

export default function UserDataTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const { data, isLoading } = useQuery('users', fetchUsers)


    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 600, minHeight: 300 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead >
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    style={{
                                        minWidth: column.minWidth,
                                        backgroundColor: "#fed700", color: '#333', fontWeight: "bold",
                                        maxWidth: column.maxWidth,
                                        maxHeight: column.maxheight,
                                        textAlign: 'center'
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ position: 'relative' }}>
                        {isLoading ?
                            <TableRow>
                                <TableCell>
                                    <CircularProgress color="inherit" sx={{ position: 'absolute', top: '50px', left: '45%' }} />
                                </TableCell>
                            </TableRow>
                            : (
                                data.map((user: any) =>
                                    <TableRow key={user.id}>
                                        <TableCell style={{
                                            maxWidth: columns[0].maxWidth,
                                            minWidth: columns[0].minWidth,
                                        }} align='center'>
                                            {user.id}
                                        </TableCell>
                                        <TableCell style={{
                                            maxWidth: columns[1].maxWidth,
                                            minWidth: columns[1].minWidth,
                                        }} align='center'>
                                            {user.username}
                                        </TableCell>
                                        <TableCell style={{
                                            maxWidth: columns[2].maxWidth,
                                            minWidth: columns[2].minWidth,
                                            maxHeight: columns[2].maxheight
                                        }} align='center'>
                                            <img src={user.user_detail.user_image} alt={user.id} />
                                        </TableCell>
                                        <TableCell style={{
                                            maxWidth: columns[3].maxWidth,
                                            minWidth: columns[3].minWidth,
                                        }} align='center'>
                                            {user.phone_numbers[0].phone_number}
                                        </TableCell>
                                        <TableCell style={{
                                            maxWidth: columns[4].maxWidth,
                                            minWidth: columns[4].minWidth,
                                        }} align='center'>
                                            {user.addresses[0].city + "  " + user.addresses[0].street_address}
                                        </TableCell>
                                        <TableCell style={{
                                            maxWidth: columns[5].maxWidth,
                                            minWidth: columns[5].minWidth,
                                        }} align='center'>
                                            <ButtonGroup variant="text" aria-label="contained button group">
                                                <Tooltip title="More information">
                                                    <IconButton color="primary">
                                                        <ReadMoreIcon />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title='Edit'>
                                                    <IconButton color='secondary'>
                                                        <EditIcon />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton style={{ color: 'red' }}>
                                                        <DeleteOutlineOutlinedIcon />
                                                    </IconButton>
                                                </Tooltip>
                                            </ButtonGroup>
                                        </TableCell>
                                    </TableRow>

                                )
                            )}

                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 50, 100]}
                component="div"
                count={data ? data.length : 0}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

{/* {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })} */}