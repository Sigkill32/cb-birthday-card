import React from "react";
import Person from "./person";

const BirthdayCard = ({ reason, onHandleClick }) => {
  return (
    <div className="birthday-card" onClick={onHandleClick}>
      <Person />
      <h2>{reason}</h2>
    </div>
  );
};

export default BirthdayCard;
