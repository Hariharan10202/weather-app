import React from "react";

export interface InputProps {
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
  selectedCity: string | undefined;
  children: React.ReactNode;
}

const Input = ({ setSelectedCity, selectedCity, children }: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCity(event.target.value);
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
        />
        {children}
      </div>
    </div>
  );
};

export default Input;
