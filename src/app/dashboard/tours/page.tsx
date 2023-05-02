import { API_END } from "@/constants/dashboard";
import Link from "next/link";

async function getTours() {
  const res  = await fetch(`${process.env.NEXT_PUBLIC_DEV_API}dashboard/tours`, { next: { revalidate: 10 } });
  // const res  = await fetch(`${API_END}dashboard/tours`);
  return await res.json();
}



export interface IBookedTour { _id?:string, id?: string, created_at?: Date,createdAt?:Date, departureDate: Date | string, country: string, name: string, email: string, phone: any, status: any }
const TourItem = ({ id,_id, created_at,createdAt, departureDate, country, name, email, phone}: IBookedTour
) =>
  <div className="p-2 grid grid-cols-12 gap-1 border-1  border-red-400">
    <div className="col-span-1 overflow-hidden p-1 flex-2">{name}</div>
    <div className="col-span-1 overflow-hidden p-1 flex-2">{email}</div>
    <div className="col-span-1 overflow-hidden p-1 flex-1">{phone}</div>
    <div className="col-span-1 overflow-hidden p-1 flex-1">{country}</div>
    {/* <div className="col-span-1 overflow-hidden p-1 flex-1">{status}</div> */}
    <div className="col-span-1 overflow-hidden p-1 flex-2">{`${(created_at as Date|| createdAt).valueOf()}`}</div>
    <div className="col-span-1 overflow-hidden p-1 flex-1">{`${departureDate.valueOf()}`}</div>
    <div className="col-span-1 overflow-hidden p-1 flex-1">del</div>
    <div className="col-span-1 overflow-hidden p-1 flex-1"><Link href={`/dashboard/tours/${id||_id}`} > view</Link></div>
  </div>

const titiles = <div className="p-2 grid grid-cols-12 gap-1 border-1 border-red-400 font-bold ">
  <div className="col-span-1 overflow-hidden p-1 flex-2">Full Name</div>
  <div className="col-span-1 overflow-hidden p-1 flex-2">Email</div>
  <div className="col-span-1 overflow-hidden p-1 flex-1">Phone</div>
  <div className="col-span-1 overflow-hidden p-1 flex-1">Country</div>
  {/* <div className="col-span-1 overflow-hidden p-1 flex-1">Pay Status</div> */}
  <div className="col-span-1 overflow-hidden p-1 flex-2">Booking Date</div>
  <div className="col-span-1 overflow-hidden p-1 flex-1">Due Date</div>

  <div className="col-span-1 overflow-hidden p-1 flex-1"><span className="w-full rounded-md bg-red-400 p-2">x</span></div>
  <div className="col-span-1 overflow-hidden p-1 flex-1">View</div>

</div>

export default async function Tours() {
 const tours:any[] = await getTours();
//  console.log({tours})
// if(!tours || tours.length <= 0){
  return <div>No data</div>
// }

// return <div>Tours</div>

  return (
    <div className="w-full">
      <h2>Tour Bookings</h2>
      <div>
        {titiles}
        {

        tours?  tours.map((tour) => <div key={tour?.id||tour?._id}>
            <TourItem  {...tour} />
          </div>) :<div> No tours</div>
}
      </div>
    </div>
  )
}
