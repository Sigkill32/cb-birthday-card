import React from "react";
import Person from "./person";
import card from "../images/card.jpg";

const BirthdayCard = ({
  reason,
  onHandleClick,
  imgUrl,
  onHandleRotateLeft,
  onHandleRotateRight,
  angle
}) => {
  return (
    <div className="birthday-card">
      <img src={card} alt="" />
      <Person imgUrl={imgUrl} angle={angle} />
      <h2>{reason}</h2>
      <div className="rotate-buttons">
        <button onClick={onHandleRotateLeft}>Rotate Left</button>
        <button onClick={onHandleRotateRight}>Rotate Right</button>
        <button onClick={onHandleClick}>Back</button>
      </div>
    </div>
  );
};

export default BirthdayCard;
