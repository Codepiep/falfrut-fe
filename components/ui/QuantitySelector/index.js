import {PlusIcon, MinusIcon} from '@heroicons/react/24/solid';
import {useRef, useState} from 'react';

const QuantitySelector = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [input, setInput] = useState(1);
  const inputRef = useRef();

  const inputChangeHandler = e => {
    const inputValue = inputRef.current.value;
    setErrorMessage('');
    if (inputValue === '') setErrorMessage('please select a quantity');
    if (inputValue > 10)
      setErrorMessage('should be less than 10 and more than 0');
    setInput(inputValue);
  };

  const incrementHandler = e => {
    if (input < 10) {
      setErrorMessage('');
      setInput(prev => parseInt(prev) + 1);
    } else {
      setErrorMessage('should be less than 10 and more than 0');
    }
  };

  const decrementHandler = e => {
    if (input > 1) {
      setErrorMessage('');
      setInput(prev => parseInt(prev) - 1);
    } else {
      setErrorMessage('should be less than 10 and more than 0');
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center md:gap-3 md:h-[38px]">
        <span
          className="bg-primary rounded-full md:p-[8px] cursor-pointer"
          onClick={incrementHandler}>
          <PlusIcon className="w-5 h-full text-white" />
        </span>
        <input
          ref={inputRef}
          value={input}
          type="number"
          onChange={inputChangeHandler}
          readOnly
          className=" h-full rounded-full bg-accentLight md:w-[60px]  focus:outline-none text-center cursor-inherit"
        />
        <span
          className="bg-primary rounded-full md:p-[8px] cursor-pointer"
          onClick={decrementHandler}>
          <MinusIcon className="w-5 h-full text-white" />
        </span>
      </div>
      <div className="w-full flex items-center justify-center">
        <span className="w-content text-rose-600 text-center text-red text-sm">
          {errorMessage}
        </span>
      </div>
    </div>
  );
};

export {QuantitySelector};
