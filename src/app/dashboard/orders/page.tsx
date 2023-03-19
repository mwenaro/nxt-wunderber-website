import { prisma } from "@/lib";
import Link from "next/link";
export interface IBookedTour { id: string, createdAt: Date, departureDate: Date | string, country: string, fullName: string, email: string, phone: any, status: any }

const OrderItem = ({ id, createdAt, departureDate, country, fullName, email, phone, status }: IBookedTour
) =>
  <div className="p-2 grid grid-cols-12 gap-1 border-1  border-red-400">
    <div className="col-span-1 overflow-hidden p-1 flex-2">{fullName}</div>
    <div className="col-span-1 overflow-hidden p-1 flex-2">{email}</div>
    <div className="col-span-1 overflow-hidden p-1 flex-1">{phone}</div>
    <div className="col-span-1 overflow-hidden p-1 flex-1">{country}</div>
    <div className="col-span-1 overflow-hidden p-1 flex-1">{status}</div>
    <div className="col-span-1 overflow-hidden p-1 flex-2">{`${createdAt.valueOf()}`}</div>
    <div className="col-span-1 overflow-hidden p-1 flex-1">{`${departureDate.valueOf()}`}</div>
    <div className="col-span-1 overflow-hidden p-1 flex-1">del</div>
    <div className="col-span-1 overflow-hidden p-1 flex-1"><Link href={`/dashboard/orders/${id}`} > view</Link></div>
  </div>

const titiles = <div className="p-2 grid grid-cols-12 gap-1 border-1 border-red-400 font-bold ">
  <div className="col-span-1 overflow-hidden p-1 flex-2">Full Name</div>
  <div className="col-span-1 overflow-hidden p-1 flex-2">Email</div>
  <div className="col-span-1 overflow-hidden p-1 flex-1">Phone</div>
  <div className="col-span-1 overflow-hidden p-1 flex-1">Country</div>
  <div className="col-span-1 overflow-hidden p-1 flex-1">Pay Status</div>
  <div className="col-span-1 overflow-hidden p-1 flex-2">Booking Date</div>
  <div className="col-span-1 overflow-hidden p-1 flex-1">Due Date</div>

  <div className="col-span-1 overflow-hidden p-1 flex-1"><span className="w-full rounded-md bg-red-400 p-2">x</span></div>
  <div className="col-span-1 overflow-hidden p-1 flex-1">View</div>

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
