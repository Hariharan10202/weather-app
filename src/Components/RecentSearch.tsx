import { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { getTimeAgo } from "../timeago";
import WeatherImage from "./WeatherImage";

const RecentSearch = () => {
  const [recent, setRecent] = useState([]);

  useLayoutEffect(() => {
    const storedData = localStorage.getItem("weather");

    if (storedData) {
      setRecent(JSON.parse(storedData));
    }
  }, [localStorage.getItem("weather")]);

  return (
    <div className="w-fit cursor-pointer flex flex-col gap-y-3 items-center mb-5">
      <div>
        <h1 className="text-[20px] text-white">Recent</h1>
      </div>
      {recent.length ? (
        <div className="flex gap-x-3 gap-y-5 items-center flex-wrap justify-center">
          {recent.map((data: any) => (
            <motion.div
              key={data.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="flex gap-x-2 items-center bg-opacity-10 backdrop-filter backdrop-blur-lg border border-opacity-10 border-white rounded-[20px] py-2 px-3 shadow-2xl">
                <div className="w-8 h-8 xl:w-20 xl:h-20 lg:w-16 lg:h-16 md:w-10 md:h-10">
                  <WeatherImage type={data.weather[0].main} />
                </div>
                <div className="flex flex-col gap-y-2">
                  <h1 className="text-white text-[10px] xl:text-[14px]">
                    {data.name}
                  </h1>
                  <span className="text-white text-[12px] xl:text-[14px]">
                    {data.main.temp} °C
                  </span>
                </div>
              </div>
              <p className="text-gray-300 font-normal flex justify-end pr-2 text-[10px]">
                {getTimeAgo(data.timeStamp)}
              </p>
            </motion.div>
          ))}
        </div>
      ) : (
        <h1 className="text-gray-300 text-[16px]">No recent searches</h1>
      )}
    </div>
  );
};

export default RecentSearch;
