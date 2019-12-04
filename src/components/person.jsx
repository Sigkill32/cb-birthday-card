import React from "react";
import person from "../images/person.jpg";

const Person = () => {
  return (
    <div className="person-card">
      <img src={person} alt="person" />
    </div>
  );
};

export default Person;
