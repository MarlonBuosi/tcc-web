import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const DashboardContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 0,
  },
}));
