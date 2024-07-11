import React from "react";
import FormatViewCount from "./FormatViewCount";

export const SideBarPlaylist = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  const { snippet, statistics } = data;
  const { channelTitle, thumbnails, title } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="flex m-2">
      <img
        alt="thumbnail"
        src={thumbnails?.medium?.url}
        className="rounded-xl w-[168px] h-[94px]"
      ></img>
      <div className="mx-2">
        <h1 className="font-bold text-sm">{title}</h1>
        <h2 className="text-gray-800 text-sm">{channelTitle}</h2>
        <p className="text-gray-800 text-sm">
          {FormatViewCount(viewCount)} views
        </p>
      </div>
    </div>
  );
};
