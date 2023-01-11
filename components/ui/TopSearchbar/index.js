import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import {useRouter} from 'next/router';

const TopSearchBar = ({className}) => {
  const router = useRouter();

  const onSearchFormSubmit = e => {
    e.preventDefault();
    router.push('#');
  };
  return (
    <div className={` flex justify-center ${className}`}>
      <form
        className="lg:w-[475px] lg:h-[55px]  flex items-center bg-accentLight rounded-16"
        onSubmit={onSearchFormSubmit}>
        <input
          className="h-full flex-1 bg-accentLight  ml-4 placeholder:text-textBlack/50 focus:outline-none"
          type="text"
          placeholder="use me to find something ?"
        />
        <button className="h-full w-fit lg:px-4">
          <MagnifyingGlassIcon className="w-7 h-7 text-primary" />
        </button>
      </form>
    </div>
  );
};

export {TopSearchBar};
