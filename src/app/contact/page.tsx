"use client"

import React from 'react'
import { ContactForm, Map, PageWrapper } from '../../components/modules'

export default function Contact() {
  return (
    <PageWrapper>
    <div className='w-full flex flex-col md:flex-row justify-center items-center'>
      <div className='w-full md:w-1/2 '>
        <h2>Social Links</h2>
      </div>
      <div className='w-full md:w-1/2 '>
      <ContactForm />
      </div>
     
    </div>
    <div className='flex items-center justify-between '>
    
 
    <Map   />
    </div>
</PageWrapper>
  )
}
