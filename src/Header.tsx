import { useState, useEffect } from 'react'
import './css/Header.css'
import { ArrowUp } from 'lucide-react';

const Header: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo" onClick={scrollToTop}>MyPortfolio</div>
          <nav className="nav">
            <button className="nav-btn" onClick={() => scrollToSection('about')}>About</button>
            <button className="nav-btn" onClick={() => scrollToSection('projects')}>Projects</button>
            <button className="nav-btn" onClick={() => scrollToSection('contact')}>Contact</button>
          </nav>
        </div>
      </header>

      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default Header;