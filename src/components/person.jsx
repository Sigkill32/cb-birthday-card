import React from "react";

const Person = ({ imgUrl, angle, top, leftPos }) => {
  return (
    <div
      className="person-card"
      style={{ top: `${top}%`, left: `${leftPos}%` }}
    >
      <img
        src={imgUrl}
        alt="person"
        style={{ transform: `rotate(${angle}deg)` }}
      />
    </div>
  );
};

export default Person;
