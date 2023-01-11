import Image from 'next/image';
import Link from 'next/link';
import {BodyContainer, TopSearchBar, GradientButton} from '../../ui';

const SearchHeader = () => {
  return (
    <div className="lg:bg-accentBackground lg:h-[94px] w-full flex items-center">
      <BodyContainer className="flex items-center">
        <Link href="/" className="w-fit">
          <Image
            src="/images/falfrut-logo.png"
            alt="falfrut website logo"
            width={200}
            height={50}
            style={{aspectRatio: 'auto'}}
            priority
          />
        </Link>
        <TopSearchBar className="flex-1" />
        <GradientButton value="Login now" className="w-fit" />
      </BodyContainer>
    </div>
  );
};

export {SearchHeader};
