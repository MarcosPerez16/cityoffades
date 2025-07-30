const Services = () => {
  const services = [
    {
      id: 1,
      name: "Premium Haircut",
      description: "Classic cuts with modern styling techniques",
      price: "$35",
      duration: "45 min",
    },
    {
      id: 2,
      name: "Skin Fade",
      description: "Precision fades with seamless blending",
      price: "$40",
      duration: "50 min",
    },
    {
      id: 3,
      name: "Beard Trim & Shape",
      description: "Professional beard grooming and styling",
      price: "$25",
      duration: "30 min",
    },
    {
      id: 4,
      name: "Hot Towel Shave",
      description: "Traditional straight razor with hot towel treatment",
      price: "$45",
      duration: "60 min",
    },
    {
      id: 5,
      name: "Buzz Cut",
      description: "Clean, precise all-over clipper cut",
      price: "$20",
      duration: "20 min",
    },
    {
      id: 6,
      name: "Hair Wash & Style",
      description: "Deep cleanse with professional styling",
      price: "$30",
      duration: "35 min",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <div className="services-badge">
            <span className="services-label">WHAT WE OFFER</span>
          </div>
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">
            Professional grooming services tailored to the modern gentleman
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-header">
                <h3 className="service-name">{service.name}</h3>
                <div className="service-price">{service.price}</div>
              </div>
              <p className="service-description">{service.description}</p>
              <div className="service-footer">
                <span className="service-duration">{service.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
