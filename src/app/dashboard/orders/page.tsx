import { prisma } from "@/lib";
import Link from "next/link";
export interface IBookedTour { id:string,createdAt:Date,departureDate:Date|string, country:string,fullName: string, email: string, phone: any, status: string }

const OrderItem = ({ id, createdAt,departureDate,country,fullName, email, phone, status }: IBookedTour
 ) => 
<div className="p-2 grid gap-1 border-1 border-red-400">
  <div className="p-3">{fullName}</div>
  <div className="p-3">{email}</div>
  <div className=" p-3">{phone}</div>
  <div className=" p-3">{country}</div>
  <div className="p-3">{status}</div>
  <div className="p-3">{`${createdAt}`}</div>
  <div className="p-3">{`${departureDate}`}</div>
  <div className=" p-3">del</div>
  <div className="p-3"><Link href={`/dashboard/orders/${id}`} > view</Link></div>
</div>

const titiles = <div className="p-2 flex gap-3 border-1 border-red-400 font-bold text-lg sm:text-2xl">
<div className="p-3">Full Name</div>
<div className="p-3">Email</div>
<div className="p-3">Phone</div>
<div className="p-3">Country</div>
<div className="p-3">Pay Status</div>
<div className="p-3">Booking Date</div>
<div className="p-3">Due Date</div>

<div className="p-3">Delete</div>
<div className="p-3">View</div>

</div>

export default async function Orders() {
  const orders = await prisma.tourBooking.findMany();

  if (!orders) {
    return <div>No orders found!</div>
  }
  return (
    <div className="w-full">
      <h2>Tour Booking Orders</h2>
      <div>
        {titiles}
      {

        orders.map((order) => <div key={order.id}>
           <OrderItem  {...order} />
        </div>)
      }
</div>
    </div>
  )
}
