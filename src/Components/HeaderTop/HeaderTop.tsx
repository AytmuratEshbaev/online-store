import { Container, Row, Col } from "react-bootstrap";
import './HeaderTop.css';
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Menu from '@mui/material/Menu';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Cookies } from "react-cookie";
import { useAppDispatch } from "../../hooks/redux";
import { authSlice } from "../../store/reducers/AuthSlice";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
const settings = [{
  text: 'Profile',
  href: '/'
}, {
  text: 'Admin',
  href: './admin'
}];

function HeaderTop() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch();
  const cookie = new Cookies();
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const navigate = useNavigate();

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    setAnchorElUser(null);
    dispatch(authSlice.actions.logout());
    navigate('./login')
  }

  const userMenu = () => {
    const decode: {
      access_token: string,
      sub: string,
      is_admin: number
    } = jwtDecode(cookie.get('token'));
    
    return (
      <Box>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <AccountCircleIcon sx={{ fontSize: '30px' }} />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px', }}
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
          <Typography textAlign="center" className="username">{decode.sub}</Typography>
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
    )
  }


  return (
    <div className="header-top">
      <Container>
        <Row>
          <Col lg={3} md={4}>
            <div className="header-top-left">
              <ul className="phone-wrap">
                <li>
                  <span>Телефон:</span>
                  <a href="#">(+998) 93 362 36 21</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={9} md={8}>
            <div className="header-top-right">
              <ul className="ht-menu">
                <li>
                  <a href="#">Мой аккаунт</a>
                </li>
                <li>
                  <a href="#">Checkout</a>
                </li>
                <li>
                  {
                    !cookie.get('token')
                      ? <a href="/login">Войти</a>
                      : userMenu()
                  }
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default HeaderTop;
