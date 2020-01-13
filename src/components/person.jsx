import React from "react";

const Person = ({ imgUrl, angle, top, leftPos, rangeValue }) => {
  return (
    <div
      className="person-card"
      style={{ top: `${top}%`, left: `${leftPos}%`}}
    >
      <img
        src={imgUrl}
        alt="person"
        style={{ transform: `rotate(${angle}deg)`, borderRadius: `${rangeValue}%` }}
      />
    </div>
  );
};

export default Person;
