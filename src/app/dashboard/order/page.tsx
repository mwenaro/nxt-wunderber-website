import { prisma } from "@/lib";


let _id ="5d5c2d8a-e279-4821-b95e-75191c4cc23f";

export default async function page() {
  const order = await prisma.tourBooking.findUnique({
    where:{
        id:_id
    }
  });

return <div className="p-4">
  <h3>Order Item</h3>
  <div>{order && order.fullName}</div>
</div>
  
}
