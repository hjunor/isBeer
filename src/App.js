import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Storage } from "./context/storeContext";
import Routes from "./routes";
import Headers from "./components/header";
import MenuMobile from "./components/MemuMobile";
const App = () => (
  <Storage>
    <BrowserRouter>
      <Headers />
      <Routes />
      <MenuMobile />
    </BrowserRouter>
  </Storage>
);

export default App;
