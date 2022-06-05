import { Box, Container, Grid } from '@mui/material';
import { Budget } from '../containers/dashboard/budget';
import { Sales } from '../containers/dashboard/sales';
import { TasksProgress } from '../containers/dashboard/tasks-progress';
import { TotalCustomers } from '../containers/dashboard/total-customers';
import { TotalProfit } from '../containers/dashboard/total-profit';
import { DashboardLayout } from '../containers/dashboard-layout';
import { TrafficByDevice } from '../containers/dashboard/traffic-by-device';

export function DashBoard() {
  return (
    <DashboardLayout>
    <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
    </>
    </DashboardLayout>
  )
}
