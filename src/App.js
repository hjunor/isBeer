import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Storage } from "./context/storeContext";
import Routes from "./routes";
import Headers from "./components/header";
const App = () => (
  <Storage>
    <BrowserRouter>
      <Headers />
      <Routes />
    </BrowserRouter>
  </Storage>
);

export default App;
