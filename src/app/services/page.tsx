"use client";

import { PageWrapper } from '@/components/modules';
import { FaHotel, FaPlane, FaHiking, FaTree, FaCity, FaAnchor } from 'react-icons/fa';

export default function Services() {

  const links = [
    {
      name: 'Guest(s) Transfer',
      path: '/services/gust-transfer',
      icon: <FaHotel />,
      image: './hotel.jpg'
    },
    {
      name: 'Hotel Bookings',
      path: '/services/hotel-bookings',
      icon: <FaHotel />,
      image: './hotel.jpg'
    },
    {
      name: 'Flight Booking',
      path: '/services/flight-booking',
      icon: <FaPlane />,
      image: './flight.jpg'
    },
    {
      name: 'Excursion',
      path: '/services/excursion',
      icon: <FaHiking />,
      image: './excursion.jpg'
    },
    {
      name: 'Game Safaris',
      path: '/services/game-safaris',
      icon: <FaTree />,
      image: './safari.jpg'
    },
    {
      name: 'City Tours',
      path: '/services/city-tours',
      icon: <FaCity />,
      image: './city.jpg'
    },
    {
      name: 'Marine Tours',
      path: '/services/marine-tours',
      icon: <FaAnchor  className="" size ="30" />,
      image: './marine.jpg'
    }
  ];

  return (
    <PageWrapper>
    <div className="flex flex-col p-6">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-4xl text-center">Our Services</h2>
      </div>
      {links.map(link => (

        // <Link to={link.path} key={link.name}>
          <div className="flex gap-5 py-4 items-center">
            {/* <img src={link.image} alt={link.name} /> */}
            {link.icon}
            <h3 className="font-semibold text-2xl ">{link.name}</h3>
          </div>
        // </Link>


      ))
      }

    </div >
</PageWrapper>
  )
}