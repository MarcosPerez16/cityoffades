import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBookNow = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  const handleNavClick = () => {
    setIsMenuOpen(false); // Close menu when any nav link is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* MOBILE HAMBURGER BUTTON */}
        <button
          className="hamburger-btn"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
        </button>

        {/* LEFT SIDE LINKS - Desktop */}
        <div className="nav-links-left">
          <a href="#home" onClick={handleNavClick}>
            HOME
          </a>
          <a href="#about" onClick={handleNavClick}>
            ABOUT
          </a>
          <a href="#services" onClick={handleNavClick}>
            SERVICES
          </a>
        </div>

        {/* LOGO IN MIDDLE */}
        <div className="nav-logo">
          <img src="/logo.jpg" alt="City of Fades Logo" />
        </div>

        {/* RIGHT SIDE LINKS - Desktop */}
        <div className="nav-links-right">
          <a href="#gallery" onClick={handleNavClick}>
            GALLERY
          </a>
          <a href="#contact" onClick={handleNavClick}>
            CONTACT
          </a>
          <button className="book-btn" onClick={handleBookNow}>
            BOOK NOW
          </button>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
          <div className="mobile-menu-content">
            <a href="#home" onClick={handleNavClick}>
              HOME
            </a>
            <a href="#about" onClick={handleNavClick}>
              ABOUT
            </a>
            <a href="#services" onClick={handleNavClick}>
              SERVICES
            </a>
            <a href="#gallery" onClick={handleNavClick}>
              GALLERY
            </a>
            <a href="#contact" onClick={handleNavClick}>
              CONTACT
            </a>
            <button className="mobile-book-btn" onClick={handleBookNow}>
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
