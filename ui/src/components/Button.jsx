import React, { forwardRef } from 'react';

import { cls } from '../utilities/helpers.js';

const classes = {
  base: 'rounded focus:outline-none transition ease-in-out duration-300',
  disabled: 'opacity-50 cursor-not-allowed',
  pill: 'rounded-full',
  size: {
    small: 'px-2 py-1 text-sm',
    normal: 'px-4 py-2',
    large: 'px-8 py-3 text-lg',
  },
  variant: {
    primary:
      'bg-primary-400 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white',
    secondary:
      'bg-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white',
    danger:
      'bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white',
    outline:
      'bg-white border-2 border-slate-300 py-1 px-4 text-slate-800 hover:bg-primary-400 hover:border-primary-400 hover:text-white',
  },
};

const Button = function ButtonComponent(
  {
    children,
    type = 'button',
    className,
    variant = 'primary',
    size = 'normal',
    disabled = false,
    ...props
  },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      className={cls(`
    ${classes.base}
    ${classes.size[size]}
    ${classes.variant[variant]}
    ${disabled && classes.disabled}
    ${className}
  `)}
      {...props}
    >
      {children}
    </button>
  );
};

export default forwardRef(Button);
