import React from "react";

const Person = ({ imgUrl, angle }) => {
  return (
    <div className="person-card">
      <img
        src={imgUrl}
        alt="person"
        style={{ transform: `rotate(${angle}deg)` }}
      />
    </div>
  );
};

export default Person;
