import React from "react";
// import {Routes,Route} from 'react-router-dom'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./Page/Home";


// HOC Files
import DefaultHOC from "./HOC/Home.HOC";

function App() {
  return (
    <div>
      <DefaultHOC path="/" exact element={Home} />
    </div>
  );
}

export default App;
