import React from "react";

type SecondaryTextProps = {
  className?: string;
  children: React.ReactNode;
};

const SecondaryText: React.FC<SecondaryTextProps> = ({
  className = "text-darkest-gray",
  children,
}) => {
  return <span className={className}>{children}</span>;
};

export default SecondaryText;
