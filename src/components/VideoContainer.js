import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API_URL } from "../utils/constants";

function VideoContainer() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideos(json.items);
  };

  console.log(videos);

  return (
    <div className="flex flex-wrap">
      {videos.map((vid) => {
        return <VideoCard data={vid} key={vid.id} />;
      })}
    </div>
  );
}

export default VideoContainer;
