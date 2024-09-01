/* const apiKey = "9431c8ce43c3e0914d1311649ce8adb2";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
import axios from "axios";

const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((res) => {
        console.log(res.data);
        return res.data
      });
    }
  }; */