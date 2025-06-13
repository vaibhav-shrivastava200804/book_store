import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/IntroImg/Intro";
import First from "./components/Contents/First";
import Second from "./components/Contents/Second";
const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Intro />
        <First />
        <Second />  
      </div>
    </>
  );
};

export default App;
