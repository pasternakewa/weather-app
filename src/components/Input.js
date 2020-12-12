import React from "react";

const Input = ({ value, onChange, onKeyPress }) => {
  return (
    <div>
      <input className="form__input" {...{ value, onChange, onKeyPress }} />
    </div>
  );
};

export default Input;
