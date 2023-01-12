const CheckoutField = ({className, name, label, type, placeholder}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={name} className="text-[18px] font-bold">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="md:px-[15px] md:py-[12px] rounded-[8px]"
      />
    </div>
  );
};

export {CheckoutField};
