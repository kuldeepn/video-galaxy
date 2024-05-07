import React from "react";

const VideoCard = ({ data }) => {
  console.log(data);
  if (!data) {
    return <div>Loading...</div>;
  }

  const { snippet, statistics } = data;

  if (!snippet) {
    return <div>No data available</div>;
  }

  const { channelTitle, thumbnails, title } = snippet;
  const { viewCount } = statistics;

  const formatViewCount = (viewCount) => {
    const formatter = new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
      maximumFractionDigits: 2,
    });
    return formatter.format(viewCount);
  };

  return (
    <div className="m-3 p-4 shadow-lg w-[22rem]">
      <img alt="thumbnail" src={thumbnails?.medium?.url}></img>
      <h1 className="font-bold">{title}</h1>
      <h2>{channelTitle}</h2>
      <p>{formatViewCount(viewCount)}</p>
    </div>
  );
};

export default VideoCard;
