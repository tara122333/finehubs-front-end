import React from "react";
// import {Routes,Route} from 'react-router-dom'

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
