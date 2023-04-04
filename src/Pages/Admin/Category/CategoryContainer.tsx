import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CategoryItem from './CategoryItem';
import { categoryAPI } from '../../../services/CategoryService';
import './Category.css';
import CircularProgress from '@mui/material/CircularProgress';

export default function CategoryContainer() {
    const { data: categories, isLoading } =
        categoryAPI.useFetchAllCategoriesQuery(100);

    return (
        isLoading ?
            <CircularProgress
                color="inherit"
                sx={{ position: "absolute", top: "50%", left: "50%", transform: 'translate(-50%,-50%)' }
                } />
            : <TableContainer component={Paper} sx={{ maxHeight: 440 }} className='table__container'>
                <Table aria-label="collapsible table">
                    <TableHead className='main__th'>
                        <TableRow>
                            <TableCell />
                            <TableCell>Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories && categories.map((category) => (
                            <CategoryItem key={category.name} category={category} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    )
}