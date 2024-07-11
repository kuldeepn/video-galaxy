import { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "./constants";

const useFetchVideo = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideos(json.items);
  };

  return videos;
};

export default useFetchVideo;
