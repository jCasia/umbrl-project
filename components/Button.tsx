import Image from 'next/image';

interface ButtonProps {
  type: 'submit' | 'button';
  label: string;
  customClass?: string;
}

const Button = ({ type, label, customClass = '' }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${customClass} text-colorBlue bg-gray-100 font-bold p-3 flex items-center hover:text-colorWhite hover:bg-colorLightBlue transition duration-300 `}
    >
      {label}
      <Image
        src='/tail-right.png'
        width={14}
        height={15}
        alt='arrow-right'
        className='ml-4 w-auto h-auto'
      />
    </button>
  );
};

export default Button;
