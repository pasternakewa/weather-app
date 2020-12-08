import React from "react";

const Input = ({ value, onChange, onKeyPress }) => {
  return (
    <div>
      <input {...{ value, onChange, onKeyPress }} />
    </div>
  );
};

export default Input;
