import React from 'react';

const ButtonOutline = function ButtonOutlineComponent(props) {
  const { onClick, children, ...restProps } = props;
  const buttonType = props.type || 'button';

  return (
    <button
      type={buttonType}
      className="bg-white border rounded py-1 px-4 text-slate-800 hover:bg-primary-400 hover:border-primary-400 hover:text-white transition-all"
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default ButtonOutline;
