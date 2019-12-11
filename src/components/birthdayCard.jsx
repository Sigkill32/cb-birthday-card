import React from "react";
import Person from "./person";
import card from "../images/card.jpg";

const BirthdayCard = ({ reason, onHandleClick, imgUrl }) => {
  return (
    <div className="birthday-card" onClick={onHandleClick}>
      <img src={card} alt="" />
      <Person imgUrl={imgUrl} />
      <h2>{reason}</h2>
    </div>
  );
};

export default BirthdayCard;
