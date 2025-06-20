import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./css/App.css";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div
        className="container"
        style={{ backgroundColor: "red", marginTop: "6rem" }}
      ></div>
      <div
        className="container"
        style={{ backgroundColor: "orange"}}
      ></div>
            <div
        className="container"
        style={{ backgroundColor: "yellow"}}
      ></div>
            <div
        className="container"
        style={{ backgroundColor: "green"}}
      ></div>
            <div
        className="container"
        style={{ backgroundColor: "blue"}}
      ></div>
    </div>
  );
}

export default App;
