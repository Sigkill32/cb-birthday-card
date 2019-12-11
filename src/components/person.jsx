import React from "react";

const Person = ({ imgUrl }) => {
  return (
    <div className="person-card">
      <img src={imgUrl} alt="person" />
    </div>
  );
};

export default Person;
