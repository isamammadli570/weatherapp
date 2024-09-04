/* eslint-disable react/prop-types */
import moment from "moment";

function Forecast({ data }) {
  let date = new Date();
  let formattedDate = moment(date).format("MMMM Do YYYY");
  return (
    <div>
      {data?.weather ? (
        <div className="flex justify-evenly p-7 items-center  ">
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
              <p>{formattedDate}</p>
              <div className="flex gap-1">
                <h1>{data.name},</h1>
                <p>{data.sys.country}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Forecast;
