import Link from 'next/link'
import React from 'react'

export default function CTAButton({children, path, styles}:{path:string, children:string, styles?:string}) {
  return (
    <div className={`w-full object-contain flex flex-col justify-center items-center relative ${styles??''}`} >
          <Link  href={path}  className='p-5 btn w-2/3 font-bold btn-primary text-white uppercase  '>{children}</Link>
          </div>
  )
}
