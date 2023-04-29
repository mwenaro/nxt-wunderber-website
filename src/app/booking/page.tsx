"use client"
import { BookingForm, PageWrapper } from "@/components/modules";
import Display from "@/components/modules/Display";



export default function Booking() {
  return (
    <PageWrapper>
      <div className="flex flex-col md:flex-row">
      <BookingForm />
      <Display path= {'booking2'} />
      </div>
      
    </PageWrapper>
  )
}
