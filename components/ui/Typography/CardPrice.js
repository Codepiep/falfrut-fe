const CardPrice = ({price, quantityType}) => {
  return (
    <div className="text-primary font-overpass font-extrabold flex items-center lg:gap-1">
      <span className="md:text-[16px] ">₹ {price}</span>
      <span>/</span>
      <span className="md:text-[12px] ">per {quantityType}</span>
    </div>
  );
};

export {CardPrice};
