import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const HaircutCarousel = () => {
  const haircuts = [
    {
      id: 1,
      name: "Classic Fade",
      image: "/haircuts/classic-fade.jpg",
    },
    {
      id: 2,
      name: "Buzz Cut",
      image: "/haircuts/buzz-cut.webp",
    },
    {
      id: 3,
      name: "Pompadour",
      image: "/haircuts/pompadour.jpg",
    },
    {
      id: 4,
      name: "Undercut",
      image: "/haircuts/undercut.jpg",
    },
    {
      id: 5,
      name: "Crew Cut",
      image: "/haircuts/crewcut.jpg",
    },
    {
      id: 6,
      name: "Textured Crop",
      image: "/haircuts/textured-crop.webp",
    },
  ];

  return (
    <section className="haircut-carousel-section">
      <div className="carousel-container">
        <h2 className="carousel-title">POPULAR HAIRCUTS FOR MEN</h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="haircut-swiper"
        >
          {haircuts.map((haircut) => (
            <SwiperSlide key={haircut.id}>
              <div className="haircut-card">
                <img src={haircut.image} alt={haircut.name} />
                <h3>{haircut.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HaircutCarousel;
