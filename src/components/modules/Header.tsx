
import { FaSearch } from 'react-icons/fa';
import Navbar from './Navbar';


export default function Header() {
  return (
    <header className="bg-gray-800 p-3 w-full rounded-t-md">
      <div className='flex flex-col items-center  sm:flex-row '>
        <Navbar />
        <div className="relative ml-auto ">
          <input type="text" placeholder="Search..." className="bg-gray-700 p-2 text-white rounded-full w-full flex items-center justify-center" />
          <button className="absolute right-0 top-0 mr-3 mt-1 p-2">
            <FaSearch className="fill-current text-white " />
          </button>
        </div>
      </div>

    </header>
  );
};

