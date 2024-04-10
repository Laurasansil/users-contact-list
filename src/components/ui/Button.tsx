import React from "react";

type ButtonProps = {
  onClick: () => void;
  label: string;
};

const Button: React.FC<ButtonProps> = ({ label = "Click Me", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-white font-medium h-auto w-auto border-solid rounded-md bg-primary cursor-pointer text-xs p-4"
    >
      {label}
    </button>
  );
};

export default Button;
