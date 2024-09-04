/* eslint-disable react/prop-types */
import { BiWind } from "react-icons/bi";
import {
  TbTemperature,
  TbTemperaturePlus,
  TbTemperatureMinus,
} from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";

function SecondForecast({ data }) {
  return (
    <div className="px-10">
      {data?.name !== undefined ? (
        <div className="w-[600px] h-[250px] bg-zinc-800 rounded-2xl">
          <div className="flex justify-around items-center py-5">
            <div className="">
              <p className="text-2xl flex items-center">
                <TbTemperature size={20} />
                {data.main.feels_like.toFixed()} °C
              </p>
              <p className="text-sm">Feels</p>
            </div>
            <div>
              <p className="text-2xl flex items-center">
                <WiHumidity size={25} />
                {data.main.humidity.toFixed()} %
              </p>
              <p className="text-sm">Humidity</p>
            </div>
          </div>

          <div className="flex justify-around">
            <div>
              <p className="text-2xl flex items-center">
                <BiWind size={20} />
                {data.wind.speed.toFixed()} mph
              </p>
              <p className="text-sm">Wind</p>
            </div>
            <div>
              <p className="text-2xl">{data.wind.speed.toFixed()} KPH</p>
              <p className="text-sm">Wind Speed</p>
            </div>
          </div>

          <div className="flex justify-around mt-5">
            <div>
              <p className="text-2xl flex items-center">
                <TbTemperaturePlus size={20} />
                {data.main.temp_max.toFixed()} °C
              </p>
              <p className="text-sm">Max temp</p>
            </div>
            <div className="">
              <p className="text-2xl flex items-center">
                <TbTemperatureMinus size={20} />
                {data.main.temp_min.toFixed()} °C
              </p>
              <p className="text-sm">Min temp</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SecondForecast;
