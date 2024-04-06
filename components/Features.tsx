import { FEATURES } from '@/constants';
import FeaturesCard from './FeaturesCard';

const Features = () => {
  return (
    <section className='text-center flex flex-col justify-center items-center gap-20 my-10'>
      <div className='flex flex-col max-w-[610px] gap-10 justify-center  '>
        <h2 className='font-bold text-5xl justify-center'>
          Check our features
        </h2>
        <p className='text-[19px] font-light'>
          With lots of unique blocks, you can easily build a page without
          coding. Build your next consultancy website within few minutes
        </p>
      </div>
      <div className='grid grid-cols-3 grid-rows-2 text-start gap-8'>
        {FEATURES.map((item) => {
          return <FeaturesCard {...item} key={item.title} />;
        })}
      </div>
    </section>
  );
};

export default Features;
