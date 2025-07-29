const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-container">
        <div className="banner-item">
          <div className="banner-content">
            <span className="banner-label">📞 Phone</span>
            <span className="banner-value">702-915-7032</span>
          </div>
        </div>

        <div className="banner-item">
          <div className="banner-content">
            <span className="banner-label">📍 Address</span>
            <span className="banner-value">1735 N Nellis Blvd</span>
          </div>
        </div>

        <div className="banner-item">
          <div className="banner-content">
            <span className="banner-label">🕒 Open Monday-Saturday</span>
            <span className="banner-value">
              Mon-Fri: 9am - 6pm | Sat: 9am - 4pm
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
