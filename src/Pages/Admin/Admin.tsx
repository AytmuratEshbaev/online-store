import * as React from 'react';
import { Box, Toolbar, List, CssBaseline, Typography, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PublicIcon from '@mui/icons-material/Public';
import { Drawer, AppBar, DrawerHeader, ListItemButton_Styles, AdminHeader_Styles } from './AdminStyles'
import GroupIcon from '@mui/icons-material/Group';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ProfileMenu from './ProfileMenu';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Admin.css';

const datas = [
    { name: 'User', icon: GroupIcon, to: './user', id: 'user' },
    { name: 'Country', icon: PublicIcon, to: "./country", id: 'country' },
    { name: 'Category', icon: InventoryOutlinedIcon, to: "./category", id: 'category' },
    { name: 'Product', icon: StorefrontOutlinedIcon, to: './product', id: 'product' }]

function Admin() {
    const theme = useTheme();

    const location = useLocation().pathname;
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex', backgroundColor: "rgb(247,247,247)" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ boxShadow: 'none', backgroundColor: "rgb(247,247,247)", padding: "5px" }}>
                <Toolbar sx={AdminHeader_Styles}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" noWrap component="div" sx={{ flexGrow: '1' }}>
                        Dashboard
                    </Typography>
                    <ProfileMenu />
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader><img
                    src='.././images/logo.png'
                    alt="Logo"
                />
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> :
                            <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List sx={{ backgroundColor: '#fff', height: '100%', borderRadius: '20px', px: 2 }}>
                    {datas.map((data) => (
                        <ListItem key={data.name} disablePadding sx={{
                            display: 'block', my: 1, borderRadius: '20px'
                        }}
                        className={`${`/admin/${data.id}` === location ? 'tab active' : null}`}
                        >
                            <Link to={data.to}>
                                <ListItemButton sx={ListItemButton_Styles(open)}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {<data.icon />}
                                    </ListItemIcon>
                                    <ListItemText primary={data.name} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: 'rgb(247,247,247)', minHeight: '100vh' }}>
                <DrawerHeader />
                <Box sx={{ backgroundColor: "#fff", borderRadius: "20px", border: "1px solid rgb(238,238,238)", padding: "10px 20px" }}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}



export default Admin;
