import { countries, genres } from "@/utils/data";
import React from "react";
const FilterComponent = ({ visibility }) => {
  return (
    <section
      className={`${visibility} transition duration-500 bg-[#252627] p-6 px-10 text-white`}
    >
      <div className="flex-col gap-4 ">
        {/* Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col md:flex-row  md:items-center flex-wrap gap-2 border-b border-gray-700 pb-4">
            <span className="w-24">Type:</span>
            <form className="flex gap-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="type" defaultChecked />
                <span>All</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="type" />
                <span>Movies</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="type" />
                <span>TV Shows</span>
              </label>
            </form>
          </div>
          {/* Quality */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 border-b border-gray-700 pb-4">
            <span className="w-24">Quality:</span>
            <form className="flex gap-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="quality" defaultChecked />
                <span>All</span>
              </label>
              {["HD", "SD", "CAM"].map((quality) => (
                <label key={quality} className="flex items-center gap-2">
                  <input type="radio" name="quality" />
                  <span>{quality}</span>
                </label>
              ))}
            </form>
          </div>
        </div>

        {/* Released */}
        <div className="flex flex-wrap items-center gap-2 border-b border-gray-700 py-4">
          <span className="w-24">Released:</span>
          <form className="flex flex-wrap gap-2">
            <label className="flex items-center gap-2">
              <input type="radio" name="released" defaultChecked />
              <span>All</span>
            </label>
            {[2024, 2023, 2022, 2021, 2020].map((year) => (
              <label key={year} className="flex items-center gap-2">
                <input type="radio" name="released" />
                <span>{year}</span>
              </label>
            ))}
            <label className="flex items-center gap-2">
              <input type="radio" name="released" />
              <span>Older</span>
            </label>
          </form>
        </div>

        {/* Genre */}
        <div className="border-b border-gray-700 flex flex-col md:flex-row gap-4 py-4">
          <span className="block w-24">Genre:</span>
          <form className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <label key={genre} className="flex items-center gap-2">
                <input
                  className="rounded-md outline-none"
                  type="checkbox"
                  name="genre"
                />
                <span>{genre}</span>
              </label>
            ))}
          </form>
        </div>

        {/* Country */}
        <div className=" flex gap-4 flex-col py-4 md:flex-row">
          <span className="block w-24">Country:</span>
          <form className="flex flex-wrap gap-2">
            {countries.map((country) => (
              <label key={country} className="flex items-center gap-2">
                <input type="checkbox" name="country" />
                <span>{country}</span>
              </label>
            ))}
          </form>
        </div>

        {/* Buttons */}
        <div className="flex justify-start gap-4 mt-4 ">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded-full">
            Filter
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-full">
            Close
          </button>
        </div>
      </div>
    </section>
  );
};

export default FilterComponent;
