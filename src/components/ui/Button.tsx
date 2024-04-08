import React from "react";

type ButtonProps = {
  onClick: () => void;
  label: string;
};

const Button: React.FC<ButtonProps> = ({ label = "Click Me", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-white h-auto w-5 border-solid rounded-md bg-blue-600 cursor-pointer text-xs p-4"
    >
      {label}
    </button>
  );
};

export default Button;
