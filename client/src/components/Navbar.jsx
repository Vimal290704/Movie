import React from "react";
import image from "../assets/image.png";
import profile_logo from "../assets/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-3 px-8 flex items-center gap-10">
      <Link
        to="/"
        className="flex items-center hover:opacity-80 transition duration-300"
      >
        <img
          src={image}
          alt="Logo"
          className="w-12 h-12 object-contain rounded-xl"
        />
      </Link>
      <div className="flex gap-8 text-lg font-semibold text-sky-600">
        <Link
          to="/movies"
          className="hover:text-sky-800 transition duration-300"
        >
          Movies
        </Link>
        <Link
          to="/watchlist"
          className="hover:text-sky-800 transition duration-300"
        >
          WatchList
        </Link>
        <Link
          to="/recommend"
          className="hover:text-sky-800 transition duration-300"
        >
          Movie Recommendation
        </Link>
        <Link
          to="/contact"
          className="hover:text-sky-800 transition duration-300"
        >
          Contact
        </Link>
        <Link
          to="/about"
          className="hover:text-sky-800 transition duration-300"
        >
          About
        </Link>
      </div>
      <Link
        to="/profile"
        className="ml-auto hover:opacity-80 transition duration-300"
      >
        <img
          src={profile_logo}
          alt="Profile"
          className="w-12 h-12 object-contain rounded-full border-2 border-sky-600"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
