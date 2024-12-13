import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './slices/weatherSlice';
import citiesReducer from './slices/citiesSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    cities: citiesReducer,
  },
});

export default store;