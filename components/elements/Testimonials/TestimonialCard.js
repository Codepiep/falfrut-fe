import {StarIcon} from '@heroicons/react/24/solid';

const TestimonialCard = ({name, rating, comment}) => {
  const ratingPLaceholderArray = Array.from({length: 5}, () => 1);
  return (
    <div className="w-[280px] h-[200px] lg:p-[20px] flex flex-col gap-2 border-primary odd:border-r-2 odd:border-b-2 even:border-b-2 evev:border-l-2">
      <span className="text-primary font-josefin text-[24px] uppercase leading-[24px]">
        {name}
      </span>
      <div className="flex gap-1">
        {ratingPLaceholderArray.map((_, i) => {
          const newIndex = i + 1;
          if (newIndex <= rating) {
            return <StarIcon key={i} className="w-7 h-7 text-yellow-300" />;
          } else {
            return <StarIcon key={i} className="w-7 h-7 text-backgroundGrey" />;
          }
        })}
      </div>
      <span className="h-full overflow-hidden font-signika text-primary">
        {comment}
      </span>
    </div>
  );
};

export {TestimonialCard};
