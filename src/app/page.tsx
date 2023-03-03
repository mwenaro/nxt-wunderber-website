"use client"
import { images } from '../assets/images'
import { Carousel, PageWrapper } from '../components/modules'

export default function Home() {

  return (
    <PageWrapper>
      <div className='mx-auto p-2 ' >
        <div className='w-5/6'>
          <Carousel images={images.sort(() => Math.random() - 0.5).slice(0, 9)} />
          </div>
        
      </div>
    </PageWrapper>
  )
}
