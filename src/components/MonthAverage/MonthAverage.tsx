import { Avatar, Box, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import NumbersIcon from '@mui/icons-material/Numbers';
import { CardContainer } from './styles';

export const MonthAverage = (props: any) => (
  <CardContainer variant="outlined" {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            QUANTIDADE MENSAL MÉDIA
          </Typography>
          <Typography color="textPrimary" variant="h4">
            1,6k
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56,
            }}
          >
            <NumbersIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2,
        }}
      >
        <ArrowUpwardIcon color="success" />
        <Typography
          variant="body2"
          sx={{
            mr: 1,
          }}
        >
          16%
        </Typography>
        <Typography color="textSecondary" variant="caption">
          Desde o último mês
        </Typography>
      </Box>
    </CardContent>
  </CardContainer>
);
