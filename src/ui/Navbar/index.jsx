/* eslint-disable react/prop-types */
function Navbar({ setLocation, searchLocation, location }) {
  return (
    <div className="flex justify-between p-7 ">
      <h1 className="text-2xl cursor-pointer">WeatherSite</h1>

      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyPress={searchLocation}
        className="rounded-xl w-[400px] h-9 bg-zinc-800 text-stone-200"
        type="text"
        placeholder=" Search city.."
      />

      <button
        className="bg-violet-300 text-black px-2 rounded-3xl
       hover:bg-violet-500 duration-300"
      >
        Current Location
      </button>
    </div>
  );
}

export default Navbar;
