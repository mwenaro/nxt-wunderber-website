
  const data =  [
    { name: "employees", num: 6 , clr:'bg-green-500'},
    { name: "users", num: 65, clr:'bg-red-500'},
    { name: "admins", num: 4 , clr:'bg-yellow-500'},
    { name: "emails", num: 201, clr:'bg-blue-500'},
    { name: "booked tours", num:55 , clr:'bg-orange-500'},
  ]

  const bgColors: string[] = ["red", "blue", "green", "yellow", "purple"];

const  HeroSection  = ()=>{
  


  return (
    <div className="w-full p-1">
      
      <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-5 w-full gap-2 md:gap-5 ">
        {data && data.map((item, indx) => {
         
          return (
            <div
              key={indx}
              className={`   flex flex-col justify-center items-center gap-2 md:gap-5 rounded-lg  text-white  ${item.clr||''}`}
            >
              <h3 className="font-semibold text-sm md:text-lg">
                {item.name
                  .split(" ")
                  .map(
                    (item) =>
                      item.trim()[0].toUpperCase() +
                      item.trim().toLowerCase().substring(1)
                  )
                  .join(" ")}
              </h3>
              <h5 className="font-extrabold text-2xl md:text-5xl">
                {item.num}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}


export default HeroSection;