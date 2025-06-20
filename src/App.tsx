import "./css/App.css";
import Header from "./Header";

function App() {

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
