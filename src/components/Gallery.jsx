import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    { src: "/gallery/cut-1.jpg", alt: "Modern Fade Cut" },
    { src: "/gallery/cut-2.jpg", alt: "Classic Pompadour" },
    { src: "/gallery/cut-3.webp", alt: "Textured Crop" },
    { src: "/gallery/cut-4.jpg", alt: "Beard Trim & Shape" },
    { src: "/gallery/cut-5.jpg", alt: "Skin Fade" },
    { src: "/gallery/cut-6.jpg", alt: "Undercut Style" },
    { src: "/gallery/cut-7.jpg", alt: "Business Cut" },
    { src: "/gallery/cut-8.jpg", alt: "Creative Design" },
    { src: "/gallery/cut-9.jpg", alt: "Hot Towel Shave" },
    { src: "/gallery/cut-10.jpg", alt: "Long Hair Styling" },
    { src: "/gallery/cut-11.jpg", alt: "Buzz Cut Precision" },
    { src: "/gallery/cut-12.webp", alt: "Mustache Grooming" },
    { src: "/gallery/cut-13.jpg", alt: "Beard Grooming" },
    { src: "/gallery/cut-14.jpg", alt: "Beard Grooming Two" },
  ];

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
