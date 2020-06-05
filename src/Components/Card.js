import React from "react";
import Button from "./Button";

const Card = ({ pictureUrl, name, popularity, action, buttonName, index }) => {
  return (
    <tr>
      <td>
        <img style={{ height: 50 }} src={pictureUrl} alt={name}></img>
      </td>
      <td>{name}</td>
      <td>{popularity}</td>
      <td>
        <Button index={index} onClick={action} text={buttonName}></Button>
      </td>
    </tr>
  );
};

export default Card;
