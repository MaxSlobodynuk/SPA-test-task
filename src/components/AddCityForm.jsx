import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCity } from '../slices/citiesSlice';

const AddCityForm = () => {
  const [cityName, setCityName] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setCityName(e.target.value);
  };

  const handleAddCity = (e) => {
    e.preventDefault();
    if (cityName.trim() === '') {
      alert('Please enter a city name.');
      return;
    }
    dispatch(addCity(cityName));
    setCityName('');
  };

  return (
    <form onSubmit={handleAddCity} className="add-city-form">
      <input
        type="text"
        value={cityName}
        onChange={handleInputChange}
        placeholder="Enter city name"
        className="input"
      />
      <button type="submit" className="button">
        Add City
      </button>
    </form>
  );
};

export default AddCityForm;
