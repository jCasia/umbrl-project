import Image from 'next/image';
import React from 'react';
import PricingCard from './PricingCard';
import { PRICING } from '@/constants';

const Pricing = () => {
  return (
    <section className='flex flex-col items-center m-20 gap-10'>
      <div className='flex gap-5 '>
        <div className='flex justify-center items-center gap-3'>
          <p>Monthly</p>
          <Image
            src='/rectangle.png'
            width={72}
            height={33}
            alt='scroll picture'
          />
        </div>
        <div className='flex justify-center items-center gap-3'>
          <p>Yearly</p>
          <span className='rounded-full bg-gray-100 p-2 text-colorLightBlue font-bold '>
            Save 25%
          </span>
        </div>
      </div>
      <div
        className='flex gap-7
        '
      >
        {PRICING.map((items) => {
          return <PricingCard {...items} key={items.name} />;
        })}
      </div>
    </section>
  );
};

export default Pricing;
