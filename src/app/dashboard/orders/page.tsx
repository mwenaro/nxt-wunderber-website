import { prisma } from "@/lib";
import Link from "next/link";


const OrderItem = ({fullName, email, phone, status}:{fullName:string,email:string,phone:any,status:string})=><div className="p-2 grid grid-cols-3 sm:grid-cols-4 border-1 border-red-400">
  <div className="col-span-1">{fullName}</div>
  <div className="col-span-1">{email}</div>
  <div className="hidden sm:col-span-1">{phone}</div>
  <div className="col-span-1">{status}</div>
</div>

export default async function Orders() {
  const orders = await prisma.tourBooking.findMany();

  if (!orders) {
    return <div>No orders found!</div>
  }
  return (
    <div>
      <h2>Tour Booking Orders</h2>
      {
        orders.map((order, index) => <div key={order.id}>
        <Link href={`/dashboard/order/${order.id}`} > <OrderItem  {...order} /></Link>
        </div>)
      }

    </div>
  )
}
