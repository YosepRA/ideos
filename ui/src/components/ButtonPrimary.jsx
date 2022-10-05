import React from 'react';

const ButtonPrimary = function ButtonPrimaryComponent({ onClick, children }) {
  return (
    <button
      type="button"
      className="bg-primary-400 p-1 text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
