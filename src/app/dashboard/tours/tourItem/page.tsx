"use client";

import { API_END } from "@/constants/dashboard";
import Link from "next/link";
function deleteTour(id: string) {
  fetch(`${API_END}dashboard/tours/${id}`, {method:'DELETE'})
  .then(res=>{
    // console.log(res)
    if(res.ok){
      alert('Deleteted Successful')
    }
    return res.json();
  })
  .then(data=>{
    console.log({data})
  
  })
  .catch(error=>{
    console.log({error})
  })
  ;
}

export interface IBookedTour {
  _id?: string;
  id?: string;
  created_at?: Date;
  createdAt?: Date;
  departureDate: Date | string;
  country: string;
  name: string;
  email: string;
  phone: any;
  status: any;
}

interface IProps{
    tour:IBookedTour
}

export default  function TourItem({tour}: IProps) {
    const { id,
        _id,
        created_at,
        createdAt,
        departureDate,
        country,
        name,
        email,
        phone} = tour;

 
  return (
    <div className="p-2 grid grid-cols-12 gap-1 border-1  border-red-400">
    <div className="col-span-1 overflow-hidden p-1 flex-2">{name}</div>
    <div className="col-span-1 overflow-hidden p-1 flex-2">{email}</div>
    <div className="col-span-1 overflow-hidden p-1 flex-1">{phone}</div>
    <div className="col-span-1 overflow-hidden p-1 flex-1">{country}</div>
    {/* <div className="col-span-1 overflow-hidden p-1 flex-1">{status}</div> */}
    <div className="col-span-1 overflow-hidden p-1 flex-2">{`${(
      (created_at as Date) || createdAt
    ).valueOf()}`}</div>
    <div className="col-span-1 overflow-hidden p-1 flex-1">{`${departureDate.valueOf()}`}</div>
    <div className="col-span-1 overflow-hidden p-1 flex-1">
      <span
        className="w-full rounded-md bg-red-400 p-2"
        onClick={() => deleteTour(id ? id : _id ? _id : "")}
      >
        x
      </span>
    </div>
    <div className="col-span-1 overflow-hidden p-1 flex-1">
      <Link href={`/dashboard/tours/${id || _id}`}> view</Link>
    </div>
  </div>
  );
}
