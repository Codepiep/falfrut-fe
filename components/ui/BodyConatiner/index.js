const BodyContainer = ({children, className}) => {
  return <div className={`lg:px-10 w-full ${className}`}>{children}</div>;
};

export {BodyContainer};
