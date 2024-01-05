import "./DynamicIcon.css";

const DynamicIcon = () => {
  return (
    <div className="wrapper">
      <div className="sun"></div>
      <div className="cloud">
        <div className="cloud1">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="cloud1 c_shadow">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>

      <div className="cloud_s">
        <div className="cloud1">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="cloud1 c_shadow">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>

      <div className="cloud_vs">
        <div className="cloud1">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="cloud1 c_shadow">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="haze"></div>
      <div className="haze_stripe"></div>
      <div className="haze_stripe"></div>
      <div className="haze_stripe"></div>
      <div className="thunder"></div>
      <div className="rain">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="sleet">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default DynamicIcon;
