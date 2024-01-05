import Input from "./Input";
import { getWeatherAPI } from "../service/api";
import { Item } from "../types";
import toast, { Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";

let searches: any = [];

export interface InputProps {
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
  selectedCity?: string;
  setIsWeather: React.Dispatch<React.SetStateAction<any>>;
  setPending: React.Dispatch<React.SetStateAction<boolean>>;
}

let tempCity: undefined | string;
const Search = ({
  selectedCity,
  setSelectedCity,
  setIsWeather,
  setPending,
}: InputProps) => {
  const handleSearch = async () => {
    if (selectedCity) {
      if (tempCity !== selectedCity) tempCity = selectedCity;
      else {
        toast.custom(
          () => (
            <div
              style={{
                padding: "10px",
                borderRadius: "5px",
                color: "white",
                backgroundColor: "#363636",
              }}
            >
              No changes Made
            </div>
          ),
          {
            position: "top-right",
            duration: 4000,
          }
        );
        return;
      }

      searches = [];
      setPending(true);
      const response = await getWeatherAPI(selectedCity);
      setPending(false);
      const { status, data } = response as { status: number; data: any };

      if (status === 200) {
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
            toast.error("Invalid city");
            tempCity = "";
          } else if (res.status === 401) toast.error("Access denied");
        } else toast.error("Something went wrong");
      }
    } else {
      toast.error("Enter the City");
    }
  };

  return (
    <div className="flex items-center justify-start  gap-y-2 flex-col">
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
          style: {
            background: "#363636",
            fontSize: "14px",
            color: "#fff",
          },
        }}
      />
      <Input
        setSelectedCity={setSelectedCity}
        selectedCity={selectedCity}
        handleSearch={handleSearch}
      >
        <div
          onClick={handleSearch}
          className="flex items-center justify-center border-l-2 p-2 cursor-pointer bg-gray-800 rounded-tr-full rounded-br-full"
        >
          <FiSearch className="text-white" />
        </div>
      </Input>
    </div>
  );
};

export default Search;
