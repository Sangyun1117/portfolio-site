import "./css/App.css";
import Header from "./Header";
import AnimatedBackground from "./AnimatedBackground";
import { useEffect, useRef, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import SchoolIcon from "@mui/icons-material/School";
function App() {
  const [showRight, setShowRight] = useState(false);
  const [aboutInView, setAboutInView] = useState(true);
  const aboutRef = useRef<HTMLDivElement>(null);

  // 관찰자 설정
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAboutInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  // About 섹션이 안 보이면 버튼 다시 보이게
  useEffect(() => {
    if (!aboutInView) {
      setShowRight(false);
    }
  }, [aboutInView]);

  return (
    <div>
      <Header />
      <AnimatedBackground style={{ marginTop: "6rem" }}>
        <div className="main-text" style={{ marginRight: "30%" }}>
          Frontend Developer
        </div>
        <div className="main-text" style={{ marginRight: "15%" }}>
          Fast Learner
        </div>
        <div className="main-text" style={{ marginRight: "0%" }}>
          Passionate Coder
        </div>
        <div className="main-text" style={{ marginLeft: "15%" }}>
          Improving Everyday
        </div>
      </AnimatedBackground>
      <div
        ref={aboutRef}
        id="about"
        className="container"
        style={{ overflow: "hidden" }}
      >
        <div style={{ display: "flex", height: "100%", flexDirection: "row" }}>
          {/* 왼쪽 영역 */}
          <div
            style={{
              width: "100%",
              background: "linear-gradient(to bottom, black, yellow)",
              color: "white",
              padding: "2rem",
            }}
          >
            <div className="main-text">About Me</div>
            {!showRight && (
              <button
                onClick={() => setShowRight(true)}
                className="vibrateButton"
              >
                Show More
              </button>
            )}
          </div>

          {/* 오른쪽 영역 (애니메이션 등장) */}
          <div
            style={{
              width: showRight ? "160%" : "0%",
              background: "yellow",
              transition: "width 1s ease",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                flexDirection: "row",
                display: "flex",
              }}
            >
              <div className="card">
                <div className="card-inner">
                  <div
                    className="card-front"
                    style={{ backgroundColor: "blue" }}
                  >
                    <AccountCircleIcon style={{ fontSize: 160 }} />
                  </div>
                  <div className="card-back" style={{ backgroundColor: "red" }}>
                    <div>About Me</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-inner">
                  <div
                    className="card-front"
                    style={{ backgroundColor: "blue" }}
                  >
                    <CalendarMonthSharpIcon style={{ fontSize: 160 }} />
                  </div>
                  <div className="card-back" style={{ backgroundColor: "red" }}>
                    <div>About Me</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-inner">
                  <div
                    className="card-front"
                    style={{ backgroundColor: "blue" }}
                  >
                    <PhoneAndroidIcon style={{ fontSize: 160 }} />
                  </div>
                  <div className="card-back" style={{ backgroundColor: "red" }}>
                    <div>About Me</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ flexDirection: "row", display: "flex" }}>
              <div className="card">
                <div className="card-inner">
                  <div
                    className="card-front"
                    style={{ backgroundColor: "blue" }}
                  >
                    <RoomIcon style={{ fontSize: 160 }} />
                  </div>
                  <div className="card-back" style={{ backgroundColor: "red" }}>
                    <div>About Me</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-inner">
                  <div
                    className="card-front"
                    style={{ backgroundColor: "blue" }}
                  >
                    <EmailIcon style={{ fontSize: 160 }} />
                  </div>
                  <div className="card-back" style={{ backgroundColor: "red" }}>
                    <div>About Me</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-inner">
                  <div
                    className="card-front"
                    style={{ backgroundColor: "blue" }}
                  >
                    <SchoolIcon style={{ fontSize: 160 }} />
                  </div>
                  <div className="card-back" style={{ backgroundColor: "red" }}>
                    <div>About Me</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="stack"
        className="container"
        style={{ backgroundColor: "orange" }}
      >
        <div className="main-text" style={{ color: "white" }}>
          Tech Stack
        </div>
      </div>
      <div
        id="projects"
        className="container"
        style={{ backgroundColor: "yellow" }}
      >
        <div className="main-text" style={{ color: "white" }}>
          Projects
        </div>
      </div>
      <div className="container" style={{ backgroundColor: "green" }}></div>
      <div className="container" style={{ backgroundColor: "blue" }}></div>
    </div>
  );
}

export default App;
