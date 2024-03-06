import React from "react";

const Button = ({ label, type, onClick }) => {
  return (
    <button type="button" className={`btn btn-${type}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
