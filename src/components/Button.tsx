import React from 'react';
import classNames from 'classnames';

type ButtonProps = {
  onClick: () => void;
  label: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  label = 'Click Me',
  onClick,
  disabled = false,
}) => {
  const baseAttr = 'transition';
  const shapeAttr = 'bg-primary border-solid rounded-md p-4';
  const fontAttr = 'text-white font-semibold text-xs';
  const disabledAttr =
    'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:cursor-not-allowed';
  const cursorAttr = 'cursor-pointer';

  return (
    <button
      className={classNames(baseAttr, shapeAttr, fontAttr, cursorAttr, {
        [disabledAttr]: disabled,
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
