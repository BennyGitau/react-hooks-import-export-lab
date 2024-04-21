import React from "react";
import Home from "./Home"
import NavBar from "./NavBar"
import About from "./About"

function App() {
  return (
    <div>
      <NavBar />
      <Home username="liza" city="New York"/>
      <About />
    </div>
  );
}

export default App;
