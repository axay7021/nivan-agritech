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

import React, {useState} from "react";
import Slider from "react-slick";
import { Box, Typography, Button, Container, useTheme } from "@mui/material";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  "./images/main-slider/slide_v1_1.jpg",
  "./images/main-slider/slide_v1_2.jpg",
  "./images/main-slider/slide_v1_3.jpg",
];

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
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
    appendDots: dots => (
        <Box
            sx={{
              position: "absolute",
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
    customPaging: i => (
        <Box
            sx={{
              width: 15,
              height: 15,
                backgroundColor: activeSlide === i ? theme.palette.primary.main : "transparent",
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

  return (
      <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <Slider {...settings}>
          {slides.map((slide, index) => (
              <Box
                  key={index}
                  sx={{
                    backgroundImage: `url(${slide})`,
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
                            // backgroundColor: "rgba(0, 0, 0, 0.5)",
                            padding: "20px",
                            borderRadius: "8px",
                            textAlign: "center",
                            color: "#fff",
                        }}
                    >
                        {activeSlide === index && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    <Typography variant="h6">The best Agriculture products</Typography>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1 }}
                                >
                                    <Typography variant="h3" component="h1" sx={{ fontWeight: "bold", mt: 1 }}>
                                        Welcome to
                                    </Typography>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.5 }}
                                >
                                    <Typography variant="h3" component="h1" sx={{ fontWeight: "bold", mt: 1 }}>
                                        Agriculture Farm
                                    </Typography>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 2 }}
                                >
                                    <Button
                                        component={Link}
                                        to="/about"
                                        variant="contained"
                                        color="primary"
                                        sx={{ mt: 3 }}
                                    >
                                        Discover More
                                    </Button>
                                </motion.div>
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