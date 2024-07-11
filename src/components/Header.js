import React from "react";
import { useDispatch } from "react-redux";
import { menuSidebar } from "../utils/AppSlice";

function Header() {
  const dispatch = useDispatch();

  const hamburgerMenuHandler = () => {
    dispatch(menuSidebar());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1 cursor-pointer">
        <svg
          onClick={() => hamburgerMenuHandler()}
          className="mt-1"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
        <a href="/">
          <img
            className="h-[70px] -mt-5 cursor-pointer"
            src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
            alt="youtube-logo"
          ></img>
        </a>
      </div>
      <div className="col-span-10 px-80 ">
        <input
          className="rounded-s-full border border-black p-2 m-0 w-72 "
          type="text"
        ></input>
        <button className="px-3 p-2 border-y-[1px] border-r-[1px] border-black rounded-e-full bg-slate-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-logo"
          src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png"
        ></img>
      </div>
    </div>
  );
}

export default Header;
