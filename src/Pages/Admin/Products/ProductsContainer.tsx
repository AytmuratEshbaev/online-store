import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Product from "./Product"
import { productAPI } from '../../../services/ProductService';
import { CircularProgress } from '@mui/material';
import uuid from 'react-uuid';
import { IProduct } from '../../../models/IProduct';
import './Products.css';

const columns = ['Имя устройства', 'Фото', 'Описание', 'Категория', 'Цена', 'Количество', 'Дисконт', 'Контроль'];



const ProductsContainer = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const { data: products, isLoading } = productAPI.useFetchLimitProductsQuery(rowsPerPage);


    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }} className='products-container'>
            <TableContainer sx={{ maxHeight: 440, minHeight: 300 }}>
                {
                    isLoading
                        ? <CircularProgress
                            color="inherit"
                            sx={{ position: "absolute", top: "45%", left: "60%" }}
                        />
                        : <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column: string, index: number) => (
                                        <TableCell key={index}>
                                            {column}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    products?.map((product: IProduct) =>
                                        <Product product={product} key={uuid()} />)
                                }
                            </TableBody>
                        </Table>
                }

            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={products ? products.length : 0}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default ProductsContainer;