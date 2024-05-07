import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "News",
    "Music",
    "Cricket",
    "Live",
    "Mixes",
    "Software Engineering",
    "Nature",
    "Food",
    "Fishing",
  ];

  return (
    <div className="flex">
      {list.map((btnlist, index) => (
        <Button name={btnlist} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
