import Link from 'next/link';

const SolidButton = ({href, value, type}) => {
  return (
    <Link
      href={href}
      className={`${
        type === 'primary'
          ? 'bg-primary'
          : type === 'accentLight'
          ? 'bg-accentLight'
          : ''
      } font-medium lg:px-[40px] lg:py-[15px] rounded-full w-fit drop-shadow-lg`}>
      {value}
    </Link>
  );
};

export {SolidButton};
