import ReactDOM from "react-dom";
import ScreenOne from "./Components/ScreenOne/ScreenOne";
import ScreenTwo from "./Components/ScreenTwo/ScreenTwo";    

function App() {
  return (
    <>
      <ScreenOne func={redirectToScreenTwo}/> 
      {/* <ScreenTwo /> */}
    </>
  );
}

function redirectToScreenTwo() {
    ReactDOM.render(<ScreenTwo />, document.querySelector(`.root`));
}

ReactDOM.render(App() , document.querySelector('.root'));
