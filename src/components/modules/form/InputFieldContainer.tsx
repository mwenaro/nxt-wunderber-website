import { ReactNode } from "react";

const InputFieldContainer = ({styles,children}:{styles:string,children:ReactNode })=>
  <div  className={`flex flex-col gap-2 p-3 my-1 w-full ${styles}`}>{children}</div>


  export default InputFieldContainer;
