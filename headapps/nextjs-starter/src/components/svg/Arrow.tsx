import React from 'react';

type ArrowButtonProps = {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled: boolean;
};

const ArrowButton = ({ direction, onClick, disabled }: ArrowButtonProps) => (
  <button
    onClick={onClick}
    aria-label={direction === 'left' ? 'Previous' : 'Next'}
    disabled={disabled}
    className={`px-4 py-1 rounded-lg ${direction === 'left' ? 'mr-2' : ''} ${
      !disabled ? 'bg-accent-muted/40' : ''
    }`}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="28" viewBox="0 0 64.051 28.464">
      <g transform={`${direction === 'left' ? 'rotate(180 32 14.232) ' : ''}translate(0 -137.052)`}>
        <path
          d="M63.68,150.323,49.446,137.35a1.19,1.19,0,0,0-1.3-.185,1.076,1.076,0,0,0-.7,1.075v8.3H1.186A1.142,1.142,0,0,0,0,147.729v7.117a1.141,1.141,0,0,0,1.186,1.185H47.445v8.3a1.117,1.117,0,0,0,.7,1.075,1.156,1.156,0,0,0,1.3-.222L63.68,152.064a1.211,1.211,0,0,0,.37-.889A1.171,1.171,0,0,0,63.68,150.323Z"
          fill={`var(${!disabled ? '--color-background-secondary-dark' : '--color-disabled'})`}
        />
      </g>
    </svg>
  </button>
);

export default ArrowButton;
