import { useState, useEffect } from "react";
import { testimonials } from "./data/testimonialsData";

const Testimonials = () => {
  const [currentReview, setCurrentReview] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <div className="testimonials-badge">
            <span className="testimonials-label">CLIENT REVIEWS</span>
          </div>
          <h2 className="testimonials-title">What Our Clients Say</h2>
          <p className="testimonials-subtitle">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-number">4.9</div>
            <div className="stat-stars">{renderStars(5)}</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Customer Satisfaction</div>
          </div>
        </div>

        <div className="testimonials-carousel">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                {testimonials[currentReview].review}
              </p>
              <div className="testimonial-rating">
                {renderStars(testimonials[currentReview].rating)}
              </div>
            </div>

            <div className="testimonial-author">
              <div className="author-image">
                <img
                  src={testimonials[currentReview].image}
                  alt={testimonials[currentReview].name}
                />
              </div>
              <div className="author-info">
                <h4 className="author-name">
                  {testimonials[currentReview].name}
                </h4>
                <p className="author-service">
                  {testimonials[currentReview].service}
                </p>
              </div>
            </div>
          </div>

          <div className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  index === currentReview ? "active" : ""
                }`}
                onClick={() => setCurrentReview(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
