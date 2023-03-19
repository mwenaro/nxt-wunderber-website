"use client"

import { touristAttractionSites } from '@/constants';
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
      <div className='w-full p-2 flex flex-col sm:flex-row-reverse ' >

        <div className='w-full sm:w-1/2'>
          <Carousel images={_images.sort(() => Math.random() - 0.5).slice(0, 11)} />
        </div>
        <div className='w-full sm:w-1/2 flex flex-col items-center   p-2 sm:p-5 '>
          <div className='my-5'>
            <h2 className='my-5 sm:text-2xl lg:text-3xl font-extrabold text-black'>Wunderber Kenia Adventures</h2>
            <p className='text-base sm:text-lg md:text-xl tracking-wide text-black'>The Route of Wonders ...</p>
          </div>
          <ButtonLink path='/booking' styles=' '>
            book now
          </ButtonLink>

        </div>



      </div>
      <section className='w-full p-5 md:px-40'>
        <h3 className='text-2xl md:text-3xl font-bold'>Some selected sites</h3>
        <div className='flex flex-col w-full max-w-[800px]'>
          {

            touristAttractionSites.map(({ name, description, location }: any, indx) => <div key={indx}>
              <h4 className='text-lg sm:text-2xl text-skin-primary font-extrabold py-1'>{name}</h4>
              <p className=' text-justify text-base md:text-lg'>{description}</p>
              <p className='text-right italic text-base font-light py-1 sm:p-2'>{location}</p>
            </div>)
          }
        </div>

      </section>

    </PageWrapper>
  )
}
