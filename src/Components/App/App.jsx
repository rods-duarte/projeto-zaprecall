import React from "react";
import ScreenOne from "../ScreenOne/ScreenOne";
import ScreenTwo from "../ScreenTwo/ScreenTwo";

import "./style.css";

export default function App() {
  const [initiation, setInitiation] = React.useState(true);

  return initiation ? (<ScreenOne setInitiation={setInitiation}/>) : (<ScreenTwo />);
}
