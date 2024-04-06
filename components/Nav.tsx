import { NAV_LINKS } from '@/constants';
import Link from 'next/link';
import SignIn from './SignIn';

const Nav = () => {
  return (
    <nav className='font-bold flex gap-10 items-center  '>
      <ul className='flex gap-10 '>
        {NAV_LINKS.map((link) => {
          const { href, key, label } = link;
          return (
            <li key={key}>
              <Link href={href}>{label}</Link>
            </li>
          );
        })}
      </ul>

      <div className='bg-[#D5D7DD] w-[1px] h-6'></div>
      <SignIn />
    </nav>
  );
};

export default Nav;
