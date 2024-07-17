"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { GoDotFill } from "react-icons/go";
const MoviesSection = ({pageNO}) => {

    const APIURL =
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${pageNO}`;
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=`;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(APIURL);
      const data = await res.json();
      setMovies(data.results);
      setLoading(false);
    };

    fetchMovies();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="h-max  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 p-6">
    {movies.map((movie) => (
      <figure key={movie.id} className="w-48 text-white">
        <Image
          src={IMGPATH + movie.poster_path}
          alt={movie.title}
          width={200}
          height={300}
          
        />
        <div className='p-2'>
          <h2 className="text-sm font-semibold">{movie.title}</h2>
          <div className="flex justify-between items-center mt-2">
            <div className="flex gap-2 ">
              <p className="text-sm">{movie.release_date}</p>
              <span className='text-gray-400 pt-1'><GoDotFill  size={8}/></span>
              <span className="text-sm">{movie.vote_average}</span>
            </div>
            <span className="border p-[1.5px] rounded-sm text-xs">Movie</span>
          </div>
        </div>
      </figure>
    ))}
  </section>
  );
};
export default MoviesSection;

// "use client"
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';
// import { GoDotFill } from "react-icons/go";

// const MoviesSection = () => {
//   const APIURL =
//     "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";
//   const IMGPATH = "https://image.tmdb.org/t/p/w1280";
//   const [movies, setMovies] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(true);

//   const fetchMovies = async (page) => {
//     setLoading(true);
//     const res = await fetch(APIURL + page);
//     const data = await res.json();
//     setMovies((prevMovies) => [...prevMovies, ...data.results]);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchMovies(page);
//   }, [page]);

//   return (
//     <section className="h-max grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
//       {movies.map((movie) => (
//         <figure key={movie.id} className="w-48 text-white">
//           <Image
//             src={IMGPATH + movie.poster_path}
//             alt={movie.title}
//             width={200}
//             height={300}
//           />
//           <div>
//             <h2 className="text-sm font-semibold">{movie.title}</h2>
//             <div className="flex justify-between items-center mt-2">
//               <div className="flex gap-2 ">
//                 <p className="text-sm">{movie.release_date}</p>
//                 <span className='text-gray-400 pt-1'><GoDotFill size={8} /></span>
//                 <span className="text-sm">{movie.vote_average}</span>
//               </div>
//               <span className="border p-[1.5px] rounded-sm text-xs">Movie</span>
//             </div>
//           </div>
//         </figure>
//       ))}
//       {loading && <p>Loading...</p>}
//       {!loading && (
//         <button
//           onClick={() => setPage((prevPage) => prevPage + 1)}
//           className="col-span-full bg-blue-500 text-white p-2 rounded"
//         >
//           Load More
//         </button>
//       )}
//     </section>
//   );
// };

// export default MoviesSection;
