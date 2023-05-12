import { BarGraph } from "@/components";
import { API_END } from "@/constants/dashboard";
import { use } from "react";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];
const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const getMonth = (monthDigit: number) => months[monthDigit] ?? "";
const getDataWithLabels = (data: any) =>
  data.map((item: any) => (item.month = getMonth(data.month)));
const data: {
  labels: string[];
  datasets: { label: string; data: any[]; backgroundColor: string }[];
} = {
  labels,
  datasets: [
    {
      label: "Tours",
      data: labels.map(() => Math.random() * 1000),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Sales",
      data: labels.map(() => Math.random() * 1000),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

// async function getData() {
//   // return await fetch(`${API_END}dashboard`);

//   return await(await fetch(`http://localhost:5000/api/v0/dashboard`, {next:{tags:["data"] ,revalidate:5} })).json()
// }

export default function Graphs({ tours }: { tours: any[] }) {
  // export default  async function Graphs() {
  // const data = await getData();
  // const{tours} = data;
  if (tours.length) {
    data.labels = tours.map(({ month }: { month: number }) => getMonth(month));
    data.datasets = [
      {
        label: "Tours",
        data: tours.map(({ count }: { count: number }) => count),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ];
  }
  // console.log({data})
  return (
    <>
      <BarGraph options={options} data={data} title="Monthly Sales" />
    </>
  );
}
