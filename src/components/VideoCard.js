import React from "react";
import FormatViewCount from "./FormatViewCount";

const VideoCard = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  const { snippet, statistics } = data;
  const { channelTitle, thumbnails, title, publishedAt } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="m-3 p-4 w-[22rem] rounded-lg">
      <img
        alt="thumbnail"
        src={thumbnails?.medium?.url}
        className="rounded-xl"
      ></img>
      <h1 className="font-bold">{title}</h1>
      <h2 className="text-gray-800">{channelTitle}</h2>
      <span className="text-gray-800">{FormatViewCount(viewCount)} views </span>
      <span className="text-gray-800">{publishedAt}</span>
    </div>
  );
};

export default VideoCard;
