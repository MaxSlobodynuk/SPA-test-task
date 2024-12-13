import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from '../slices/weatherSlice';
import { addCity } from '../slices/citiesSlice';
import CityCard from './CityCard';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';

const Main = () => {
  const dispatch = useDispatch();
  const cities = useSelector(state => state.cities.cities);

  useEffect(() => {
    const storedCities = JSON.parse(localStorage.getItem('cities')) || [];
    storedCities.forEach(city => {
      dispatch(fetchWeatherData(city));
    });
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('cities', JSON.stringify(cities));
  }, [cities]);

  const handleAddCity = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value.trim();
    if (city && !cities.includes(city)) {
      dispatch(addCity(city));
      dispatch(fetchWeatherData(city));
      e.target.reset();
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Weather App
      </Typography>
      <Box component="form" onSubmit={handleAddCity} sx={{ marginBottom: 3, display: 'flex', gap: 2 }}>
        <TextField
          label="Add City"
          name="city"
          variant="outlined"
          size="small"
        />
        <Button type="submit" variant="contained">
          Add City
        </Button>
      </Box>
      <Grid container spacing={2}>
        {cities.map((city, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CityCard city={city} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Main;
