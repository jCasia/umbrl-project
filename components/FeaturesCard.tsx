import Image from 'next/image';

interface FeaturesCardProps {
  image: string;
  title: string;
  info: string;
}

const FeaturesCard = ({ image, title, info }: FeaturesCardProps) => {
  return (
    <div className='flex gap-3 justify-center '>
      <Image
        src={`/${image}`}
        alt='feauture images'
        width={30}
        height={25}
        className='self-start w-auto h-auto'
      />
      <div>
        <h3 className='text-xl'>{title}</h3>
        <p className='text-ColorBlack font-light'>{info}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
