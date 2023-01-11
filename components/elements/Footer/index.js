import Image from 'next/image';
import Link from 'next/link';
import {FaFacebook, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa';
import {GradientButton} from '../../ui';

const Footer = () => {
  return (
    <footer className="bg-accent">
      <div className="md:py-[70px] flex w-full">
        <div className="flex items-center flex-col gap-7 md:w-[50%]">
          <Image
            src="/images/falfrut-logo.png"
            alt="falfrut website logo"
            width={200}
            height={50}
            style={{aspectRatio: 'auto'}}
            priority
          />
          <div className="flex justify-evenly lg:w-[400px] ">
            <Link href="">
              <FaFacebook className="text-white w-8 h-8" />
            </Link>
            <Link href="">
              <FaTwitter className="text-white w-8 h-8" />
            </Link>
            <Link href="">
              <FaInstagram className="text-white w-8 h-8" />
            </Link>
            <Link href="">
              <FaYoutube className="text-white w-8 h-8" />
            </Link>
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="enter your email"
              className="bg-accentLight/20 text-white placeholder:text-white rounded-[16px] px-[20px] py-[12px] focus:outline-none lg:w-[400px]"
            />
            <div className="w-full flex justify-end mt-2">
              <button className="bg-gradient-to-r from-accentLight to-primary md:px-[30px] md:py-[10px] text-white text-center rounded-full font-bold leading-[20px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-evenly text-black text-[24px] font-bold">
          <div>
            <ul className="flex flex-col gap-10">
              <Link href="#">
                <li>Home</li>
              </Link>
              <Link href="#">
                <li>Products</li>
              </Link>
              <Link href="#">
                <li>Categories</li>
              </Link>
              <Link href="#">
                <li>Featured</li>
              </Link>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-10">
              <Link href="#">
                <li>About Us</li>
              </Link>
              <Link href="#">
                <li>Contact Us</li>
              </Link>
              <Link href="#">
                <li>Terms & Conditions</li>
              </Link>
              <Link href="#">
                <li>Privacy Policy</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export {Footer};
