import Image from 'next/image';
import {QuantitySelector, CardPrice} from '../../ui';
import {RiDeleteBinLine} from 'react-icons/ri';

const CartCard = ({item}) => {
  //TODO: change image alt to item name
  return (
    <div className="w-full bg-accentLight/40 text-black rounded-[16px] flex justify-between items-center md:p-[15px] text-black font-extrabold font-signika">
      <Image
        src={`${item.image}`}
        width={130}
        height={130}
        alt="cart image"
        style={{hight: '13px', width: '130px'}}
      />
      <div className="text-[28px]">{item.name}</div>
      <QuantitySelector />
      <CardPrice price={item.price} quantityType={item.quantityType} />
      <div className="flex flex-col items-center">
        <span className="text-[16px]">Total:</span>
        <span className="text-[28px]">₹120</span>
      </div>
      <RiDeleteBinLine className="w-10 h-10 text-red-600 cursor-pointer" />
    </div>
  );
};

export {CartCard};
