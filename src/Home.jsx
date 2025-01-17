import MyAccordion from "./components/Accordion";
import CardCarousel from "./components/CardCarousel";
import Details from "./components/details";
import ImageSlider from "./components/imagesSlider";
import InfoSection from "./components/Info";
import NewsArticles from "./components/NewsArticles";
import OurGallery from "./components/OurGallery";
import OxpinCharity from "./components/Oxpins-Charity";
import Papolar from "./components/Papulor";
import Volunture from "./components/volenture";

const Home = () => {
  return (
    <>
      <OxpinCharity />
      <Papolar />
      <Volunture />
      <CardCarousel />
      <Details />
      <ImageSlider />
      <OurGallery />
      <MyAccordion />
      <InfoSection />
      <NewsArticles />
    </>
  );
};

export default Home;
