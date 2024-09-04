import { useEffect, useState } from "react";
import Navbar from "./ui/Navbar";
import Weather from "./ui/Weather";

const apiKey = "9431c8ce43c3e0914d1311649ce8adb2";

function App() {
  const [data, setData] = useState(null);

  const [location, setLocation] = useState("Baku");

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
      );
      const data = await res.json();
      console.log(data);
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="text-stone-200 ">
      {data && (
        <>
          <Navbar
            location={location}
            setLocation={setLocation}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
          <Weather data={data} />
        </>
      )}
    </div>
  );
}

export default App;
