import { useState, useEffect } from "react";
import "./css/Header.css";
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';

const Header: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollStandard = document.getElementById("about");
      if (scrollStandard) {
        const top = scrollStandard.offsetTop;
        setShowScrollTop(window.scrollY >= top);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const header = document.querySelector(".header");
    if (element) {
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo" onClick={scrollToTop}>
            Sangyun's Portfolio
          </div>
          <nav className="nav">
            <button
              className="nav-btn"
              onClick={() => scrollToSection("about")}
            >
              About Me
            </button>
            <button
              className="nav-btn"
              onClick={() => scrollToSection("stack")}
            >
              Tech Stack
            </button>
            <button
              className="nav-btn"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
          </nav>
        </div>
      </header>

      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <ArrowUpwardSharpIcon style={{ fontSize: 20, color:"white" }} />
        </button>
      )}
    </>
  );
};

export default Header;
