import ClearNight from "../WeatherIcons/ClearNight";
import ClearSky from "../WeatherIcons/ClearSky";
import Cloudy from "../WeatherIcons/Cloudy";
import CloudyWithMoon from "../WeatherIcons/CloudyWithMoon";
import Haze from "../WeatherIcons/Haze";
import Mist from "../WeatherIcons/Mist";
import NightHaze from "../WeatherIcons/NightHaze";
import NightMist from "../WeatherIcons/NightMist";
import RainingAndLightening from "../WeatherIcons/RainingAndLightening";
import Rainy from "../WeatherIcons/Rainy";
import Smoke from "../WeatherIcons/Smoke";

interface typeProps {
  type: string;
}

const WeatherImage = ({ type }: typeProps) => {
  switch (type) {
    case "Clouds":
      if (new Date().getHours() + 1 > 19 && new Date().getHours() + 1 < 6) {
        return <Cloudy />;
      } else {
        return <CloudyWithMoon />;
      }

    case "Clear":
      if (new Date().getHours() + 1 > 19 && new Date().getHours() + 1 < 6) {
        return <ClearNight />;
      } else {
        return <ClearSky />;
      }

    case "Mist":
      if (new Date().getHours() + 1 > 19 && new Date().getHours() + 1 < 6) {
        return <Mist />;
      } else {
        return <NightMist />;
      }

    case "Haze":
      if (new Date().getHours() + 1 > 19 && new Date().getHours() + 1 < 6) {
        return <Haze />;
      } else {
        return <NightHaze />;
      }

    case "Smoke":
      return <Smoke />;

    case "Rain":
      if (new Date().getHours() + 1 > 19 && new Date().getHours() + 1 < 6) {
        return <RainingAndLightening />;
      } else {
        return <Rainy />;
      }
      break;

    default:
  }
};

export default WeatherImage;
