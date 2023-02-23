"use client"

import { WhoWeAre } from '@/components';
import { PageWrapper } from '@/components/modules';
import Image from 'next/image';
import React from 'react';
import { FaMapMarkedAlt, FaGlobe, FaUsers } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <PageWrapper>
    <div className="bg-gray-200 p-6">
      
     

      <div className="container mx-auto">
      <WhoWeAre />

               <div className="flex items-center">
          <FaMapMarkedAlt className="text-4xl mr-4" />
          <h2 className="text-xl font-medium">Mission</h2>
        </div>
        <p className="text-lg mb-4">To create unforgettable travel experiences for our clients by providing exceptional service and expert advice.</p>

        <div className="flex items-center">
          <FaGlobe className="text-4xl mr-4" />
          <h2 className="text-xl font-medium">Motto</h2>
        </div>
        <p className="text-lg mb-4">&ldquo;Route of Wonders&rdquo;</p>

        <div className="flex items-center">
          <FaUsers className="text-4xl mr-4" />
          <h2 className="text-xl font-medium">Vision</h2>
        </div>
        <p className="text-lg mb-4">To be the premier travel agency, renowned for providing personalized and exceptional travel experiences to our clients.</p>

        <div className="relative rounded-lg overflow-hidden">
            <Image src="/assets/images/4.3/pic10.jpg" width={400} height ={300} alt="image1" className="w-full h-auto object-cover" />
        </div>
        <div className="relative rounded-lg overflow-hidden">
            <Image src="/assets/images/4.3/pic18.jpg" width={400} height ={300} alt="image2" className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
    </PageWrapper>
  );
};

export default About;
