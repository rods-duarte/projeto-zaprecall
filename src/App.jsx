import React from "react";
import ScreenOne from "./Components/ScreenOne/ScreenOne";
import ScreenTwo from "./Components/ScreenTwo/ScreenTwo";

export default function App() {
  const [initiation, setInitiation] = React.useState(true);

  return initiation ? (<ScreenOne setInitiation={setInitiation}/>) : (<ScreenTwo />);
}
