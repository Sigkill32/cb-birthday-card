import React from "react";

const Person = ({ imgUrl, angle, top }) => {
  return (
    <div className="person-card" style={{ top: `${top}%` }}>
      <img
        src={imgUrl}
        alt="person"
        style={{ transform: `rotate(${angle}deg)` }}
      />
    </div>
  );
};

export default Person;
