import { Avatar, Box, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ScaleIcon from '@mui/icons-material/Scale';
import { CardContainer } from './styles';

export const FruitWeight = (props: any) => (
  <CardContainer variant="outlined" {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'flex-start', alignItems: 'center' }}>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56,
            }}>
            <ScaleIcon />
          </Avatar>
        </Grid>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            PESO MÉDIO DA FRUTA
          </Typography>
          <Typography color="textPrimary" variant="h4">
            130 gramas
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center',
        }}>
        <ArrowDownwardIcon color="error" />
        <Typography
          color="error"
          sx={{
            mr: 1,
          }}
          variant="body2">
          12%
        </Typography>
        <Typography color="textSecondary" variant="caption">
          Desde o últimos mês
        </Typography>
      </Box>
    </CardContent>
  </CardContainer>
);
