import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import StraightenIcon from '@mui/icons-material/Straighten';

export const AverageDiameter = (props: any) => (
  <Card {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            DIÂMETRO MÉDIO
          </Typography>
          <Typography color="textPrimary" variant="h4">
            8 cm
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56,
            }}
          >
            <StraightenIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
