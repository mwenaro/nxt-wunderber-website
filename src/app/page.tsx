"use client"
import CTAButton from '@/components/modules/buttons/CTAButton';
import { IImage } from '@/types';
import Link from 'next/link';
import { images } from '../assets/images'
import { Carousel, PageWrapper } from '../components/modules'

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

        <div className='w-full sm:w-1/2 flex flex-col items-center justify-center gap-10 p-2 sm:p-5 '>
          <div className='mt-5 mb-'>
            <h2 className='my-5 sm:text-2xl lg:text-3xl font-extrabold'>Wunderber Kenia Adventures</h2>
            <p className='text-base sm:text-lg md:text-xl tracking-wide'>The Route of Wonders ...</p>
          </div>
          <CTAButton path='/booking' styles='w-full sm:w-[100px] '>
            book now
          </CTAButton>

        </div>

        <div className='w-full sm:w-1/2'>
          <Carousel images={_images.sort(() => Math.random() - 0.5).slice(0, 9)} />
        </div>

      </div>
    </PageWrapper>
  )
}
