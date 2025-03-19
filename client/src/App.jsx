import React, { useState, useEffect } from "react";
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
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    setWatchList(updatedWatchlist);
  }
  function OnDelete(id) {
    for (let i = 0; i < watchList.length; i++) {
      if (id == watchList[i].id) {
        watchList.splice(i, 1);
        localStorage.setItem("watchlist", JSON.stringify(watchList));
        setWatchList(watchList);
        break;
      }
    }
  }
  useEffect(() => {
    const storedWatchlist = localStorage.getItem("watchlist");
    if (storedWatchlist) {
      setWatchList(JSON.parse(storedWatchlist));
    }
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/watchlist"
            element={<Watchlist movies={watchList} OnDelete={OnDelete} />}
          />
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
