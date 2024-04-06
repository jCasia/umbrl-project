import Link from 'next/link';
import { FOOTER_LINKS } from '@/constants';

const FooterLink = () => {
  return (
    <div className='flex flex-col gap-4'>
      <p>Company</p>
      <nav>
        <ul>
          {FOOTER_LINKS.map((link) => {
            const { href, key, label } = link;
            return (
              <li key={key}>
                <Link href={href}>{label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default FooterLink;
