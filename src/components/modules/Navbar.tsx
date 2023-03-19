import Link from 'next/link';
import { navLinks } from '../../constants';

const mainNav = (link: string, label: string) => <Link href={link} className="w-full md:inherit bg-gray-700 sm:bg-inherit my-2 text-white text-center font-medium block py-2 px-4">{label}</Link>
const navContent = navLinks.map(({ link, label }: { link: string, label: string, icon?: string }) => <li key={link} className="w-full md:flex-1">
  {mainNav(link, label)}
</li>)

export default function Navbar() {
  return (
    <nav className="w-full md:w-auto">
      { }

      <ul className="w-full sm:flex flex-col sm:flex-row items-center ">
        {
          navContent
        }


      </ul>

    </nav>
  );
};


