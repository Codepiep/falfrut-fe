import {HeartIcon} from '@heroicons/react/24/outline';
import {HeartIcon as SolidHeartIcon} from '@heroicons/react/24/solid';
import {useState} from 'react';

const WishlistIcon = () => {
  const [liked, setLiked] = useState(false);
  return (
    <span
      className={` hover:cursor-pointer active:bg-wishIconRed/[0.14] h-9 w-9 flex justify-center items-center rounded-full ${
        liked ? 'hover:bg-wishIconRed/[0.14] ' : 'hover:bg-backgroundGrey/10'
      }`}
      onClick={() => setLiked(prev => !prev)}>
      {!liked && <HeartIcon className="h-6 w-6 " />}
      {liked && <SolidHeartIcon className="h-6 w-6 text-wishIconRed" />}
    </span>
  );
};

export {WishlistIcon};
