import React from "react";
import Person from "./person";
import card from "../images/card.jpg";
import left from "../images/left.svg";
import right from "../images/right.svg";
import Controls from "./controls";

const BirthdayCard = ({
  reason,
  onHandleClick,
  imgUrl,
  onHandleRotateLeft,
  onHandleRotateRight,
  angle,
  onHandleDown,
  onHandleLeft,
  onHandleRight,
  onHandleUp,
  onHandleReset,
  top
}) => {
  return (
    <div className="birthday-card">
      <img src={card} alt="" />
      <Person imgUrl={imgUrl} angle={angle} top={top} />
      <h2>{reason}</h2>
      <div className="rotate-buttons">
        <button onClick={onHandleRotateLeft}>
          <img src={left} alt="rotate left" />
        </button>
        <button onClick={onHandleRotateRight}>
          <img src={right} alt="rotate right" />
        </button>
        <button onClick={onHandleClick} className="back-button">
          Back
        </button>
      </div>
      <Controls
        onHandleDown={onHandleDown}
        onHandleLeft={onHandleLeft}
        onHandleRight={onHandleRight}
        onHandleUp={onHandleUp}
        onHandleReset={onHandleReset}
      />
    </div>
  );
};

export default BirthdayCard;
