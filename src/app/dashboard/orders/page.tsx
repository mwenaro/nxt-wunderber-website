import { getData } from "@/utils/fetch"

const getOrders = async ()=> await getData('http://localhost:3000/api/dashboard/orders');

export default async function Orders() {
  const Orders = await getOrders();
  console.log(Orders);
  return (
    <div>
      <h2>Tour Booking Orders</h2>
      
    </div>
  )
}
