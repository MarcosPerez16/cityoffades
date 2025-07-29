const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <div className="about-badge">
              <span className="about-label">OUR STORY</span>
            </div>
            <h2 className="about-title">About Us</h2>
            <p className="about-description">
              Established in 2023, City of Fades has quickly become Las Vegas's
              premier destination for modern men's grooming. We combine
              traditional barbering techniques with contemporary style to
              deliver precision cuts that reflect your unique personality.
            </p>
            <p className="about-description">
              Our skilled barbers are passionate about their craft, staying
              current with the latest trends while honoring classic techniques.
              Every cut is tailored to enhance your features and fit your
              lifestyle.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">2023</span>
                <span className="stat-label">Established Since</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">6</span>
                <span className="stat-label">Expert Barbers</span>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img
              src="/about/about-img.jpg"
              alt="City of Fades Barber Shop Interior"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
