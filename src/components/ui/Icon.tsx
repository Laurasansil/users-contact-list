import React from "react";

interface IconProps {
  src: string;
  alt: string;
}

const Icon: React.FC<IconProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className="w-5 h-5 mr-2 ml-2" />;
};

export default Icon;
