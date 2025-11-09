// import React, { useEffect, useState } from "react";
// import { Box, IconButton } from "@mui/material";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
// import "./ImageSlider.css";
// import sl1 from "../../Images/slides/sl-1.jpg";
// import sl2 from "../../Images/slides/sl-2.jpg";
// import sl3 from "../../Images/slides/sl-3.jpg";
//
// const images = [
//   { src: sl1, title: "Title 1", description: "Description for Image 1" },
//   { src: sl2, title: "Title 2", description: "Description for Image 2" },
//   { src: sl3, title: "Title 3", description: "Description for Image 3" },
// ];
//
// const ImageSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000); // Auto slide every 5 seconds
//
//     return () => clearInterval(interval);
//   }, []);
//
//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };
//
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };
//
//   return (
//     <Box className="image-slider">
//       {images.map((image, index) => (
//         <Box
//           key={index}
//           className={`slide ${index === currentIndex ? "current" : ""}`}
//         >
//           <img className="image" src={image.src} alt={`Slide ${index + 1}`} />
//           <Box className="content">
//             <h1>{image.title}</h1>
//             <p>{image.description}</p>
//           </Box>
//         </Box>
//       ))}
//       <IconButton id="prev" onClick={handlePrev} aria-label="Previous slide">
//         <ArrowBackIos />
//       </IconButton>
//       <IconButton id="next" onClick={handleNext} aria-label="Next slide">
//         <ArrowForwardIos />
//       </IconButton>
//     </Box>
//   );
// };
//
// export default ImageSlider;

import { Box, Container, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import sliderImage1 from "../../assets/images/main-slider/slide_v5_1.jpg";
import sliderImage2 from "../../assets/images/main-slider/slide_v5_2.jpg";
import sliderImage3 from "../../assets/images/main-slider/slide_v5_3.jpg";

// const slides = [sliderImage1, sliderImage2, sliderImage3];

const ImageSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const theme = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
    appendDots: (dots) => (
      <Box
        sx={{
          position: "absolute",
          //   left: { xs: "10%", md: "calc(50% - 20px)" },
          left: "85%",
          gap: 3,
          top: "62%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {dots}
      </Box>
    ),
    customPaging: (i) => (
      <Box
        sx={{
          width: 15,
          height: 15,
          backgroundColor:
            activeSlide === i ? theme.palette.primary.main : "transparent",
          borderRadius: "50%",
          margin: "5px",
          cursor: "pointer",
          border: `2px solid #fff`,
          "&:hover": {
            backgroundColor: "grey",
          },
        }}
      />
    ),
  };

  const slides = [
    {
      image: sliderImage1,
      title: "Organic Farming at Its Best",
      subtitle: "Experience the freshest produce from nature",
      buttonLabel: "Learn More",
      buttonLink: "/organic",
    },
    {
      image: sliderImage2,
      title: "Innovative Agricultural Solutions",
      subtitle: "Enhancing productivity with modern techniques",
      buttonLabel: "Discover Innovations",
      buttonLink: "/solutions",
    },
    {
      image: sliderImage3,
      title: "Sustainable Crop Growth",
      subtitle: "Preserving nature while feeding the world",
      buttonLabel: "Get Started",
      buttonLink: "/sustainability",
    },
  ];

  return (
    <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "80vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Container>
              <Box
                sx={{
                  padding: "20px",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                {activeSlide === index && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ color: "white", textShadow: "2px 2px 4px black" }}
                      >
                        {slide.subtitle}
                      </Typography>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <Typography
                        variant="h3"
                        component="h1"
                        sx={{
                          fontWeight: "bold",
                          mt: 1,
                          color: "white",
                          textShadow: "2px 2px 4px black",
                        }}
                      >
                        {slide.title}
                      </Typography>
                    </motion.div>
                    {/* Button hidden as requested */}
                  </>
                )}
              </Box>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
