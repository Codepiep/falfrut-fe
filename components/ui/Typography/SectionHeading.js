const SectionHeading = ({title, subtitle}) => {
  return (
    <>
      <h2 className="leading-10 text-primary font-josefin lg:text-[60px] font-bold">
        {title}
      </h2>
      <p className="text-accent font-overpass lg:text-[20px] font-medium">
        {subtitle}
      </p>
    </>
  );
};

export {SectionHeading};
