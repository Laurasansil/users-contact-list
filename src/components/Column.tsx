import React from 'react';

type ColumnProps = {
  children: React.ReactNode;
  className?: string;
};

const Column: React.FC<ColumnProps> = ({
  children,
  className = 'flex flex-col w-1/2',
}) => {
  return <div className={className}>{children}</div>;
};

export default Column;
