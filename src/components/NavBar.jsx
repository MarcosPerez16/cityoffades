const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* LEFT SIDE LINKS */}
        <div className="nav-links-left">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
        </div>

        {/* LOGO */}
        <div>
          {/* LOGO HERE */}
          <img className="nav-logo" src="/logo.jpg" alt="City of Fades Logo" />
        </div>

        {/* RIGHT SIDE LINKS */}
        <div className="nav-links-right">
          <a href="#gallery">GALLERY</a>
          <a href="#contact">CONTACT</a>
          <button className="book-btn">BOOK NOW</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
