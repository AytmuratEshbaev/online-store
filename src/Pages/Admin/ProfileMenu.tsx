import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import { authSlice } from "../../store/reducers/AuthSlice";
import { useAppDispatch } from '../../hooks/redux';

const settings = [{
  text: 'Profile',
  href: '/'
}];

function ProfileMenu() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    setAnchorElUser(null);
    dispatch(authSlice.actions.logout());
    navigate('../login')
  }

  return (
    <Box>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <AccountCircleIcon sx={{ fontSize: '30px' }} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting.text} onClick={handleCloseUserMenu}>
            <a href={setting.href}>
              <Typography textAlign="center">{setting.text}</Typography>
            </a>
          </MenuItem>
        ))}
        <MenuItem onClick={handleLogout}>
          <Typography textAlign="center">Выйти</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
export default ProfileMenu;