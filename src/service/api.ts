import axios from "axios";

export const getWeatherAPI = async (city: string) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=metric`
    );

    return res;
  } catch (error) {
    return error;
  }
};
