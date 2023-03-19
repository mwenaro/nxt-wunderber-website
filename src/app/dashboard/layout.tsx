"use client"
import {useState} from 'react'
import { DASHBOARD_LINKS } from "@/constants/dashboard";
import Link from "next/link";
import { FaAtom, FaDev, FaHome, FaPeopleArrows, FaPeopleCarry, FaShoppingBag, FaUser } from "react-icons/fa";


type IProps = {
  children: React.ReactNode;
}



const IconObject = {

  home: <FaHome />,
  dashboard: <FaDev/>,
  guests: <FaPeopleCarry />,
  employees: <FaPeopleArrows />,
  orders: <FaShoppingBag />,
  settings: <FaAtom />,


};

// console.log(Object.entries(IconObject).filter(item=>item.includes('home'))[0][1])


const DashboardLayout = ({ children }: IProps) => {
const [toggleNav,setToggleNav] = useState<boolean>(false);

return(

  // <PageWrapper>

  <div className="flex flex-col md:flex-row gap-0 relative p-3 sm:p-5 ">
  {/* <div className="grid grid-cols-5 sm:grid-cols-7 relative p-3 sm:p-5 "> */}
    {< span className="sm:hidden"></span>}
    {/* sidebar */}
    <aside className="min-w-[100px] max-w-[200px] col-span-1 sm:col-span-2 justify-center items-center  bg-purple-500 text-white rounded-tl-3xl  min-h-fit h-screen">

      <div className="flex flex-col  p-5 gap-3   sm:mx-1 w-full z-10 min-w-[100px] mx-5">
        {/*LoginAmdin  */}
        <div className="flex gap-2 font-bold text-3xl ">
          <FaUser />
          <h3 className="hidden sm:flex">Admin</h3>
        </div>

        <ul className="text-3xlg sm:text-base flex flex-col  gap-3 font-light">
          {
            DASHBOARD_LINKS
              .map(({ label, href }) => <li key={label}><Link href={href} >
                <div className="flex gap-1">
                  {Object.entries(IconObject).filter(item=>item.includes(label.toLocaleLowerCase()))[0][1]||''}
                  <span className="hidden sm:flex">{label}</span>
                </div>
              </Link></li>)
          }
          

        </ul>
      </div>
    </aside>
    {/* Dasboardsub routes*/}
    <div className="flex-1 p-5">
      {/* <div className=" flex-grow bg-gray-400"> */}

      {children}
    </div>
  </div>

  // </PageWrapper>
)
        }

export default DashboardLayout;


