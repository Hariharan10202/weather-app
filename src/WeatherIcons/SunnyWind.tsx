const SunnyWind = () => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      className="w-full h-full"
      viewBox="0 0 45.1 47.6"
      style={{ enableBackground: "new 0 0 45.1 47.6" } as React.CSSProperties}
      xmlSpace="preserve"
      height="45px"
      width="45px"
    >
      <g id="Wind_Sun">
        <g id="Wind">
          <path
            id="XMLID_27_"
            className="fill-none stroke-white stroke-2"
            d="M1.3,33.1h19.3c2.1,0,3.8-1.3,3.8-3v0v0c0-1.7-1.7-3-3.8-3h-2.1"
          />
          <path
            id="XMLID_40_"
            className="fill-none stroke-white stroke-2"
            d="M2.4,42.4h18.2c2,0,3.6,0.9,3.6,2.1l0,0v0c0,1.2-1.6,2.1-3.6,2.1h-2"
          />
          <line
            id="XMLID_28_"
            className="fill-none stroke-white stroke-2"
            x1="5.3"
            y1="36.3"
            x2="25.5"
            y2="36.3"
          />
          <line
            id="XMLID_29_"
            className="fill-none stroke-white stroke-2"
            x1="0"
            y1="39.3"
            x2="27"
            y2="39.3"
          />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            dur="1.5s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="translate"
            values="0;3"
            calcMode="linear"
          ></animateTransform>
          <animate
            attributeName="opacity"
            attributeType="XML"
            dur="1.5s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="0.3;0.9"
            calcMode="linear"
          />
        </g>
      </g>
    </svg>
  );
};

export default SunnyWind;
