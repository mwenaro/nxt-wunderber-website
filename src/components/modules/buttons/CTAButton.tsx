import Link from 'next/link'
import React from 'react'

export default function CTAButton({children, path, styles}:{path:string, children:string, styles?:string}) {
  return (
    <div className={` flex flex-col justify-center items-center w-full relative ${styles??''}`} >
          <Link  href={path}  className='p-5 btn w-96 font-bold btn-primary text-white uppercase sm:p-32 '>{children}</Link>
          </div>
  )
}
