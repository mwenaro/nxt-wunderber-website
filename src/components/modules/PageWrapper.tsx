import React from "react";
import { navLinks, contactAddress, contactEmail, whatsAppNumber , contactPhone} from "../../constants";
import Footer from "./Footer";
import Header from "./Header";


export default function PageWrapper({children}:{children:React.ReactNode}) {
  return (
    <div className="container min-h-screen bg-slate-300 w-full sm:w-11/12 mx-auto  px-5 sm:px-0 flex flex-col ">
       
      
       <Header />
        <main className = "flex-1">
      {children}
      </main>
     
      <Footer 
      contactAddress={ contactAddress}
      contactEmail = {contactEmail}
      contactPhone = {contactPhone}
      whatsAppNumber = {whatsAppNumber}
      navigationLinks={navLinks}
      
      />
    </div>
  )
}
