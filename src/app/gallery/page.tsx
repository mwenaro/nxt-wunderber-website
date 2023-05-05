"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../assets/images';
import { PageWrapper } from '@/components/modules';
import { IImage } from '@/types';


const Gallery: React.FC = () => {
  const imgPath = '/assets/images/16x9/';

 let _images: IImage[] = [];
 for (let i = 1; i <= 19; i++) {
 _images.push(
  {
    src:`${imgPath}${i}.jpg`,
    des:`Image ${i}`
}
 );
  
 }

  return (
    <PageWrapper>
    <div className="bg-gray-200 p-6">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold mb-4">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-1 md:gap-4 wrap">



          {
            _images.sort(()=>Math.random()*0.5).map((pic: { src: string, des: string }) =>
              <motion.img
              key={pic.src}
                src={pic.src}
                alt={pic.des}
                className="rounded-lg w-full aspect-auto overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                loading={'lazy'}
              />
            )

          }

        </div>
      </div>
    </div>
    </PageWrapper>
  )
}

export default Gallery;