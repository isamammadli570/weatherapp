import { useState } from "react";
import Navbar from "./ui/Navbar";
import Weather from "./ui/Weather";

import axios from "axios";

const apiKey = "9431c8ce43c3e0914d1311649ce8adb2";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("Baku");

  /* const furl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`; */

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="text-stone-200 max-w-[1000px] grid ">
      <Navbar
        location={location}
        setLocation={setLocation}
        searchLocation={searchLocation}
      />
      <Weather data={data} />
    </div>
  );
}

export default App;
