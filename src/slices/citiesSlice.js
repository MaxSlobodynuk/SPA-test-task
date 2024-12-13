import { createSlice } from '@reduxjs/toolkit';

const loadCitiesFromStorage = () => {
    const savedCities = localStorage.getItem('cities');
    return savedCities ? JSON.parse(savedCities) : [];
  };

const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    cities: loadCitiesFromStorage(),
  },
  reducers: {
    addCity: (state, action) => {
      state.cities.push(action.payload);
      localStorage.setItem('cities', JSON.stringify(state.cities));
    },
    removeCity: (state, action) => {
      state.cities = state.cities.filter((city) => city !== action.payload);
      localStorage.setItem('cities', JSON.stringify(state.cities));
    },
  },
});

export const { addCity, removeCity } = citiesSlice.actions;
export default citiesSlice.reducer;
