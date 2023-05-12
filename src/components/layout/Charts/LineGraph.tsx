"use client"


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
   
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {  Line, Doughnut } from 'react-chartjs-2';
import { IGraphData } from './types';


ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const defaultOptions = {
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

const labels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const defaultData: IGraphData = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => Math.random() * 1000),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => Math.random() * 1000),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};










export default function LineGraph({ options=defaultOptions, data=defaultData, title = '', labels = [] }: { options?: any, data?: IGraphData, title?: string, labels?: string[] | [] }) {

    return <Line options={title.length>0 ? {...options, plugins:{...options.plugins,title:{...options.plugins.title,text:title}} } : options} data={data} />
    // return <Doughnut options={title.length>0 ? {...options, plugins:{...options.plugins,title:{...options.plugins.title,text:title}} } : options} data={data} />
    
}
