import React from "react";

const Input = ({
  label,
  type,
  className,
  status,
  onChange,
  name,
  value,
  feedback,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        {label}
      </label>
      <input
        type={`${type}`}
        className={`${className}`}
        onChange={onChange}
        value={value}
        name={name}
      />
      <div className={`form-text invalid-feedback`}>{status}</div>
    </div>
  );
};

export default Input;
