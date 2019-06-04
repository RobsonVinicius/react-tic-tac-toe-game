import React from 'react';

import "./styles.css";

const handleClick = () => {
  console.log("Foi");
}

const SquareCollab = () => (
  <button onClick={handleClick} className="square-collab">X</button>
);

export default SquareCollab;