import React from "react";

type RowProps = {
  children: React.ReactNode;
  className?: string;
};

const Row: React.FC<RowProps> = ({ children, className = "flex" }) => {
  return <div className={className}>{children}</div>;
};

export default Row;
