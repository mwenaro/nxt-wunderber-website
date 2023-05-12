"use client"

import { useState } from 'react';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';

import Navbar from './Navbar';


export default function Header() {
  const [navToggle, setNavToggle] = useState<boolean>(false);
  return (
    <header className="w-full pt-10  sm:pt-0 ">
      <div className='h-[10px] sm:hidden  relative'>
        {/* <div></div> */}
      <button
        onClick={() => setNavToggle(!navToggle)}
        className="cursor-pointer pr-4 z-10 sm:hidden  absolute top-1  right-0 "
      >
        {navToggle ? <FaTimes size={30} className='text-white'/> : <FaBars size={30} />}
      </button>
      </div>
     
      <div className={`${navToggle ? 'flex' : 'hidden'} flex-col items-center  sm:flex-row  bg-gray-800 p-3 w-full rounded-t-md`}>

        <Navbar />
        <div className="w-full md:w-1/3 flex-1 max-w-fit relative ml-auto ">
          <input type="text" placeholder="Search..." className="bg-gray-700 p-2 text-white rounded-full w-full flex items-center justify-center" />
          <button className="absolute right-0 top-0 mr-3 mt-1 p-2">
            <FaSearch className="fill-current text-white " />
          </button>
        </div>
      </div>
      <div className={`hidden sm:flex flex-col items-center  sm:flex-row  bg-gray-800 p-3 w-full rounded-t-md`}>

        <Navbar />
        <div className="w-full md:w-1/3 flex-1 max-w-fit relative ml-auto ">
          <input type="text" placeholder="Search..." className="bg-gray-700 p-2 text-white rounded-full w-full flex items-center justify-center" />
          <button className="absolute right-0 top-0 mr-3 mt-1 p-2">
            <FaSearch className="fill-current text-white " />
          </button>
        </div>
      </div>

    </header>
  );
};

