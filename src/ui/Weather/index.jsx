/* eslint-disable react/prop-types */

import { BiWind } from "react-icons/bi";
import {
  TbTemperature,
  TbTemperaturePlus,
  TbTemperatureMinus,
} from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";

function Weather({ data }) {
  return (
    <div>
      {data.weather ? (
        <div className="flex p-7 items-center  ">
          <div className="p-10 bg-zinc-800 rounded-2xl">
            <div className="flex items-center ">
              <div>
                <p>Now</p>
                <h1 className="text-6xl">{data.main.temp.toFixed()}°C</h1>
                <p>{data.weather[0].description}</p>
                <hr />
              </div>
              <div>
                <img
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt=""
                />
              </div>
            </div>
            <div className="mt-4">
              <p>Wednesday 1,Dec</p>
              <div className="flex">
                <h1>{data.name}, </h1>
                <p>{data.sys.country}</p>
              </div>
            </div>
          </div>

          <div className="px-10">
            {data.name !== undefined ? (
              <div className="w-[400px] h-[250px] bg-zinc-800 rounded-2xl">
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
                    <p className="text-2xl">{data.main.pressure} hPa</p>
                    <p className="text-sm">Pressure</p>
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

          {/* <div>
            {data.name !== undefined ? (
              <div>
                <div>
                  <p>Feels Like</p>
                  <p>{data.main.feels_like.toFixed()} °C</p>
                </div>
                <div>
                  <p>Humidity</p>
                  <p>{data.main.humidity.toFixed()} %</p>
                </div>
                <div>
                  <p>Wind Speed</p>
                  <p>{data.wind.speed.toFixed()} KPH</p>
                </div>
                <div>
                  <p>Pressure</p>
                  <p>{data.main.pressure} hPa</p>
                </div>
              </div>
            ) : null}
          </div> */}
        </div>
      ) : null}
    </div>
  );
}

export default Weather;
