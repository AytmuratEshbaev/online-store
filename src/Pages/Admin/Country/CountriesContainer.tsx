import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { countryAPI } from '../../../services/CountryService';
import CircularProgress from '@mui/material/CircularProgress';
import CountryItem from './CountryItem';

export default function CountryContainer() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const { data: countries, isLoading } =
        countryAPI.useFetchAllCountriesQuery(rowsPerPage);

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }} className='countries__container'>
            <TableContainer sx={{ maxHeight: 440 }} className='table__container'>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Country name</TableCell>
                            <TableCell>Control</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {isLoading
                            ?
                            <TableRow>
                                <TableCell>
                                    <CircularProgress
                                        color="inherit"
                                        sx={{ position: "absolute", top: "50%", left: "50%", transform: 'translate(-50%,-50%)' }}
                                    />
                                </TableCell>
                            </TableRow>
                            : countries && countries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((country) =>
                                    <CountryItem country={country} key={country.id} />
                                )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 20, 40]}
                component="div"
                count={countries ? countries.length : 0}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}