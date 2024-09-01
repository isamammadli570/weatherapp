function Navbar({ setLocation, searchLocation, location }) {
  return (
    <div className="flex justify-around p-6">
      <div className="cursor-pointer">
        <h1 className="text-2xl">WeatherSite</h1>
      </div>
      <div>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={searchLocation}
          className="border-2"
          type="text"
          placeholder="Search city.."
        />
      </div>
      <div>
        <button className="border-2">Current Location</button>
      </div>
    </div>
  );
}

export default Navbar;
