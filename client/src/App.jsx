import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import MovieRecommendation from "./components/Movie_Recommendation";
import Watchlist from "./components/Watchlist";
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/recommend" element={<MovieRecommendation />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
