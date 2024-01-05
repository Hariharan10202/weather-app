import Input from "./Input";
import { getWeatherAPI } from "../service/api";
import { Item } from "../types";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

let searches: any = [];

export interface InputProps {
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
  selectedCity?: string;
  setIsWeather: React.Dispatch<React.SetStateAction<any>>;
  setPending: React.Dispatch<React.SetStateAction<boolean>>;
  isWeather: any | null;
}

const Search = ({
  selectedCity,
  setSelectedCity,
  setIsWeather,
  setPending,
  isWeather,
}: InputProps) => {
  const [error, setError] = useState<string>("");
  const handleSearch = async () => {
    if (
      selectedCity &&
      isWeather &&
      isWeather.name &&
      selectedCity.toLowerCase().trim() === isWeather.name.toLowerCase().trim()
    ) {
      setError("No Changes");
    } else if (selectedCity) {
      searches = [];
      setPending(true);
      const response = await getWeatherAPI(selectedCity);
      const { status, data } = response as { status: number; data: any };

      if (status === 200) {
        setPending(false);
        setIsWeather(data);
        data.timeStamp = Date.now();
        const storageData = localStorage.getItem("weather");
        if (storageData?.length) {
          searches.push(...JSON.parse(storageData));
        }
        searches.push(data);
        const uniqueData = searches.filter(
          (obj1: Item, index: number, self: any) => {
            return (
              index === self.findIndex((obj2: Item) => obj2.name === obj1.name)
            );
          }
        );
        uniqueData.length > 5 && uniqueData.shift();

        localStorage.setItem("weather", JSON.stringify(uniqueData));
      } else {
        const { response: res }: any = response;

        if (res) {
          if (res.status === 404) {
            setError("Invalid City");
          } else if (res.status === 401) setError("Access denied");
        } else setError("Something went wrong");
      }
    } else {
      setError("City is required!");
    }
    setPending(false);
  };

  return (
    <div className="flex items-center justify-start  gap-y-2 flex-col">
      <Input
        setSelectedCity={setSelectedCity}
        selectedCity={selectedCity}
        handleSearch={handleSearch}
        setError={setError}
      >
        <div
          onClick={handleSearch}
          className="flex items-center justify-center border-l-2 p-2 cursor-pointer bg-gray-800 rounded-tr-full rounded-br-full"
        >
          <FiSearch className="text-white" />
        </div>
      </Input>
      <>
        {error && (
          <AnimatePresence>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-red-400"
            >
              {error}
            </motion.p>
          </AnimatePresence>
        )}
      </>
    </div>
  );
};

export default Search;
