import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Main from './components/Main';
import DetailedWeather from './components/DetailedWeather';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:city" element={<DetailedWeather />} />
      </Routes>
    </Router>
  );
};

export default App;
