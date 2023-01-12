import {CheckoutField} from './checkoutField';
import {GradientButtonFull} from '../../ui';

const CheckoutForm = () => {
  const totalPrice = 200;
  return (
    <div className="bg-accent md:max-w-[35%] md:w-[35%] h-full m-4 md:p-4 text-black font-signika rounded-[30px]">
      <div className="bg-white/50 rounded-[30px] md:px-[15px] md:py-[25px]">
        <div className="flex items-center  mb-4 gap-2">
          <input
            name="checkout-payout-type"
            type="radio"
            className=" cursor-pointer peer/card h-5 w-5 appearance-none text-black border-2 border-black rounded-full grid place-content-center before:content-[''] before:h-3 before:w-3 before:rounded-full before:shadow-[inset_10px_10px_rgba(0,0,0,1)] before:scale-0 checked:before:scale-100"
          />
          <label
            htmlFor="checkout-payout-type"
            className="text-[20px] font-bold">
            Card Details
          </label>
        </div>
        <form className="flex flex-col gap-3">
          <CheckoutField
            name="checkout-card-number"
            label="Card Number"
            type="number"
            placeholder="xxxx-xxxx-xxxx-xxxx"
          />

          <div className="flex justify-between gap-2">
            <CheckoutField
              className="md:max-w-[50%]"
              name="checkout-card-expiry"
              label="Card Expiry"
              type="number"
              placeholder="MM/YY"
            />
            <CheckoutField
              className="md:max-w-[45%]"
              name="checkout-card-cvv"
              label="CVV"
              type="number"
              placeholder="xxx"
            />
          </div>
          <CheckoutField
            name="checkout-card-name"
            label="Card Name"
            type="text"
            placeholder="Your name"
          />
        </form>
      </div>
      <div className="flex items-center cursor-pointer mb-4 gap-2 bg-white/50 rounded-[20px] md:px-[25px] md:py-[18px] mt-4">
        <input
          name="checkout-payout-type"
          type="radio"
          className="cursor-pointer peer/card h-5 w-5 appearance-none text-black border-2 border-black rounded-full grid place-content-center before:content-[''] before:h-3 before:w-3 before:rounded-full before:shadow-[inset_10px_10px_rgba(0,0,0,1)] before:scale-0 checked:before:scale-100"
        />
        <label htmlFor="checkout-payout-type" className="text-[20px] font-bold">
          Cash on delivery
        </label>
      </div>
      <div className="bg-white/50 md:px-[20px] md:py-[20px]  rounded-[20px] text-[24px] md:mt-20">
        <span className="font-light font-josefin">Grand Total:</span>{' '}
        <span className="font-extrabold">₹{totalPrice}</span>
      </div>
      <div className="mt-5">
        <GradientButtonFull value="checkout" />
      </div>
    </div>
  );
};

export {CheckoutForm};
