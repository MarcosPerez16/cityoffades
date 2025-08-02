import { services } from "./data/servicesData";

const Services = () => {
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
