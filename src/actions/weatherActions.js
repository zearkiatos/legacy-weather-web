import axios from "axios";
import config from "../config";
import { WEATHER_TYPES } from "../types";

function fetchWeather(city) {
  const url = `${config.OPEN_WEATHER_BASE_URL}/forecast?appid=${config.OPEN_WEATHER_API_KEY}&q=${city}`;
  const request = axios.get(url);
  
  return {
    type: WEATHER_TYPES.FETCH_WEATHER,
    payload: request,
  };
}

export default {
  fetchWeather,
};
