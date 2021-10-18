import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Storage } from "./context/storeContext";
import Routes from "./routes";
import Headers from "./components/header";
import MenuMobile from "./components/MemuMobile";
import PWAPrompt from "react-ios-pwa-prompt";

const App = () => (
  <Storage>
    <PWAPrompt
      copyTitle="iClearchain this app is from http://aurionsystems.com.au/ "
      copyBody="This application has app functionality. Add it to your home screen to use it in fullscreen and while offline "
      promptOnVisit={1}
      timesToShow={3}
      copyClosePrompt="Close"
      permanentlyHideOnDismiss={false}
    />
    <BrowserRouter>
      <Headers />
      <Routes />
      <MenuMobile />
    </BrowserRouter>
  </Storage>
);

export default App;
