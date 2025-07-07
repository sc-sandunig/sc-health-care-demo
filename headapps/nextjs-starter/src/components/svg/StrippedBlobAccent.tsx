const StrippedBlobAccent = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 465.52 462.09"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <clipPath id="clippath">
          <path
            d="M25.38,349.03C5.1,241.47-28.44,154.39,45.93,46.57c74.36-107.82,271.47-11.09,393,113.88,121.53,124.97-210.53,295.66-252.88,299.14s-132.41,19.58-160.66-110.55h-.01Z"
            fill="none"
          />
        </clipPath>
        <clipPath id="clippath-1">
          <rect x="-776.15" y="-1214.63" width="2076.57" height="1936.22" fill="none" />
        </clipPath>
      </defs>
      <g clipPath="url(#clippath)">
        <g clipPath="url(#clippath-1)">
          {[...Array(30)].map((_, i) => {
            const xStart = -394.81 + 25.93 * i;
            const translateX = -262 + 12.81 * i;
            const translateY = 18.4 + 22.37 * i;
            return (
              <g key={i} id={`Line_${135 + i}`} data-name={`Line ${135 + i}`}>
                <rect
                  x={xStart.toFixed(2)}
                  y="237.43"
                  width="559.74"
                  height="1"
                  fill="currentColor"
                  transform={`translate(${translateX.toFixed(2)} ${translateY.toFixed(
                    2
                  )}) rotate(-59.6)`}
                />
              </g>
            );
          })}
        </g>
      </g>
    </svg>
  );
};

export default StrippedBlobAccent;
