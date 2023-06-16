"use client"

import { FC } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,//For Barchart
    ArcElement,//For PieCart and Doughnut
    PointElement,//For PieCart and Doughnut
    LineElement,//Linegrapg
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


interface ChartProps {
  data: any;
  options?: any;
}

export const BarChart: FC<ChartProps> = ({ data, options }) => {
  return <Bar data={data} options={options} />;
};

export const PieChart: FC<ChartProps> = ({ data, options }) => {
  return <Pie data={data} options={options} />;
};

export const LineChart: FC<ChartProps> = ({ data, options }) => {
  return <Line data={data} options={options} />;
};

export const DoughnutChart: FC<ChartProps> = ({ data, options }) => {
  return <Doughnut data={data} options={options} />;
};






