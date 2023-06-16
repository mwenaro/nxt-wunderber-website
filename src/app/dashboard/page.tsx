import { use } from "react";
import { Charts } from "./graphs/allcgarts/page";
import BarGraph from "./graphs/bargraph/page";
import HeroSection from "./herosection/page";
import { getData } from "@/utils/fetch";

export default function Dashboard() {
const serverdat = use(getData('http://localhost:3000/api/dashboard',true))
// console.log({serverdat}k
   

  return (
    <div className='w-full '>
      <HeroSection serverData={serverdat.nums}/>
      <Charts />
      {/* <div className="grid grid-cols-1 md:grid-cols-2 w-full overflow-hidden">
        
      <BarGraph />
      <BarGraph />
      </div> */}
      
    </div>
  )
}
