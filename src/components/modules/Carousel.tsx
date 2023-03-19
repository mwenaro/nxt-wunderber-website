"use clint"

import Image from 'next/image';
import React from 'react';

import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


interface Props {
  images: {src:string,des:string}[];
}

const MyCarousel: React.FC<Props> = ({ images }) => {
  return (
    <div className='w-full relative overflow-hidden object-contain h-fit'>
    <Carousel
      showArrows={true}
      showThumbs={false}
      
      showIndicators={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      
      // className="relative object-contain mx-auto"
    >
      {images.map(({src,des}:{src:string,des:string})=> (
        <div key={src} className=" mx-auto w-full overflow-hidden p-1 sm:p-4 bg-white rounded-lg relative">
          <Image 
          src={src} 
          alt={des} 
         loading ={'eager'}
          width={400}
          height ={300}
          className="w-full aspect-auto object-contain  rounded-lg"/>
        </div>
      ))}
    </Carousel>
    </div>
  );
};

export default MyCarousel;





