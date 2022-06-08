import { Avatar, Box, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/InsertChartOutlined';
import NumbersIcon from '@mui/icons-material/InsertChartOutlined';

import { CardContainer } from './styles';

export const AvaragePerTree = (props: any) => (
  <CardContainer variant="outlined" {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            MÉDIA DE FRUTOS (ÁRVORE)
          </Typography>
          <Typography color="textPrimary" variant="h4">
            142 frutos
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success',
              height: 56,
              width: 56,
            }}>
            <NumbersIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2,
        }}>
        <ArrowUpwardIcon color="success" />
        <Typography
          variant="body2"
          sx={{
            mr: 1,
          }}>
          136
        </Typography>
        <Typography color="textSecondary" variant="caption">
          No último mês
        </Typography>
      </Box>
    </CardContent>
  </CardContainer>
);
