import {SidebarSearchBar} from './SidebarSearchBar';
import {CategoryCheckbox} from './CategoryCheckbox';

const CategorySidebar = ({className, categoriesData}) => {
  return (
    <div
      className={`${className} bg-accentLight/10 rounded-[30px] h-screen md:p-[15px] text-black`}>
      <SidebarSearchBar />
      <div className="mt-10">
        <h2 className="text-black font-josefin font-extrabold text-[40px]">
          Categories
        </h2>
        <div className="md:h-[40px] w-full flex flex-col gap-5">
          {categoriesData.map((category, i) => (
            <CategoryCheckbox
              key={i}
              label={category.name}
              totalItems={category.totalItems}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export {CategorySidebar};
