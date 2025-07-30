import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Marcus Johnson",
      rating: 5,
      review:
        "Best cut I've ever gotten! The attention to detail is incredible. Been coming here for 6 months and never disappointed.",
      service: "Skin Fade & Beard Trim",
      image: "/testimonials/customer-1.webp",
    },
    {
      id: 2,
      name: "David Rodriguez",
      rating: 5,
      review:
        "Professional service, clean environment, and skilled barbers. They really know how to work with different hair types.",
      service: "Premium Haircut",
      image: "/testimonials/customer-2.jpg",
    },
    {
      id: 3,
      name: "James Mitchell",
      rating: 5,
      review:
        "The hot towel shave was an amazing experience. Top-notch service and great conversation. Highly recommend!",
      service: "Hot Towel Shave",
      image: "/testimonials/customer-3.jpg",
    },
    {
      id: 4,
      name: "Alex Chen",
      rating: 5,
      review:
        "Modern shop with old-school quality. These guys are artists! My fade is perfect every single time.",
      service: "Modern Fade",
      image: "/testimonials/customer-4.jpg",
    },
    {
      id: 5,
      name: "Michael Thompson",
      rating: 5,
      review:
        "Clean shop, friendly staff, and exceptional cuts. They listen to what you want and deliver beyond expectations.",
      service: "Textured Crop",
      image: "/testimonials/customer-5.webp",
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials-section">
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
