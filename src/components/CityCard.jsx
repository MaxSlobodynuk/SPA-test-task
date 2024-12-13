import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from '../slices/weatherSlice';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { removeCity } from '../slices/citiesSlice';

const CityCard = ({ city }) => {
  const dispatch = useDispatch();
  const weatherData = useSelector(state => state.weather.data[city]);

  return (
    <Card sx={{ margin: 2, padding: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '200px' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {city}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {weatherData?.weather?.[0]?.description || 'Loading...'}
        </Typography>
        <Typography variant="body2">
          Temp: {weatherData?.main?.temp || 'N/A'} °C
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant="contained"
          size="small"
          onClick={() => dispatch(fetchWeatherData(city))}
        >
          Update
        </Button>
        <Button
          variant="outlined"
          size="small"
          component={Link}
          to={`/${city}`}
        >
          Details
        </Button>
        <Button
          variant="text"
          color="error"
          size="small"
          onClick={() => dispatch(removeCity(city))} 
        >
          Delete
        </Button>
      </Box>
    </Card>
  );
};

export default CityCard;
