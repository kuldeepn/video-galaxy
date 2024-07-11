import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideSidebar } from "../utils/AppSlice";
import { useSearchParams } from "react-router-dom";
import WatchPagePlaylist from "./WatchPagePlaylist";

const WatchPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hideSidebar());
  });

  const [searchParam] = useSearchParams();
  console.log(searchParam.get("v"));

  return (
    <div className="grid grid-flow-col">
      <div className="mx-5 p-2 grid-cols-10">
        <iframe
          className="rounded-xl"
          width="900"
          height="506"
          src={"https://www.youtube.com/embed/" + searchParam.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="grid-cols-2">
        <WatchPagePlaylist />
      </div>
    </div>
  );
};

export default WatchPage;
