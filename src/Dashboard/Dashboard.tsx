import Search from "../Components/Search";
import Weather from "../Components/Weather";
import styles from "./dashboard.module.css";
import RecentSearch from "../Components/RecentSearch";
import Map from "../Components/Map/Map";
import { useState } from "react";

const Dashboard = () => {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [isWeather, setIsWeather] = useState<any | null>(null);
  const [pending, setPending] = useState<boolean>(false);

  return (
    <div className={styles.background}>
      <div className="flex flex-col gap-y-5 items-center justify-center m-auto p-5 h-full relative">
        <div className="flex flex-col gap-y-5">
          <Search
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            setIsWeather={setIsWeather}
            setPending={setPending}
          />
          <div className="flex gap-6 flex-wrap justify-center items-center">
            <Weather pending={pending} isWeather={isWeather} />
            <Map isWeather={isWeather} />
          </div>
        </div>
        <div>
          <RecentSearch
            setSelectedCity={setSelectedCity}
            setIsWeather={setIsWeather}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
