import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ICategory } from '../../../models/ICategory';

interface ICategoryItem {
    category: ICategory;
}

const CategoryItem: FC<ICategoryItem> = ({ category }) => {

    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    {
                        category.children_category.length !== 0
                            ? <IconButton
                                aria-label="expand row"
                                size="small"
                                onClick={() => setOpen(!open)}>
                                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                            : null
                    }
                </TableCell>
                <TableCell component="th" scope="row">
                    {category.name}
                </TableCell>
            </TableRow>
            {category.children_category.length !== 0
                ? <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Table size="small" aria-label="purchases" className='subtable'>
                                    <TableBody>
                                        {category.children_category.map((c) => (
                                            <TableRow key={c.id}>
                                                <TableCell component="th" scope="row">
                                                    {c.name}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
                : null
            }
        </React.Fragment>
    );
}

export default CategoryItem;