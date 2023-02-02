import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import { Search, StyledInputBase, SearchIconWrapper } from './AdminStyles';
import Typography from '@mui/material/Typography';
import UserDataTable from './User/UserDataTable';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useQuery } from 'react-query';

async function fetchCountries() {
    const res = await fetch("https://ecommerce-h6sh.onrender.com/countries");
    return res.json();
}


function User() {
    const [open, setOpen] = useState(false);
    const { data, isLoading } = useQuery('countries', fetchCountries);
    const handleClickOpen = () => {
        setOpen(true);
    };


    // const [userData, setUserData] = useState({
    //     firstName: "", lastName: "", username: "", password: "", isAdmin: false,

    // })


    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className="users-admin">
            <Typography variant='h5' component="h1" p={2}>
                Users
            </Typography>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                py={1}
                mb={2}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>

                <div>
                    <Button variant="contained" sx={{
                        backgroundColor: '#333',
                        fontWeight: "bold",
                        "&:hover": {
                            backgroundColor: '#fed700',
                            color: "#fff"
                        }
                    }} startIcon={<AddIcon />} onClick={handleClickOpen}>
                        New
                    </Button>
                    <Dialog open={open} onClose={handleClose} maxWidth="md">
                        <DialogTitle>New user</DialogTitle>
                        <DialogContent>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '35ch' },
                                }}
                            >
                                <div>
                                    <TextField id="outlined-basic" label="First Name" variant="outlined" />
                                    <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                                </div>
                                <div>
                                    <TextField id="outlined-basic" label="Username" variant="outlined" />
                                    <TextField
                                        id="outlined-password-input"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="outlined-tel-input"
                                        label="Phone number"
                                        type="tel"
                                    />
                                    <Select
                                        labelId="select-medium"
                                        id="select-medium"
                                        label="phone"
                                        sx={{ minWidth: '200px', margin: '8px 0 8px 8px' }}
                                        defaultValue='mobile'
                                    >
                                        <MenuItem value={'mobile'}>Mobile</MenuItem>
                                        <MenuItem value={'home'}>Home</MenuItem>
                                        <MenuItem value={'work'}>Work</MenuItem>
                                    </Select>
                                </div>
                                <div>
                                    <TextField
                                        id="outlined-url-input"
                                        label="Image Url"
                                        type="url"
                                    />
                                    <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }} />} sx={{
                                        lineHeight: '100%', height: '100%', margin: '7px 0'
                                    }} label="Admin" />
                                </div>
                                <div>
                                    <TextField id="outlined-basic" label="City" variant="outlined" />
                                    <TextField
                                        id="outlined-number-input"
                                        label="Postcode"
                                        type="number"
                                    />
                                </div>
                                <div>
                                    <TextField id="outlined-basic" label="Street Adress" variant="outlined" />
                                    <Select
                                        labelId="select-medium"
                                        id="select-medium"
                                        label="country"
                                        sx={{ minWidth: '200px', margin: '7px 0 7px 8px' }}
                                        defaultValue={isLoading ? "" : data[0].id}
                                    >
                                        {

                                            isLoading ? <MenuItem value="">No option</MenuItem> : data.map((country: any) =>
                                                <MenuItem value={country.id} key={country.id}>{country.country_name}</MenuItem>
                                            )
                                        }
                                    </Select>
                                </div>
                            </Box>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit' >Submit</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Stack>
            <UserDataTable />
        </div>
    )
}

export default User;

