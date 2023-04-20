import { List, ListItem, ListItemText, Divider, CircularProgress, Button } from '@mui/material';
import './Profile.css';
import { Cookies } from 'react-cookie';
import jwtDecode from 'jwt-decode';
import { userAPI } from '../../services/UserService';
import { IUser } from '../../models/IUser';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import UpdateProfileData from './UpdateProfileData';
import HeaderTop from '../../Components/HeaderTop';
import HeaderMiddle from '../../Components/HeaderMiddle';
import HeaderBottom from '../../Components/HeaderBottom';
import Breadcrumb from '../../Components/Breadcrumb';

const Profile = () => {
    const cookie = new Cookies();
    const decode: {
        access_token: string,
        sub: string,
        is_admin: number
    } = jwtDecode(cookie.get('token'));

    const { data: users, isLoading } = userAPI.useFetchAllUsersQuery(10);

    const currentUser = users?.find((user: IUser) => user.username === decode.sub);

    const [open, setOpen] = useState(false);

    return (
        <>
            <header>
                <HeaderTop />
                <HeaderMiddle />
                <HeaderBottom />
            </header>
            <Breadcrumb />
            <div className='profile-container'>
                <ToastContainer containerId={'updateProfile'} />
                {isLoading
                    ? <CircularProgress
                        color="inherit"
                        sx={{ position: "absolute", top: "50%", left: "45%" }}
                    />
                    : <div className='profile__info'>
                        <div className="header">
                            <div className="wrapper">
                                <List>
                                    <div className="info-group">
                                        <ListItem>
                                            <ListItemText primary={currentUser?.username} secondary="Username" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary={currentUser?.user_detail.first_name} secondary="First Name" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText
                                                primary={currentUser?.user_detail.last_name}
                                                secondary="Last Name"
                                            />
                                        </ListItem>
                                    </div>
                                    <Divider />
                                    <div className="info-group">
                                        <ListItem>
                                            <ListItemText
                                                primary={currentUser?.phone_numbers[0].phone_number}
                                                secondary="Phone Number"
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText
                                                primary={`${currentUser?.addresses[0].city}, ${currentUser?.addresses[0].street_address}`}
                                                secondary="Address"
                                            />
                                        </ListItem>
                                    </div>
                                    <Divider />
                                    <Divider />

                                </List>
                            </div>
                            <div className="user__img">
                                <img src={currentUser?.user_detail.user_image} alt="user avatar" />
                                <Button variant="contained" onClick={() => setOpen(true)}>Change</Button>
                            </div>
                        </div>
                    </div>
                }
                <UpdateProfileData open={open} setOpen={setOpen} user={currentUser} />
            </div>
        </>
    )
}

export default Profile;