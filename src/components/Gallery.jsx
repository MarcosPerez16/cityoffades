import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { galleryImages } from "./data/galleryData";

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <div className="gallery-badge">
            <span className="gallery-label">OUR PORTFOLIO</span>
          </div>
          <h2 className="gallery-title">Gallery</h2>
          <p className="gallery-subtitle">
            See the artistry and precision behind every cut
          </p>
        </div>

        <div className="gallery-masonry">
          <ResponsiveMasonry
            columnsCountBreakPoints={{
              350: 1,
              750: 2,
              900: 3,
              1200: 4,
            }}
          >
            <Masonry gutter="20px">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="gallery-item"
                  onClick={() => openLightbox(index)}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <div className="gallery-overlay">
                    <div className="overlay-content">
                      <span className="overlay-icon">🔍</span>
                      <span className="overlay-text">View Details</span>
                    </div>
                  </div>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentIndex}
        slides={galleryImages}
      />
    </section>
  );
};

export default Gallery;
