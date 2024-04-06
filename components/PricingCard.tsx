import Image from 'next/image';
import Button from './Button';

interface PricingCardProps {
  name: string;
  price: number;
  lorem: string;
}

const PricingCard = ({ name, price, lorem }: PricingCardProps) => {
  return (
    <div className='p-10 border border-[#E7E9ED] flex flex-col gap-7'>
      <p className='uppercase text-colorLightBlue font-bold text-sm'>{name}</p>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-2 items-end'>
          <div className='flex items-end font-bold'>
            <span>$</span>
            <p className='text-6xl'>{price}</p>
          </div>
          <span>/ month</span>
        </div>
        <p className='text-colorBlack text-sm'>billed monthly</p>
      </div>
      <ul>
        <li className='flex items-center'>
          <Image
            src='/Path.png'
            width={17}
            height={12}
            role='presentation'
            alt='green tick'
            className='mr-2'
          />
          {lorem}
        </li>
        <li className='flex items-center'>
          <Image
            src='/Path.png'
            width={17}
            height={12}
            role='presentation'
            alt='green tick'
            className='mr-2'
          />
          {lorem}
        </li>
        <li className='flex items-center'>
          <Image
            src='/Path.png'
            width={17}
            height={12}
            role='presentation'
            alt='green tick'
            className='mr-2'
          />
          {lorem}
        </li>
        <li className='flex items-center'>
          <Image
            src='/Path.png'
            width={17}
            height={12}
            role='presentation'
            alt='green tick'
            className='mr-2'
          />
          {lorem}
        </li>
        <li className='flex items-center'>
          <Image
            src='/Path.png'
            width={17}
            height={12}
            role='presentation'
            alt='green tick'
            className='mr-2'
          />
          {lorem}
        </li>
      </ul>
      <Button label='Start Free Trial' type='button' />
      <p className='text-sm'>no credit card required</p>
    </div>
  );
};

export default PricingCard;
