import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';

export const AvaragePerTree = (props: any) => (
  <Card sx={{ height: '100%' }} {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Typography color="textSecondary" variant="overline">
            QUANTIDADE MÉDIA POR ÁRVORE
          </Typography>
          <Typography color="textPrimary" variant="h4">
            146
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 56,
              width: 56,
            }}
          >
            <InsertChartIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
