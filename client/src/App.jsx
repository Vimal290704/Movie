import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MovieRecommendation from "./components/Movie_Recommendation";
import Watchlist from "./components/Watchlist";
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
const App = () => {
  const [watchList, setWatchList] = useState([]);

  function handleAddToWatchList(movieObj) {
    const updatedWatchlist = [...watchList, movieObj];
    setWatchList(updatedWatchlist);
    console.log(updatedWatchlist);
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/recommend" element={<MovieRecommendation />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/movies"
            element={
              <Movies
                handleAddToWatchList={handleAddToWatchList}
                watchlist={watchList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
