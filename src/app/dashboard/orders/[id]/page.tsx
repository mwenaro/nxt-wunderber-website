// "use client"
import { API } from "@/constants";
import { prisma } from "@/lib";
import Link from "next/link";
// import { NextRouter, useRouter } from "next/router";


interface IProps {
    params: {
        id: string
    }
}


// const getOrder = async (id: string) => {
//     let res = await fetch(`${API}dashboard/order/${id}`, { method: "POST", body: JSON.stringify({ id }) })
//     const order = await res.json()
//     return order;
// }
const getOrder = async (id: string) =>{fullName:"no name"}
/*
    await prisma.tourBooking.findUnique({
        where: {
            id,
        },
    });
*/

export default async function Order({ params }: IProps) {
    // const router = useRouter();
    const order = await getOrder(params.id)
    // console.log({ order })

    //   const { order } = await getOrder(params.id);


    return <div className="p-4">
        <div className=" flex gap-5"><Link href={`/dashboard/orders`} className=" hover:bg-skin-primary hover:text-2xl"> <span>Go Back</span> </Link>
            <h3>Order Item</h3>
        </div>
        <div>hello no</div>
    </div>

}
