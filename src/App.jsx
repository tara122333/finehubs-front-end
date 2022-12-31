import React from "react";
// import {Routes,Route} from 'react-router-dom'

// import Home from "./Page/Home";
import Temp from "./Page/Temp";


// HOC Files
import DefaultHOC from "./HOC/Home.HOC";

function App() {
  return (
    <div>
      {/* <h1>This is heading tag</h1> */}
      {/* <Home /> */}
       {/* <Routes>
        <Route path="/home" exact  element={<Home/>}/>
        <Route path="/temp" exact element={<Temp/>}/>
      </Routes>  */}
      <DefaultHOC path="/" exact element={Temp} />
      <DefaultHOC path="/home" exact element={Temp} />
    </div>
  );
}

export default App;
