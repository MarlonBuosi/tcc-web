import { Box, Container, Grid } from '@mui/material';
import { FruitWeight } from '../components/FruitWeight/FruitWeight';
import { GenericChart } from '../components/HistoricalChart/HistoricalChart';
import { MonthAverage } from '../components/MonthAverage/MonthAverage';
import { AverageDiameter } from '../components/AverageDiameter/AverageDiameter';
import { DashboardContainer } from '../containers/DashboardContainer/DashboardContainer';
import { PizzaChart } from '../components/PizzaChart/PizzaChart';
import { AvaragePerTree } from '../components/AveragePerTree/AveragePerTree';

export function DashBoard() {
  return (
    <DashboardContainer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <FruitWeight />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <MonthAverage />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <AvaragePerTree />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <AverageDiameter sx={{ height: '100%' }} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <GenericChart />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <PizzaChart sx={{ height: '100%' }} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </DashboardContainer>
  );
}
