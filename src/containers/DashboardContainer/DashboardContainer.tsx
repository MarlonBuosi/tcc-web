import { Box } from '@mui/material';
import { DashboardNavbar } from '../../components/NavigationBar/NavigationBar';
import { DashboardContent } from './styles';

export const DashboardContainer = (props: any) => {
  const { children } = props;
  return (
    <>
      <DashboardContent>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          {children}
        </Box>
      </DashboardContent>
      <DashboardNavbar />
    </>
  );
};
