import React from "react";
import right from "../images/right-arrow.svg";
import down from "../images/down-arrow.svg";
import left from "../images/left-arrow.svg";
import up from "../images/up-arrow.svg";

const Controls = ({
  onHandleDown,
  onHandleLeft,
  onHandleRight,
  onHandleUp,
  onHandleReset,
  onHandleRangeChange,
  rangeValue,
  onHandleSelectCard,
  cardValue
}) => {
  return (
    <div className="controls">
      <div className="direction-controls">
        <h5>Image controls</h5>
        <button onClick={onHandleUp} className="up">
        <img src={up} alt="UP" />
      </button>
      <div className="right-left">
        <button onClick={onHandleLeft}>
          <img src={left} alt="LEFT" />
        </button>
        <button onClick={onHandleReset}>RESET</button>
        <button onClick={onHandleRight}>
          <img src={right} alt="RIGHT" />
        </button>
      </div>
      <button onClick={onHandleDown} className="down">
        <img src={down} alt="DOWN" />
      </button>
      </div>
      <input
        type="range"
        min="0"
        max="50"
        step="10"
        className="range"
        onChange={onHandleRangeChange}
        value={rangeValue}
      />
      <select name="cards" onChange={onHandleSelectCard} value={cardValue}>
        <option value="card">Card 1</option>
        <option value="card2">Card 2</option>
        <option value="card3">Card 3</option>
      </select>
    </div>
  );
};

export default Controls;
