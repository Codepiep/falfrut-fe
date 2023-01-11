import Link from 'next/link';
const GradientButton = ({href, className, value}) => {
  return (
    <Link
      href={href || '#'}
      className={`max-w-fit lg:px-[35px] lg:py-[12px] bg-gradient-to-r from-accentLight to-primary flex items-center text-gradientButton font-josefin rounded-full ${className}`}>
      {value}
    </Link>
  );
};

export {GradientButton};
