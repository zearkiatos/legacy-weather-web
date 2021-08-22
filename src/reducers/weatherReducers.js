import { WEATHER_TYPES } from "../types";
const weatherReducers = function (state = [], action) {
  switch (action.type) {
    case WEATHER_TYPES.FETCH_WEATHER:
      return [action.payload.data, ...state];
  }
  return state;
};

export default weatherReducers;
