import LogoutIcon from '@mui/icons-material/Logout';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';

import { useAuth } from '../../hooks/useAuth';

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({}));

export const DashboardNavbar = (props: any) => {
  const { onSidebarOpen, ...other } = props;
  const { user, signOut } = useAuth();
  const handleLogout = () => {
    signOut();
  };

  return (
    <DashboardNavbarRoot
      sx={{
        left: {
          lg: 0,
        },
        width: {
          lg: 'calc(100%)',
        },
      }}
      {...other}>
      <Toolbar
        disableGutters
        sx={{
          minHeight: 64,
          left: 0,
          px: 2,
        }}>
        <Box sx={{ flexGrow: 1 }} />
        <Typography>Logado como: {user?.email}</Typography>
        <Avatar
          sx={{
            height: 40,
            width: 40,
            ml: 2,
          }}
          src={user?.avatar}></Avatar>
        <Tooltip title="Sign Out">
          <IconButton sx={{ ml: 1 }}>
            <Badge badgeContent={4} color="primary" variant="dot">
              <LogoutIcon onClick={handleLogout} sx={{ color: 'white' }} />
            </Badge>
          </IconButton>
        </Tooltip>
      </Toolbar>
    </DashboardNavbarRoot>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};
