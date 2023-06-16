"use client"
import { FC} from "react";

// import { BarChart } from "../charts/page";
import { BarChart, PieChart, LineChart, DoughnutChart } from '../charts/page';


// async function serverData (){return await getData('dashboard')};


export const Charts: FC = () => {
// const serverdat = use(serverData())
// console.log({serverdat})
   
  const barChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3, 15],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ["Red", "Blue", "Yellow", "Others"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100,520],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(255, 156, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3, 15],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const doughnutChartData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };


  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-lg font-medium mb-2">Bar Chart</h2>
        <BarChart data={barChartData} />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-lg font-medium mb-2">Pie Chart</h2>
        <PieChart data={pieChartData} />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-lg font-medium mb-2">Line Chart</h2>
        <LineChart data={lineChartData} />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-lg font-medium mb-2">Doughnut Chart</h2>
        <DoughnutChart data={doughnutChartData} />
      </div>
    </div>
  );
};
