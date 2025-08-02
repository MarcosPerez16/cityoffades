import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { haircuts } from "./data/carouselData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const HaircutCarousel = () => {
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
