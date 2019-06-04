import React from "react";

import BoardCollab from "./components/BoardCollab";
import SquareCollab from "./components/SquareCollab";
import NextPlayer from "./components/NextPlayer";


const App = () => ( 
  <>
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
  </>
);


export default App;
