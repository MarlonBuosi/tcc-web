import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material';

Chart.register(...registerables);

export const PizzaChart = (props: any) => {
  const data = {
    datasets: [
      {
        data: [63, 15, 22],
        backgroundColor: ['#3F51B5', '#e53935', '#FB8C00'],
        borderWidth: 8,
        borderColor: '#FFFFFF',
        hoverBorderColor: '#FFFFFF',
      },
    ],
    labels: [' 135 gramas', ' 129 gramas', ' 130 gramas'],
  };

  const devices = [
    {
      value: '63',
      color: '#3F51B5',
    },
    {
      value: '15',
      color: '#E53935',
    },
    {
      value: '22',
      color: '#FB8C00',
    },
  ];

  return (
    <Card variant="outlined" {...props}>
      <CardHeader title="Porcentagem de frutas por peso médio" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            position: 'relative',
          }}>
          <Doughnut data={data} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2,
          }}>
          {devices.map(({ color, value }) => (
            <Box
              key={value}
              sx={{
                p: 1,
                textAlign: 'center',
              }}>
              <Typography color="textPrimary" variant="body1"></Typography>
              <Typography style={{ color }} variant="h4">
                {value}%
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
