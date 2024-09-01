/* eslint-disable react/prop-types */

function Weather({ data }) {
  return (
    <div>
      {data.weather ? (
        <div className="flex p-7 items-center  ">
          {/* esas hisse */}
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

          {/* sekil hissesi */}

          {/* elave hisse */}
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
