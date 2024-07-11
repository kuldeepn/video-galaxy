import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useFetchVideo from "../utils/useFetchVideo";

function VideoContainer() {
  const videos = useFetchVideo();

  console.log(videos);

  return (
    <div className="flex flex-wrap">
      {videos.map((vid) => {
        return (
          <Link to={"/watch?v=" + vid.id} key={vid.id}>
            <VideoCard data={vid} />
          </Link>
        );
      })}
    </div>
  );
}

export default VideoContainer;
