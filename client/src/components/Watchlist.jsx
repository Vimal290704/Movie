/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { genre } from "../utilities/genre";
const Watchlist = ({ movies, OnDelete }) => {
  const [search, setSearch] = useState("");
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        My Watchlist
      </h2>
      <div>
        <input
          className=""
          placeholder="Search Movies"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Poster
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Title
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Ratings
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Popularity
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Genre
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-700">
                Delete Movies
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {movies
              .filter((movie) => {
                return movie.title.toLowerCase().includes(search.toLowerCase());
              })
              .map((movie) => (
                <tr
                  key={movie.id}
                  className="hover:bg-gray-100 transition duration-150 ease-in-out"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                      alt={movie.title}
                      className="w-16 h-24 object-cover rounded-lg shadow-sm hover:scale-105 transition-transform duration-200"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800">
                    {movie.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {movie.vote_average}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {movie.popularity}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {genre[movie.genre_ids[0]]}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button
                      onClick={() => OnDelete(movie.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-150 ease-in-out"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Watchlist;
