import React from "react";

import BoxWrapper from "./components/BoxWrapper";
import BoardCollab from "./components/BoardCollab";
import SquareCollab from "./components/SquareCollab";
import NextPlayer from "./components/NextPlayer";


const App = () => ( 
  <BoxWrapper>
    <NextPlayer />
    <BoardCollab>    
      <SquareCollab />     
      <SquareCollab />     
      <SquareCollab />     
      <SquareCollab />     
      <SquareCollab />     
      <SquareCollab />     
      <SquareCollab />     
      <SquareCollab />     
      <SquareCollab />     
    </BoardCollab>
  </BoxWrapper>
);


export default App;
