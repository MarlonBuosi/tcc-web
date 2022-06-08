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
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({}));

export const DashboardNavbar = (props: any) => {
  const { onSidebarOpen, ...other } = props;
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
      {...other}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: 64,
          left: 0,
          px: 2,
        }}
      >
        <Box sx={{ flexGrow: 1 }} />
        <Tooltip title="Sign Out">
          <IconButton sx={{ ml: 1 }}>
            <Badge badgeContent={4} color="primary" variant="dot">
              <LogoutIcon fontSize="small" />
            </Badge>
          </IconButton>
        </Tooltip>
        <Avatar
          sx={{
            height: 40,
            width: 40,
            ml: 1,
          }}
        ></Avatar>
      </Toolbar>
    </DashboardNavbarRoot>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};
