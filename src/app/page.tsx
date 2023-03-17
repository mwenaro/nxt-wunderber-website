"use client"
import { IImage } from '@/types';
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
      <div className='w-full border-red-5 border-4 flex flex-col sm:flex-row gap-2' >
        <div className='w-full sm:w-1/2 flex flex-col'>
          <h1>Wunderber Kenia Adventures</h1>
          <h3>The Route of wunders</h3>
        </div>
        <div className='w-full sm:w-1/2'>
          <Carousel images={_images.sort(() => Math.random() - 0.5).slice(0, 9)} />
        </div>

      </div>
    </PageWrapper>
  )
}
