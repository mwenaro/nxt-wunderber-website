"use client"

import React from 'react'
import { ContactForm, Map, PageWrapper } from '../../components/modules'

export default function Contact() {
  return (
    <PageWrapper>
      <div className='w-full flex flex-col gap-10 sm:flex-row justify-center items-center'>
      <div className='w-full md:w-1/2 '>
          <ContactForm />
        </div>
        <div className='w-full md:w-1/2 flex items-center justify-between overflow-hidden'>
          <div className=' '>


            <Map />
          </div>
        </div>
        

      </div>

    </PageWrapper>
  )
}
