import React from 'react';

const HeroBlob = ({ isMobile }: { isMobile?: boolean }) => {
  return isMobile ? (
    <div className="absolute -top-10 left-0 w-113 h-130 -z-10 pointer-events-none">
      <svg
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M327.6,296.3Q301,342.5,252,368.2Q203,394,147.1,369.7Q91.3,345.5,70.8,292.8Q50.4,240.2,43.8,180.2Q37.3,120.2,88.8,83.6Q140.3,47,200.6,37.3Q260.9,27.5,309.8,71.1Q358.6,114.8,356.8,177.4Q355,240,327.6,296.3Z"
          className="fill-background-input dark:fill-background-secondary-dark"
        />
      </svg>
    </div>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 964.965 901.187"
      className={`w-full h-full`}
    >
      <defs>
        <filter
          id="Path_649"
          x="0"
          y="0"
          width="964.965"
          height="901.187"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="22.5" result="blur" />
          <feFlood floodOpacity="0.161" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g filter="url(#Path_649)">
        <path
          d="M3009.8,682.514c55.752-174.269,131.081-312.382,20.048-503.607s-476.518-65.688-714.006,119.7S2631.98,824.108,2706,837.246,2935.779,892.716,3009.8,682.514Z"
          transform="translate(-2189.54 -19.01)"
          className="fill-background-secondary dark:fill-background-secondary-dark"
        />
      </g>
    </svg>
  );
};

export default HeroBlob;
