const GradientButtonFull = ({value}) => {
  return (
    <button className="capitalize bg-gradient-to-r from-accentLight to-primary w-full md:py-[12px] rounded-full text-white text-[24px] font-bold font-josefin">
      {value}
    </button>
  );
};

export {GradientButtonFull};
