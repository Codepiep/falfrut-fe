import Image from 'next/image';
import {
  WishlistIcon,
  QuantitySelector,
  CardName,
  CardPrice,
  AddToCartButton,
} from '../../ui';

const ProductCard = () => {
  return (
    <div className="bg-white lg:max-w-[310px] md:p-[15px] max-w-fit rounded-[28px] md:drop-shadow-[0_10px_10px_rgb(0,0,0,0.11)] flex flex-col items-center gap-1">
      <div className=" md:absolute md:right-[15px] md:top-[15px]">
        <WishlistIcon />
      </div>
      <Image
        src="/images/card-image.png"
        alt="product-image"
        height={210}
        width={280}
        style={{height: '140px', width: '210px', objectFit: 'cover'}}
      />
      <CardName>Tomato</CardName>
      <CardPrice price="120" quantityType="kg" />
      <QuantitySelector />
      <AddToCartButton />
    </div>
  );
};

export {ProductCard};
