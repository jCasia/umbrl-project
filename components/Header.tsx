import { rubik } from '../app/ui/fonts';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='w-full flex justify-between items-center px-60 py-5'>
      <h1 className={`${rubik.className} text-2xl font-bold`}>Brainwave.io</h1>
      <Nav />
    </header>
  );
};

export default Header;
