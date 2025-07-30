const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleCall = () => {
    window.location.href = "tel:+17029157032";
  };

  const handleDirections = () => {
    window.open(
      "https://maps.google.com/?q=1735+N+Nellis+Blvd,+Unit+B+Las+Vegas+NV+89115",
      "_blank"
    );
  };

  const handleInstagram = () => {
    window.open("https://instagram.com/cityoffades_barbershop", "_blank");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.jpg" alt="City of Fades Logo" />
            </div>
            <h3 className="footer-title">City of Fades</h3>
            <p className="footer-description">
              Las Vegas's premier destination for modern men's grooming. Quality
              cuts, professional service, every time.
            </p>
            <div className="footer-social">
              <button className="social-link" onClick={handleInstagram}>
                <span className="social-icon">📷</span>
                <span>Follow Us</span>
              </button>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-menu">
              <li>
                <a href="#home" onClick={() => scrollToSection("home")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => scrollToSection("about")}>
                  About
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => scrollToSection("services")}>
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={() => scrollToSection("gallery")}>
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={() => scrollToSection("testimonials")}
                >
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => scrollToSection("contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="footer-contact-item">
              <span className="contact-icon">📞</span>
              <div className="contact-details">
                <p>(702) 915-7032</p>
                <button className="contact-link" onClick={handleCall}>
                  Call Now
                </button>
              </div>
            </div>
            <div className="footer-contact-item">
              <span className="contact-icon">📍</span>
              <div className="contact-details">
                <p>
                  1735 N Nellis Blvd, Unit B<br />
                  Las Vegas, NV 89115
                </p>
                <button className="contact-link" onClick={handleDirections}>
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          <div className="footer-hours">
            <h4 className="footer-heading">Business Hours</h4>
            <div className="hours-grid">
              <div className="hours-row">
                <span>Mon - Fri</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-row">
                <span>Sat</span>
                <span>9:00 AM - 4:00 PM</span>
              </div>
              <div className="hours-row">
                <span>Sun</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} City of Fades Barbershop. All rights reserved.
            </p>
            <p className="footer-tagline">
              Established 2023 • Las Vegas, Nevada
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
