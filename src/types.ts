import React from "react";

export interface InputProps {
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
  selectedCity?: string;
  setIsWeather: React.Dispatch<React.SetStateAction<any>>;
  children?: React.ReactNode;
}

export interface WeatherProps {
  setIsWeather: React.Dispatch<React.SetStateAction<any>>;
}

export interface WeatherProps {
  isWeather: any | null;
}

export type Item = {
  name: string;
};
