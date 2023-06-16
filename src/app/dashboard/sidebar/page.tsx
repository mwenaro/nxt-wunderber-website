import { DASHBOARD_LINKS } from "@/constants/dashboard";
import Link from "next/link";
import { FaAtom, FaDev, FaEnvelope, FaHome, FaPeopleArrows, FaPeopleCarry, FaShoppingBag, FaUser } from "react-icons/fa";
const IconObject = {

  home: <FaHome />,
  dashboard: <FaDev/>,
  guests: <FaPeopleCarry />,
  employees: <FaPeopleArrows />,
  tours: <FaShoppingBag />,
  settings: <FaAtom />,
  emails: <FaEnvelope />,


};

export default function Sidebar() {
  return (
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
  )
}
