import { useEffect, useState } from "react";
import ClearNight from "../WeatherIcons/ClearNight";
import ClearSky from "../WeatherIcons/ClearSky";
import Cloudy from "../WeatherIcons/Cloudy";
import CloudyWithMoon from "../WeatherIcons/CloudyWithMoon";
import Haze from "../WeatherIcons/Haze";
import Mist from "../WeatherIcons/Mist";
import NightHaze from "../WeatherIcons/NightHaze";
import NightMist from "../WeatherIcons/NightMist";
import Rainy from "../WeatherIcons/Rainy";
import Smoke from "../WeatherIcons/Smoke";
import Snowy from "../WeatherIcons/Snowy";
import Lightening from "../WeatherIcons/Lightening";
import RainWithLightening from "../WeatherIcons/RainWithLightening";

interface typeProps {
  type: string;
}

const WeatherImage = ({ type }: typeProps) => {
  const [isDaytime, setIsDaytime] = useState<boolean>(true);

  useEffect(() => {
    const currentHour = new Date().getHours();
    const startOfDaytime = 6;
    const endOfDaytime = 18;

    setIsDaytime(currentHour >= startOfDaytime && currentHour < endOfDaytime);
  }, []);

  switch (type) {
    case "Clouds":
      if (isDaytime) {
        return <Cloudy />;
      } else {
        return <CloudyWithMoon />;
      }

    case "Clear":
      if (isDaytime) {
        return <ClearSky />;
      } else {
        return <ClearNight />;
      }

    case "Mist":
      if (isDaytime) {
        return <Mist />;
      } else {
        return <NightMist />;
      }

    case "Haze":
      if (isDaytime) {
        return <Haze />;
      } else {
        return <NightHaze />;
      }

    case "Smoke":
      return <Smoke />;

    case "Rain":
      if (isDaytime) {
        return <RainWithLightening />;
      } else {
        return <Rainy />;
      }

    case "Thunderstorm":
      return <Lightening />;

    case "Snow":
      return <Snowy />;

    default:
      return <Rainy />;
  }
};

export default WeatherImage;
