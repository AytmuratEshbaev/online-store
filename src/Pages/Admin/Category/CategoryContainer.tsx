import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CategoryItem from './CategoryItem';
import { categoryAPI } from '../../../services/CategoryService';


export default function CategoryContainer() {
    const { data: categories, isLoading } =
        categoryAPI.useFetchAllCategoriesQuery(10);
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Name</TableCell>
                        <TableCell align="right">ID</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {categories && categories.map((category) => (
                        <CategoryItem key={category.name} category={category} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}