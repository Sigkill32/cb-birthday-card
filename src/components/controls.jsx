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
  onHandleRangeChange
}) => {
  return (
    <div className="controls">
      <div className="direction-controls">
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
        name="width"
        min="50"
        max="100"
        step="10"
        className="range"
        onChange={onHandleRangeChange}
      />
    </div>
  );
};

export default Controls;
