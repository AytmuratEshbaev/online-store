import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import { Drawer, AppBar, DrawerHeader } from './AdminStyles'
import GroupIcon from '@mui/icons-material/Group';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ProfileMenu from './ProfileMenu';

const datas = [{ name: 'Users', icon: GroupIcon }, { name: 'Categories', icon: InventoryOutlinedIcon }, { name: 'Products', icon: StorefrontOutlinedIcon }]


export default function Admin() {
    const theme = useTheme();
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
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#fff', color: '#242424', borderRadius: "20px", border: "1px solid rgb(238,238,238)" }}>
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
                    src='./images/logo.png'
                    alt="Logo"
                />
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> :
                            <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List sx={{ backgroundColor: '#fff', height: '100%', borderRadius: '20px',px: 2 }}>
                    {datas.map((data) => (
                        <ListItem key={data.name} disablePadding sx={{
                            display: 'block', my: 1
                        }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2,
                                    transition: 'all .5s ease', fontWeight: '600',borderRadius: '20px',
                                    "&:hover": {
                                        backgroundColor: "#fed700",
                                        color: '#242424'
                                    }
                                }}
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
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: 'rgb(247,247,247)', minHeight: '100vh' }}>
                <DrawerHeader />
                <Box sx={{backgroundColor: "#fff", borderRadius: "20px", border: "1px solid rgb(238,238,238)", padding: "10px 20px"}}>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non

                    </Typography>
                    <Typography paragraph>
                        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}




