import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  variant = "primary",
  Icon,
  iconColor = "text-white",
}) => {
  const baseStyles =
    "flex items-center px-4 py-2 rounded-[18px] text-black font-semibold";
  const variants = {
    primary: "bg-primary-main text-white",
    secondary: "bg-[#FFCC00] text-black",
    danger: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-blue-500 text-blue-500",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
      {Icon && <Icon className={`ml-2 text-[20px] ${iconColor}`} />}
    </button>
  );
};

export default Button;
