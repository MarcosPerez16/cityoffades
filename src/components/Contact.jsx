const Contact = () => {
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

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-badge">
            <span className="contact-label">GET IN TOUCH</span>
          </div>
          <h2 className="contact-title">Visit Us Today</h2>
          <p className="contact-subtitle">
            Ready for your next great cut? Come see us or give us a call
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <h3 className="info-title">Call Us</h3>
                <p className="info-detail">(702) 915-7032</p>
                <button className="info-button" onClick={handleCall}>
                  Call Now
                </button>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3 className="info-title">Visit Our Shop</h3>
                <p className="info-detail">
                  1735 N Nellis Blvd, Unit B<br />
                  Las Vegas, NV 89115
                </p>
                <button className="info-button" onClick={handleDirections}>
                  Get Directions
                </button>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">🕒</div>
              <div className="info-content">
                <h3 className="info-title">Business Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-map">
            <div className="map-placeholder">
              <div className="map-content">
                <div className="map-icon">🗺️</div>
                <h4>Find Us on the Map</h4>
                <p>Located on North Nellis Boulevard</p>
                <button className="map-button" onClick={handleDirections}>
                  Open in Maps
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="social-section">
          <h3 className="social-title">Follow Our Work</h3>
          <div className="social-links">
            <button className="social-button" onClick={handleInstagram}>
              <span className="social-icon">📷</span>
              <span className="social-text">@cityoffades_barbershop</span>
            </button>
          </div>
          <p className="social-subtitle">
            See our latest cuts and styles on Instagram
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
