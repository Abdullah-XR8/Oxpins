import { useEffect, useState } from "react";
import styling from "./imageSlider.module.css";

const images = [
  "/images/charitylife.webp",
  "/images/treelife.webp",
  "/images/lorem.webp",
  "/images/thebird.webp",
  "/images/healthcare.webp",
  "/images/unity.webp",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImagesCount = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getDisplayedImages = () => {
    const displayedImages = [];
    for (let i = 0; i < visibleImagesCount; i++) {
      const imageIndex = (currentIndex + i) % images.length;
      displayedImages.push(images[imageIndex]);
    }
    return displayedImages;
  };

  return (
    <div className={styling.container}>
      <div className={styling.imagewrapper}>
        <div className={styling.imagescontainer}>
          {getDisplayedImages().map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={styling.image}
              style={{
                transform: `translateX(-${currentIndex * (12 + 2)}vw)`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
