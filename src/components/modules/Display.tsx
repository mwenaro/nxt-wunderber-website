

import { getData } from "@/utils/fetch"
import { useEffect, useState } from "react";







export default  function Display({path}:{path:string}) {
  const [data, setdata] = useState([]);
  useEffect(()=>{
 get()

 async function get(){
let res = await getData(path);
let data = await res.json()
console.log({data})
setdata(data)
}
  },[])


 
  
  

// console.log({data})

  return (
    <div className="p-5">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>E-Mail</th>
            <th>SpecialInterest | Subject</th>
            <th>Date Created</th>
          </tr>
        </thead>
        <tbody>
          {
            data.length > 0 ? data.map((row:any,indx:number)=><tr key={row._id||indx}>
              <td>{indx}</td>
              <td>{row.name}</td>
              <td>{row.fro ?? (row.email || '')}</td>
              <td>{row.specialInterests ?? (row.body||'')}</td>
              <td>{row.createdAt}</td>
            </tr>

            ):
            <tr></tr>
          }
        </tbody>
      </table>
    
    </div>
  )
}
