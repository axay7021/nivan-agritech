import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const images = [
  "./images/gallery/gallery-1-img-1.jpg",
  "./images/gallery/gallery-1-img-2.jpg",
  "./images/gallery/gallery-1-img-3.jpg",
  "./images/gallery/gallery-1-img-4.jpg",
  "./images/gallery/gallery-1-img-5.jpg",
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: "40px", // Increased padding
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "30px" } },
    { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: "20px" } },
  ],
};

const ProductCarousel = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: "#f5f0e9" }}>
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Typography variant="h6" color="textSecondary">
            Our Gallery
          </Typography>
          <Typography variant="h4" fontWeight="bold">
            Checkout Gallery
          </Typography>
          <Box component="img" src="./images/resources/leaf.png" alt="Leaf" sx={{ width: 50 }} />
        </Stack>

        <Box sx={{ mt: 4 }}>
          <Slider {...settings}>
            {images.map((img, index) => (
              <Box key={index} sx={{ px: 2, boxSizing: "border-box", padding: "0 10px" }}>
                <Box
                  component="img"
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  sx={{
                    width: "100%",
                    borderRadius: 2,
                    boxShadow: 3,
                    display: "block",
                    margin: "auto",
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductCarousel;
