import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import { Item } from "../types";
import ReactLoading from "react-loading";
import toast, { Toaster } from "react-hot-toast";

export interface InputProps {
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
  selectedCity: string | undefined;
  children: React.ReactNode;
}

let view = 0;

const Input = ({ setSelectedCity, selectedCity, children }: InputProps) => {
  const [data, setData] = useState<Item[]>([]);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [warning, setWarning] = useState("");

  const { inView, ref } = useInView();

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      if (query.length >= 3) {
        setDebouncedTerm(query);
        setShowDropdown(true);
      } else setShowDropdown(false);
    }, 500);

    return () => clearTimeout(delayTimer);
  }, [query]);

  function removeDuplicateObjects(array: any, key: string) {
    const seen = new Set();
    return array.filter((item: any) => {
      const itemKey = key ? item[key] : JSON.stringify(item);
      if (!seen.has(itemKey)) {
        seen.add(itemKey);
        return true;
      }
      return false;
    });
  }

  const filterResponse = (newData: Item[]) => {
    const currentData = [...data];
    const uniqueNewData = removeDuplicateObjects(
      [...currentData, ...newData],
      "name"
    );

    if (data.length) setData(uniqueNewData);
    else {
      setData((prevData) => [...prevData, ...newData]);
    }
  };

  const areAllObjectsInArray = (
    existingData: any,
    newResponse: any,
    key: string
  ) => {
    return newResponse.every((obj1: any) => {
      return existingData.some((obj2: any) => obj2[key] === obj1[key]);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://geodb-free-service.wirefreethought.com/v1/geo/places?limit=10&sort=name&offset=${view}&types=CITY&namePrefix=${debouncedTerm}`
        );

        const newData: Item[] = response.data.data;

        let isFound;
        if (data.length) {
          isFound = areAllObjectsInArray(data, newData, "name");
        }

        if (!isFound) {
          filterResponse(newData);
          setHasMore(true);
          view++;
        } else {
          setHasMore(false);
          setLoading(false);
        }
      } catch (error) {
        toast.error("Something wrong");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    if (debouncedTerm && inView && hasMore) {
      fetchData();
    }
  }, [debouncedTerm, inView, hasMore]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWarning("");
    setDebouncedTerm("");
    setHasMore(true);
    setData([]);
    view = 0;
    setQuery(e.target.value);
    setSelectedCity(e.target.value);
    if (e.target.value.length < 3) {
      setWarning("Enter atleast three characters to search");
    } else setWarning("");
  };

  const handleSelect = (city: Item) => {
    setSelectedCity(city.name);
    setShowDropdown(false);
  };

  return (
    <div className="relative">
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
      <div className="flex gap-2 items-center justify-between rounded-full shadow-xl bg-transparent border-2 border-white text-white md:w-full">
        <input
          type="text"
          value={selectedCity}
          placeholder="Enter the City"
          className="px-3 py-1 bg-transparent outline-none border-none text-[12px] xl:text-[12px] placeholder:italic placeholder:text-gray-300"
          onChange={handleChange}
        />
        {children}
      </div>
      {warning && (
        <p className="absolute left-5 mt-1 text-normal text-gray-300">
          {warning}
        </p>
      )}
      <>
        {showDropdown && (
          <div className="absolute rounded-lg w-full shadow-2xl transition-all delay-100 mt-1 z-[499] bg-opacity-10 backdrop-filter backdrop-blur-lg border border-opacity-10">
            <div className="flex flex-col w-full cursor-pointer max-h-[500px] overflow-y-auto text-white">
              <>
                {data.map((city, index: number) => (
                  <React.Fragment key={index}>
                    <li
                      onClick={() => {
                        handleSelect(city);
                      }}
                      className="bg-opacity-10 backdrop-filter backdrop-blur-[50px] border-opacity-10 list-none p-2 hover:bg-[#371233] rounded-lg text-[12px] font-medium"
                    >
                      {city.name}
                    </li>
                  </React.Fragment>
                ))}
              </>
              <div ref={ref}></div>
              {loading && (
                <div className="w-full flex justify-center">
                  <ReactLoading
                    className="text-center p-2"
                    type="spin"
                    color="white"
                    height="40px"
                    width="40px"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Input;
