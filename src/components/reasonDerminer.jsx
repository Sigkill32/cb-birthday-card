import React from "react";

const ReasonDeteminer = ({ onHandleChange, onHandleGen, value }) => {
  return (
    <div className="reason-determiner">
      <div className="form-container">
        <input
          type="text"
          onChange={onHandleChange}
          value={value}
          placeholder="Your Reason"
        />
        <button onClick={onHandleGen}>Generate card</button>
      </div>
    </div>
  );
};

export default ReasonDeteminer;
