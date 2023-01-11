import {ShoppingBagIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';

const NavigationCartButton = () => {
  return (
    <Link
      href="#"
      className="flex items-center gap-3 lg:px-[28px] lg:py-2 bg-accentLight rounded-full">
      <ShoppingBagIcon className="w-7 h-7" />
      <span>|</span>
      <span>2</span>
    </Link>
  );
};

export {NavigationCartButton};
