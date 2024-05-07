import React from "react";
import { useSelector } from "react-redux";

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  console.log(isMenuOpen);
  // if (!isMenuOpen) return null;

  return !isMenuOpen ? null : (
    <div className="shadow-lg m-2 p-2 w-48">
      <ul className="py-5">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <hr className="border-black"></hr>
      <h1 className="font-bold">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Music</li>
        <li>Shopping</li>
        <li>Movies</li>
      </ul>
    </div>
  );
}

export default Sidebar;
