import "./css/App.css";
import "./css/Banner.css";
import Header from "./Header";
import AnimatedBackground from "./AnimatedBackground";
import { useEffect, useRef, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import SchoolIcon from "@mui/icons-material/School";
import Banner from "./Banner";
import { HomeTravelModal } from "./modal";

function App() {
  const [showRight, setShowRight] = useState(false);
  const [aboutInView, setAboutInView] = useState(true);
  const aboutRef = useRef<HTMLDivElement>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <div style={{ height: "6rem", backgroundColor: "black" }}></div>
      <AnimatedBackground>
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
              padding: "2rem",
            }}
          >
            <div className="big-text" style={{ color: "black" }}>
              <hr />
              About Me
            </div>
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
            className="about-hidden-container"
            style={{
              width: showRight ? "160%" : "0%",
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
                    <div>Name</div>
                    <span>이상윤</span>
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
                    <div>생년월일</div>
                    <span>2000.11.17</span>
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
                    <div>전화번호</div>
                    <span>010-4057-5165</span>
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
                    <div>지역</div>
                    <span>경기도 광명시</span>
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
                    <div>이메일</div>
                    <span>son5165@naver.com</span>
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
                    <div>학력</div>
                    <span>한성대학교 웹공학트랙 졸업</span>
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
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="big-text" style={{ color: "black" }}>
          Tech Stack
        </div>
        <span>language: Java, Java Script, TypeScript, Kotlin, C# </span>
        <span>Frontend: React, HTML, CSS</span>
        <span>Backend: FireBase</span>
        <span>Game Engine : Unity(2D)</span>
      </div>
      <div id="projects" style={{ display: "flex", flexDirection: "column" }}>
        <div
          className="big-text"
          style={{ color: "black", marginBottom: "20px" }}
        >
          Projects
        </div>
        <div className="project-container">
          <Banner
            className="banner home_travel"
            onClick={() => setIsModalOpen(true)}
          >방구석 국내 여행</Banner>
          <Banner className="banner home_travel"></Banner>
          <Banner className="banner home_travel"></Banner>
          <Banner className="banner home_travel"></Banner>
          <Banner className="banner home_travel"></Banner>
        </div>
      </div>
      <div className="container">
                <div
          className="big-text"
          style={{ color: "black", marginBottom: "20px" }}
        >
          <hr />
          A1
        </div>
      </div>
      <div className="container">
                <div
          className="big-text"
          style={{ color: "black", marginBottom: "20px" }}
        >
          <hr />
          A2
        </div>
      </div>
      <HomeTravelModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
            </AnimatedBackground>
    </div>
  );
}

export default App;
