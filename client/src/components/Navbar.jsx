import React from "react";

const Navbar = () => {
  return (
    <div className="text-sky-600 text-3xl font-bold flex gap-16 mt-1">
      <a href="">
        <img src="../assets/image.png" alt="" />
      </a>
      <a href="">Movies</a>
      <a href="">WatchList</a>
      <a href="">Movie Recommendation</a>
    </div>
  );
};

export default Navbar;
