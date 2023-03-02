import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { userSlice } from '../../../store/reducers/UserSlice';
import { IUser } from '../../../models/IUser';
import { FC } from 'react';
import { userAPI } from '../../../services/UserService';
import CircularProgress from '@mui/material/CircularProgress';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});



const UserFullDetails: FC = () => {
    const dispatch = useAppDispatch();
    const { closeMoreInformation } = userSlice.actions;

    const handleClose = () => {
        dispatch(closeMoreInformation());
    };
    const isOpenMore = useAppSelector((state) => state.userReducer.isOpenMore);
    const userID = useAppSelector((state) => state.userReducer.userIdInfo);

    const { data: user, isLoading } = userAPI.useFetchSingleUserQuery(userID);

    return (
        <Dialog
            fullScreen
            open={isOpenMore}
            onClose={handleClose}
            TransitionComponent={Transition}
            className='more__info'
        >
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar sx={{ backgroundColor: '#fed700', color: '#242424' }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        User Info
                    </Typography>
                </Toolbar>
            </AppBar>
            {isLoading
                ? <CircularProgress
                    color="inherit"
                    sx={{ position: "absolute", top: "50%", left: "50%", transform: 'translate(-50%,-50%)' }}
                />
                : <div className='user__info'>
                    <div className="header">
                        <div className="wrapper">
                            <List>
                                <div className="info-group">
                                    <ListItem>
                                        <ListItemText primary={user?.username} secondary="Username" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={user?.user_detail.first_name} secondary="First Name" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary={user?.user_detail.last_name}
                                            secondary="Last Name"
                                        />
                                    </ListItem>
                                </div>
                                <Divider />
                                <div className="info-group">
                                    <ListItem>
                                        <ListItemText
                                            primary={user?.addresses[0].country.country_name}
                                            secondary="Country"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary={user?.addresses[0].city}
                                            secondary="City"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary={user?.addresses[0].postal_code}
                                            secondary="Postal Code"
                                        />
                                    </ListItem>
                                </div>
                                <Divider />
                                <div className="info-group">
                                    <ListItem>
                                        <ListItemText
                                            primary={user?.addresses[0].street_address}
                                            secondary="Street address"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary={user?.phone_numbers[0].phone_number}
                                            secondary="Phone Number"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary={user?.phone_numbers[0].type}
                                            secondary="Phone Type"
                                        />
                                    </ListItem>
                                </div>
                                <Divider />

                            </List>
                        </div>
                        <div className="user__img">
                            <img src={user?.user_detail.user_image} alt="user avatar" />
                        </div>
                    </div>
                </div>
            }
        </Dialog>
    );
}

export default UserFullDetails;