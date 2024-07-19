"use client";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
const MoviesSection = ({ pageNO, category, heading }) => {
  const APIURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${pageNO}`;
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  //   const SEARCHAPI = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=`;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const res = await fetch(APIURL);
      const data = await res.json();
      setMovies(data.results);
      setLoading(false);
    };

    fetchMovies();
  }, [APIURL, pageNO]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h2 className="text-3xl ml-2 sm:ml-6 mb-0 text-white">{heading}</h2>
      <section className=" min-h-screen h-max grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4  lg:grid-cols-6 align-middle place-content-center gap-2   py-5 sm:p-6 mb-20">
        {movies.map((movie) => {
          const releaseDate = movie.release_date;
          const year = releaseDate.slice(0, 4);
          return (
            <figure 
            key={movie.id} className="relative group w-fit mx-auto text-white cursor-default ">
               <div className={`absolute h-5/6 inset-0 bg-black bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <button className="flex items-center p-5 text-gray-900 bg-[#FFE400] rounded-full focus:outline-none">
                  <FaPlay size={20} />
                </button>
              </div>
              <Image
                src={IMGPATH + movie.poster_path}
                alt={movie.title}
                width={200}
                height={300}
              />
              <div className="p-2">
                <h2 className="text-sm font-semibold  truncate w-24 hover:text-[#FFE400] ">
                  {movie.title}
                </h2>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex gap-2 ">
                    <p className="text-sm">{year}</p>
                    <span className="text-gray-400 pt-1">
                      <GoDotFill size={8} />
                    </span>
                    <span className="text-sm">{movie.vote_average}</span>
                  </div>
                  <span className="border p-[1.5px] rounded-sm text-xs">
                    {category}
                  </span>
                </div>
              </div>
              
            </figure>
          );
        })}
      </section>
    </>
  );
};
export default MoviesSection;

