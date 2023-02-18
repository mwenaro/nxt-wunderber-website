import Link from 'next/link';
import { navLinks } from '../../constants';

export default function Navbar ()  {
  return (
    <nav className=" w-auto">
      
        <ul className="w-full flex flex-col sm:flex-row items-center ">
          {
            navLinks.map(({link,label}:{link:string,label:string,icon?:string})=><li key ={link}>
            <Link href={link} className="w-full md:inherit bg-gray-700 sm:bg-inherit my-2 text-white text-center font-medium block py-2 px-4">{label}</Link>
          </li>)}
          
         
        </ul>
      
    </nav>
  );
};


