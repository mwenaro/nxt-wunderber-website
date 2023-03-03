"use client"
import { useFaker } from 'react-fakers'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels:string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

 const data:{
  labels:string[]
  ,datasets:{label:string,data:any[],backgroundColor:string}[]} = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.random()*1000),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => Math.random()*1000),
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};




export default function page() {
  return (
    <div className="grid grid-col-1 sm:grid-cols-6">
      <div className='col-span-1 sm:col-span-2'></div>
      <div className='col-span-1 sm:col-span-4'>
      <Bar options={options} data={data} />;
      </div>

    </div>
  )
}

