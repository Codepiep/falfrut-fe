const CategoryCheckbox = ({label, totalItems}) => {
  return (
    <div className="flex items-center h-full w-full text-black">
      <input
        name="vegetable-category-check"
        type="checkbox"
        className="peer h-[21px] w-[21px]"
      />
      <label
        htmlFor="vegetable-category-check"
        className=" peer-checked:bg-accentLight w-content h-[40px] w-full flex items-center ml-2 text-[20px] bg-accentLight/20 rounded-[8px] p-[10px] font-bold leading-[10px]">
        {`${label} (${totalItems})`}
      </label>
    </div>
  );
};

export {CategoryCheckbox};
