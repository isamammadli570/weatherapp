import { BsClouds } from "react-icons/bs";

/* eslint-disable react/prop-types */
function Navbar({ handleInputChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="flex justify-evenly p-7 ">
      <h1 className="flex items-center gap-1 text-2xl cursor-pointer">
        <BsClouds />
        WeatherSite
      </h1>

      <input
        onChange={handleInputChange}
        className="rounded-xl outline-none w-[400px] h-9 bg-zinc-800 text-stone-200"
        type="text"
        placeholder=" Search city.."
      />

      <button
        className="bg-violet-300 text-black px-2 rounded-3xl
       hover:bg-violet-600 hover:text-white duration-300"
      >
        Current Location
      </button>
    </form>
  );
}

export default Navbar;
