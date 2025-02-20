import React, { useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "./ImageSlider.css";
import sl1 from "../../Images/slides/sl-1.jpg";
import sl2 from "../../Images/slides/sl-2.jpg";
import sl3 from "../../Images/slides/sl-3.jpg";

const images = [
  { src: sl1, title: "Title 1", description: "Description for Image 1" },
  { src: sl2, title: "Title 2", description: "Description for Image 2" },
  { src: sl3, title: "Title 3", description: "Description for Image 3" },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Auto slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box className="image-slider">
      {images.map((image, index) => (
        <Box
          key={index}
          className={`slide ${index === currentIndex ? "current" : ""}`}
        >
          <img className="image" src={image.src} alt={`Slide ${index + 1}`} />
          <Box className="content">
            <h1>{image.title}</h1>
            <p>{image.description}</p>
          </Box>
        </Box>
      ))}
      <IconButton id="prev" onClick={handlePrev} aria-label="Previous slide">
        <ArrowBackIos />
      </IconButton>
      <IconButton id="next" onClick={handleNext} aria-label="Next slide">
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default ImageSlider;
