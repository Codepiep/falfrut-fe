import Image from 'next/image';

const FeatureCard = ({iconUrl, data}) => {
  return (
    <div className=" lg:w-[360px] lg:h-[360px] rounded-[50%] flex flex-col justify-center items-center md:gap-5 bg-white  drop-shadow-[0_30px_60px_rgb(0,0,0,0.11)] lg:p-[90px] ">
      <Image
        src={iconUrl}
        alt={data}
        height={120}
        width={120}
        style={{height: '120px', width: '120px'}}
      />
      <span className="text=[25px] text-primary font-black uppercase font-overpass">
        {data}
      </span>
    </div>
  );
};

export {FeatureCard};
