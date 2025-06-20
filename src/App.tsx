import "./css/App.css";
import Header from "./Header";
import AnimatedBackground from "./AnimatedBackground";

function App() {
  return (
    <div>
      <Header />
      <AnimatedBackground style={{ marginTop: "6rem" }}>
        <div className="main-text">Frontend Developer</div>
        <div className="main-text">Fast Learner</div>
        <div className="main-text">Passionate Coder</div>
        <div className="main-text">Improving Everyday</div>
      </AnimatedBackground>
      <div
        id="about"
        className="container"
        style={{ backgroundColor: "red" }}
      ></div>
      <div
        id="projects"
        className="container"
        style={{ backgroundColor: "orange" }}
      ></div>
      <div
        id="contact"
        className="container"
        style={{ backgroundColor: "yellow" }}
      ></div>
      <div className="container" style={{ backgroundColor: "green" }}></div>
      <div className="container" style={{ backgroundColor: "blue" }}></div>
    </div>
  );
}

export default App;
