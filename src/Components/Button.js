import React from "react";

const Button = ({ onClick, text, index }) => {
  return <button onClick={(e) => onClick(index)}>{text}</button>;
};

export default Button;
