import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchWeatherData } from '../slices/weatherSlice';
import { Box, Typography, Button, CircularProgress } from '@mui/material';

const DetailedWeather = () => {
  const { city } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.data[city]);
  const loading = useSelector((state) => state.weather.loading);
  const error = useSelector((state) => state.weather.error);

  useEffect(() => {
    if (!weatherData) {
      dispatch(fetchWeatherData(city));
    }
  }, [dispatch, city, weatherData]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Box>
        <Typography variant="h6" color="error">
          Error: {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Button variant="contained" onClick={() => navigate(-1)}>
        Back
      </Button>
      <Typography variant="h4" gutterBottom>
        Weather in {city}
      </Typography>
      {weatherData ? (
        <Box>
          <Typography variant="body1">
            Temperature: {weatherData.main.temp} °C
          </Typography>
          <Typography variant="body1">
            Description: {weatherData.weather[0].description}
          </Typography>
          <Typography variant="body1">
            Wind Speed: {weatherData.wind.speed} m/s
          </Typography>
          <Typography variant="body1">
            Humidity: {weatherData.main.humidity}%
          </Typography>
        </Box>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Box>
  );
};

export default DetailedWeather;
