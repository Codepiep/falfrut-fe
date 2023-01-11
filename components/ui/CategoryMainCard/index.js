import {SolidButton} from '../../ui';
import {colorKeys, CATEGORIES} from '../../../utils';

const VEGETABLES = 'vegetables';
const FRUITS = 'fruits';

const CategoryMainCard = ({category}) => {
  const vegetableContent = {
    title: 'vegetables',
    subtitle: '100% organic products',
    backgroundColorClass: 'bg-primary/95',
    buttonColor: colorKeys.accentLight,
    bgImageClass: "bg-[url('/images/vegetables-card-bg.png')]",
    fgImageClass: "bg-[url('/images/vegetables-card-fg.png')]",
    shadowCLass: 'md:drop-shadow-[0_10px_10px_rgb(1,96,75,0.46)]',
  };

  const fruitContent = {
    title: 'fruits',
    subtitle: '100% fresh products',
    backgroundColorClass: 'bg-accentLight/95',
    buttonColor: colorKeys.primary,
    bgImageClass: "bg-[url('/images/fruits-card-bg.png')]",
    fgImageClass: "bg-[url('/images/fruits-card-fg.png')]",
    shadowCLass: 'md:drop-shadow-[0_10px_10px_rgb(1,208,170,0.46)]',
  };

  return (
    <div
      className={`lg:h-[330px] lg:w-[700px] rounded-[58px] relative overflow-hidden ${
        category === CATEGORIES.VEGETABLES
          ? vegetableContent.shadowCLass
          : category === CATEGORIES.FRUITS
          ? fruitContent.shadowCLass
          : ''
      } `}>
      <div
        className={` relative w-full h-full ${
          category === CATEGORIES.VEGETABLES
            ? vegetableContent.bgImageClass
            : category === CATEGORIES.FRUITS
            ? fruitContent.bgImageClass
            : ''
        } `}>
        <span
          className={`h-full w-full absolute z-0 ${
            category === CATEGORIES.VEGETABLES
              ? vegetableContent.backgroundColorClass
              : category === CATEGORIES.FRUITS
              ? fruitContent.backgroundColorClass
              : ''
          }`}
        />
        <div className="relative h-full text-white z-10 lg:px-[40px] lg:py-[25px] flex flex-col justify-between z-30">
          <div className="uppercase">
            <h2 className="font-extrabold text-[60px]">
              {category === CATEGORIES.VEGETABLES
                ? vegetableContent.title
                : category === CATEGORIES.FRUITS
                ? fruitContent.title
                : ''}
            </h2>
            <span className="text-[30px]">
              {category === CATEGORIES.VEGETABLES
                ? vegetableContent.subtitle
                : category === CATEGORIES.FRUITS
                ? fruitContent.subtitle
                : ''}
            </span>
          </div>
          <SolidButton
            href="#"
            value="Let's shop"
            type={
              category === CATEGORIES.VEGETABLES
                ? vegetableContent.buttonColor
                : category === CATEGORIES.FRUITS
                ? fruitContent.buttonColor
                : ''
            }
          />
        </div>
        <div
          className={` ${
            category === CATEGORIES.VEGETABLES
              ? vegetableContent.fgImageClass
              : category === CATEGORIES.FRUITS
              ? fruitContent.fgImageClass
              : ''
          } w-full h-full z-20 absolute bottom-0 right-0`}
        />
      </div>
    </div>
  );
};

export {CategoryMainCard};
