"use client"

import { IImage } from '@/types';
// import { images } from '../assets/images'
import { ButtonLink, Carousel, PageWrapper } from '../components/modules'

export default function Home() {
  const imgPath = '/assets/images/16x9/';

  let _images: IImage[] = [];
  for (let i = 1; i <= 12; i++) {
    _images.push(
      {
        src: `${imgPath}${i}.jpg`,
        des: `Image ${i}`
      }
    );

  }
  return (
    <PageWrapper>
      <div className='w-full p-2 flex flex-col sm:flex-row ' >

        <div className='w-full sm:w-1/2 flex flex-col items-center  gap-10 p-2 sm:p-5 '>
          <div className='my-5'>
            <h2 className='my-5 sm:text-2xl lg:text-3xl font-extrabold text-black'>Wunderber Kenia Adventures</h2>
            <p className='text-base sm:text-lg md:text-xl tracking-wide text-black'>The Route of Wonders ...</p>
          </div>
          <ButtonLink path='/booking' styles=' '>
            book now
          </ButtonLink>

        </div>

        <div className='w-full sm:w-1/2'>
          <Carousel images={_images.sort(() => Math.random() - 0.5).slice(0, 11)} />
        </div>

      </div>
    </PageWrapper>
  )
}
