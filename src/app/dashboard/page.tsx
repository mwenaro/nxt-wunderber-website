"use client";

import React, { use, useState } from "react";
import { BarGraph, HeroSection, LineGraph } from "@/components";
import Graphs from "./partials/Graphs";
import SWR from "swr";
import { API_END } from "@/constants/dashboard";

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


// 
const default__data = [
  { name: "employees", num: 6, clr: "bg-green-500" },
  { name: "users", num: 65, clr: "bg-red-500" },
  { name: "admins", num: 4, clr: "bg-yellow-500" },
  { name: "emails", num: 201, clr: "bg-blue-500" },
  { name: "booked tours", num: 55, clr: "bg-orange-500" },
];



async function getData() {
  // return await fetch(`${API_END}dashboard`);

  return await(await fetch(`http://localhost:5000/api/v0/dashboard`, {next:{tags:["data"] ,revalidate:5} })).json()
}
export default function Dashboard() {
  const data = use(getData());
  // const { data, error, isLoading } = SWR(getData);
  // if(tours){
// console.log({data, error})
//   }else{
//     console.log({data, error})
//   }

//   if(isLoading) return <div>Loading .... </div>

  return (
    <div className="w-full">
      <HeroSection  items={default__data}  />
      {/* <BarGraph options={options}  title="Monthly Sales" /> */}

      <Graphs tours={data.tours} />
    </div>
  );
}
