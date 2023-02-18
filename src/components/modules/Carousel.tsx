import Image from 'next/image';
import React from 'react';

import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


interface Props {
  images: {src:string,des:string}[];
}

const MyCarousel: React.FC<Props> = ({ images }) => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      className="relative object-contain"
    >
      {images.map(({src,des}:{src:string,des:string})=> (
        <div key={src} className=" mx-auto h-96 overflow-hidden p-4 bg-white w-fit rounded-lg flex justify-center items-center">
          <Image src={src} alt={des} className="h-full aspect-auto object-contain  rounded-lg"/>
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;





