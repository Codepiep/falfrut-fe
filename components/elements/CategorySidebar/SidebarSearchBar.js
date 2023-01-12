import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';

const SidebarSearchBar = () => {
  const categoryFormSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className="w-full">
      <form
        onClick={categoryFormSubmit}
        className="w-full h-[54px] flex items-center justify-center bg-accentLight px-[8px] rounded-full">
        <button className="w-[20%]">
          <MagnifyingGlassIcon className="w-full h-10 text-black" />
        </button>
        <input
          type="text"
          placeholder="search your groceries"
          className="w-[80%] h-full rounded-full bg-accentLight text-black placeholder:text-black/60 focus:outline-none"
        />
      </form>
    </div>
  );
};

export {SidebarSearchBar};
