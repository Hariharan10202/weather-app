import { useEffect, useState } from "react";
import { MdOutlineWaterDrop } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { FaLocationDot, FaWind } from "react-icons/fa6";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { FaTemperatureArrowDown } from "react-icons/fa6";

import WeatherImage from "./WeatherImage";
import WeatherLoading from "./WeatherLoading";

export interface WeatherProps {
  isWeather: any | null;
  pending: boolean;
}

const Weather = ({ isWeather, pending }: WeatherProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date());
    };
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const getWelcomeMessage = (date: Date) => {
    const hour = date.getHours();
    if (hour >= 5 && hour < 12) {
      return "Good morning";
    } else if (hour >= 12 && hour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  if (pending) {
    return <WeatherLoading />;
  }

  return (
    <>
      <AnimatePresence>
        {isWeather && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex justify-center items-start bg-opacity-10 backdrop-filter backdrop-blur-lg border border-opacity-10 border-white rounded-[30px] p-3 xl:p-5 lg-p-4 md:p-4 shadow-2xl text-white"
            >
              <div>
                <div className="flex flex-col gap-y-2">
                  <span className="text-[12px] font-bold sm:text-[14px]">
                    {formatTime(currentTime)}
                  </span>
                  <span className="text-[12px] font-medium capitalize md:text-[16px]">
                    {getWelcomeMessage(currentTime)}
                  </span>
                </div>

                <div className="flex flex-col gap-y-2">
                  <div className="flex items-center gap-x-1 mt-4">
                    <FaLocationDot size={20} />
                    <span className="max-w-[200px] font-bold text-[24px] text-zinc-400 truncate">
                      {isWeather.name}, {isWeather.sys.country}
                    </span>
                  </div>
                  <h2 className="font-semibold text-[14px] xl:text-[20px] lg:text-[18px] md:text-[16px] capitalize italic">
                    {isWeather.weather[0]?.description}
                  </h2>
                </div>
                <div className="flex gap-5 items-center">
                  <span className="text-[20px] xl:text-[60px] lg:text-[50px] md:text-[30px] font-[100]">
                    {isWeather.main.temp} °C
                  </span>
                  <div>
                    <span className="flex items-center gap-1 text-[14px]">
                      <FaTemperatureArrowUp size={14} />
                      {isWeather.main.temp_max}
                    </span>
                    <span className="flex items-center gap-1 text-[14px]">
                      <FaTemperatureArrowDown size={14} />
                      {isWeather.main.temp_min}
                    </span>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center gap-2">
                    <span className="text-[20px]">
                      {isWeather.main.humidity}%
                    </span>
                    <span>
                      <MdOutlineWaterDrop size={20} />
                    </span>
                    <span className="flex items-center gap-2 ml-4">
                      <span className="text-[20px]">
                        {isWeather.wind.speed} mph
                      </span>
                      <span className="w-16 h-16 flex items-center">
                        <FaWind />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="h-[50px] w-[50px] md:w-[100px] hidden xl:block lg:block">
                  <WeatherImage type={isWeather.weather[0].main} />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Weather;