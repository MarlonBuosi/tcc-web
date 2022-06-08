import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

Chart.register(...registerables);

export const GenericChart = (props: any) => {
  const data = {
    datasets: [
      {
        backgroundColor: '#3F51B5',
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [18, 5, 19, 27, 29, 19, 20],
        label: 'Esse ano',
        maxBarThickness: 10,
      },
      {
        backgroundColor: '#EEEEEE',
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [11, 20, 12, 29, 30, 25, 13],
        label: 'Útilmo ano',
        maxBarThickness: 10,
      },
    ],
    labels: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug', '7 aug'],
  };

  return (
    <Card variant="outlined" {...props}>
      <CardHeader
        action={
          <Button endIcon={<ArrowDropDownIcon fontSize="small" />} size="small">
            Últimos 7 dias
          </Button>
        }
        title="HISTÓRICO"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <Bar data={data} />
        </Box>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2,
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small"
        >
          Overview
        </Button>
      </Box>
    </Card>
  );
};
