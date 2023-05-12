import { BarGraph } from "@/components";

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

const labels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data: {
  labels: string[]
  , datasets: { label: string, data: any[], backgroundColor: string }[]
} = {
  labels,
  datasets: [
    {
      label: 'Tours',
      data: labels.map(() => Math.random() * 1000),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Sales',
      data: labels.map(() => Math.random() * 1000),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};




export default function Dashboard() {
  return (
    <>
     
        <BarGraph options={options} data={data} title ="Monthly Sales"/>

      

    </>
  )
}

