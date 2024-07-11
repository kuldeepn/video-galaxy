import React from "react";
import useFetchVideo from "../utils/useFetchVideo";
import { Link } from "react-router-dom";
import { SideBarPlaylist } from "./SideBarPlaylist";

const WatchPagePlaylist = () => {
  const videos = useFetchVideo();

  return (
    <div className="">
      {videos.map((vid) => {
        return (
          <Link to={"/watch?v=" + vid.id} key={vid.id}>
            <SideBarPlaylist data={vid} />
          </Link>
        );
      })}
    </div>
  );
};

export default WatchPagePlaylist;
