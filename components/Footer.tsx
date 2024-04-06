import { FOOTER_LINKS } from '@/constants';
import FooterLink from './FooterLink';
import Image from 'next/image';

const socialImage = [
  '/logo-twitter.png',
  '/logo-twitter.png',
  '/logo-twitter.png',
  '/logo-twitter.png',
];

const Footer = () => {
  return (
    <footer className='bg-colorBlack text-white px-60'>
      <div className='grid grid-cols-5 grid-rows-1 py-20 '>
        {FOOTER_LINKS.map((item) => {
          return <FooterLink key={item.key} />;
        })}
      </div>
      <div className='flex justify-between pb-6'>
        <p>2024 copyright. All rights reserved</p>
        <ul className='flex gap-10'>
          {socialImage.map((image, index) => {
            return (
              <li key={index}>
                <Image src={image} width={17} height={15} alt='image' />
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
