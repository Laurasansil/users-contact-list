import React from 'react';

type TextProps = {
  className?: string;
  children: React.ReactNode;
};

const Text: React.FC<TextProps> = ({ className = 'text-dark', children }) => {
  return <span className={className}>{children}</span>;
};

export default Text;
