/* eslint-disable react/prop-types */
import Forecast from "../Forecast";
import SecondForecast from "../SecondForecast";

function Weather({ data }) {
  return (
    <div className="flex items-center justify-center">
      <Forecast data={data} />
      <SecondForecast data={data} />
    </div>
  );
}

export default Weather;
