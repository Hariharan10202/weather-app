const ClearNight: React.FC = () => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      className="w-full h-full"
      viewBox="0 0 60.7 40"
      style={{ enableBackground: "new 0 0 60.7 40" } as React.CSSProperties}
      xmlSpace="preserve"
    >
      <g id="Cloud_1">
        <g id="White_cloud_1">
          <path
            id="XMLID_2_"
            className="fill-white"
            d="M47.2,40H7.9C3.5,40,0,36.5,0,32.1l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9v0 C55.1,36.5,51.6,40,47.2,40z"
          />
          <circle
            id="XMLID_3_"
            className="fill-white"
            cx="17.4"
            cy="22.8"
            r="9.3"
          />
          <circle
            id="XMLID_4_"
            className="fill-white"
            cx="34.5"
            cy="21.1"
            r="15.6"
          />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            dur="6s"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
            type="translate"
            values="0;5;0"
            calcMode="linear"
          ></animateTransform>
        </g>
        <path
          id="Moon"
          className="fill-yellow-500"
          d="M15.3,21.4C15,12.1,21.1,4.2,29.7,1.7c-2.8-1.2-5.8-1.8-9.1-1.7C8.9,0.4-0.3,10.1,0,21.9 c0.3,11.7,10.1,20.9,21.9,20.6c3.2-0.1,6.3-0.9,8.9-2.3C22.2,38.3,15.6,30.7,15.3,21.4z"
        />
      </g>
    </svg>
  );
};

export default ClearNight;
