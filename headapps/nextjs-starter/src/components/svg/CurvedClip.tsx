import React from 'react';

type CurvedClipProps = {
  pos?: 'top' | 'bottom';
} & React.HTMLAttributes<HTMLDivElement>;

const CurvedClip = ({ pos = 'top', className }: CurvedClipProps) => (
  <div
    className={`absolute ${pos}-0 left-0 right-0 text-background dark:text-background-dark pointer-events-none z-1 h-24 ${className}`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1600 197"
      aria-hidden="true"
      preserveAspectRatio="none"
      width="100%"
      height="100%"
      className={`${pos === 'bottom' ? 'rotate-180' : ''}`}
    >
      <path fill="currentColor" d="M0,0V2S1589.99-14.42,1599.94,197.47h.06V0H0Z" />
    </svg>
  </div>
);

export default CurvedClip;
