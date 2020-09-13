import React from 'react';

const Card = ({ className, children, style }) => (
  <div
    className={`lg:px-12 px-1 py-4 pb-0 rounded-lg border border-solid border-gray-200 ${className}`}
    style={{
      boxShadow: 'rgba(0, 0, 0, 0.08) 10px 0px 5px -5px',
      borderRadius: '0px',
      ...style
    }}
  >
    {children}
  </div>
);

export default Card;
