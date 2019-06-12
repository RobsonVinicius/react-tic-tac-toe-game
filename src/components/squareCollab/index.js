import React from './node_modules/react';

import "./styles.css";


const SquareCollab = ({player, onClick}) => (
      <button onClick={onClick} className="square-collab">        
        {player}
      </button>
  );

export default SquareCollab;