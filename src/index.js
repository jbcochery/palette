import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

function Palette() {
  return <App />;
}

ReactDOM.render(<Palette />, document.getElementById("app"));
