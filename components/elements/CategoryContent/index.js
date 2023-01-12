import {ProductCard} from '../ProductCard';

const cardsPlaceholderArray = Array.from({length: 10}, () => 1);
const CategoryContent = ({className}) => {
  return (
    <div className={`${className} md:p-[15px] flex flex-wrap gap-10`}>
      {cardsPlaceholderArray.map((item, i) => (
        <ProductCard key={i} />
      ))}
    </div>
  );
};

export {CategoryContent};
