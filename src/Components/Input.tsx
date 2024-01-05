import React from "react";

export interface InputProps {
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
  selectedCity: string | undefined;
  children: React.ReactNode;
  handleSearch: () => {};
  setError: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({
  setSelectedCity,
  selectedCity,
  children,
  handleSearch,
  setError,
}: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setSelectedCity(event.target.value);
  };

  const triggerSearch = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") handleSearch();
    else return;
  };

  return (
    <div className="relative">
      <div className="flex gap-2 items-center justify-between rounded-full shadow-xl bg-transparent border-2 border-white text-white md:w-full">
        <input
          type="text"
          value={selectedCity}
          placeholder="Enter the City"
          className="px-3 py-1 bg-transparent outline-none border-none text-[12px] xl:text-[12px] placeholder:italic placeholder:text-gray-300"
          onChange={handleChange}
          onKeyDown={triggerSearch}
        />
        {children}
      </div>
    </div>
  );
};

export default Input;
