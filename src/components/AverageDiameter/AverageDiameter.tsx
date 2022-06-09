import { Avatar, CardContent, Grid, Typography } from '@mui/material';
import StraightenIcon from '@mui/icons-material/Straighten';
import { CardContainer } from './styles';

export const AverageDiameter = (props: any) => (
  <CardContainer variant="outlined" {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'flex-start', alignItems: 'center' }}>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56,
            }}>
            <StraightenIcon />
          </Avatar>
        </Grid>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            DIÂMETRO MÉDIO DA FRUTA
          </Typography>
          <Typography color="textPrimary" variant="h4">
            8 centímetros
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </CardContainer>
);
