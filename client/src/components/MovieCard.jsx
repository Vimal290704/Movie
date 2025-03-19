/* eslint-disable no-unused-vars */
import React from "react";
function MovieCard({ movieObj, handleAddToWatchList, watchlist }) {
  function movieExists(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (movieObj.id === watchlist[i].id) return true;
    }
    return false;
  }
  return (
    <div
      className="h-[40vh] w-[200px] bg-cover flex items-end rounded-lg hover:scale-110 duration-300"
      style={{
        backgroundImage: movieObj.poster_path
          ? `url(https://image.tmdb.org/t/p/original/${movieObj.poster_path})`
          : "default.jpg",
      }}
    >
      {movieExists(movieObj) ? (
        <div className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60">
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddToWatchList(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}
      <div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-lg">
        {movieObj.title} {movieObj.adult ? "(R)" : ""}
      </div>
    </div>
  );
}

export default MovieCard;
