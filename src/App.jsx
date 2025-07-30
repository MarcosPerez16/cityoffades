import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import HaircutCarousel from "./components/HaircutCarousel";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Banner />
      <HaircutCarousel />
      <AboutUs />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
