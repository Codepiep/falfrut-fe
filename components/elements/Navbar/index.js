import {BodyContainer, NavigationCartButton} from '../../ui';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {PAGES} from '../../../utils';

const Navbar = () => {
  const router = useRouter();

  let activePage = '';
  switch (router.pathname) {
    case '/':
      activePage = PAGES.HOME;
      break;
    case '/categories':
      activePage = PAGES.CATEGORY;
      break;
    default:
      break;
  }
  console.log(activePage);
  return (
    <nav className="lg:w-full lg:h-[70px] bg-gradient-to-r from-accentLight to-primary text-white">
      <BodyContainer className="flex justify-between h-full items-center">
        <ul className="flex flex-1 justify-evenly font-bold">
          <Link href="#" className="flex text-center">
            <li
              className={`lg:w-[85px] ${
                activePage === PAGES.HOME
                  ? "relative after:content-['\\25B2'] after:text-white after:absolute after:bottom-[-31px] after:left-[35px]"
                  : 'text-white/50'
              }`}>
              Home
            </li>
          </Link>
          <Link href="#">
            <li
              className={`lg:w-[85px] ${
                activePage === PAGES.CATEGORY
                  ? "relative after:content-['\\25B2'] after:text-white after:absolute after:bottom-[-30px] after:left-[35px]"
                  : 'text-white/50'
              }`}>
              Categories
            </li>
          </Link>
          <Link href="#">
            <li
              className={`lg:w-[85px] ${
                activePage === PAGES.ABOUT
                  ? "relative after:content-['\\25B2'] after:text-white after:absolute after:bottom-[-30px] after:left-[35px]"
                  : 'text-white/50'
              }`}>
              About US
            </li>
          </Link>
          <Link href="#">
            <li
              className={`lg:w-[85px] ${
                activePage === PAGES.CONTACT
                  ? "relative after:content-['\\25B2'] after:text-white after:absolute after:bottom-[-30px] after:left-[35px]"
                  : 'text-white/50'
              }`}>
              Contact Us
            </li>
          </Link>
        </ul>
        <NavigationCartButton className="w-content" />
      </BodyContainer>
    </nav>
  );
};

export {Navbar};
