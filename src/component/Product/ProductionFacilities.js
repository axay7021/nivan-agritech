import { Box, Typography } from "@mui/material";
import React from "react";
import companyImage from "../../Images/infastructure-home.jpg";

const ProductionFacilities = () => {
  return (
    <Box
      className="production-facilities"
      sx={{
        // marginTop: 2,
        display: "flex",
        justifyContent: { xs: "center", md: "flex-start" },
        alignItems: "center",
        padding: { xs: "1rem", md: "2rem" },
        backgroundImage: `url(${companyImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        height: { xs: "50vh", sm: "60vh", md: "70vh" },
        zIndex: -1,
        overflow: "hidden",
        backgroundAttachment: { xs: "scroll", md: "fixed" },
      }}
    >
      <Box
        className="text-section"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: { xs: "1.5rem", md: "2.5rem" },
          borderRadius: 1,
          boxShadow: 2,
          zIndex: 1,
          position: "relative",
          maxWidth: { xs: 300, sm: 400, md: 500 },
          width: { xs: "90%", md: "80%" },
          textAlign: "left",
          marginLeft: { xs: 0, md: "2rem" },
          marginTop: { xs: "1rem", md: 2 },
          marginBottom: 2,
          height: { xs: "auto", md: "60vh" },
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            mb: 2,
            color: "#333",
            textTransform: "uppercase",
            letterSpacing: "1px",
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          PRODUCTION FACILITIES
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 2,
            fontSize: { xs: "0.875rem", md: "1.125rem" },
            color: "#333",
            lineHeight: 1.6,
          }}
        >
          Our manufacturing facility is located at Plot No. 408 to 411, Kerala
          GIDC Estate, Off NH-8, Kerala, Taluka Bavla, Ahmedabad – 382220,
          Gujarat, India. Our Company manufactured 7,577.21 MT of agrochemical
          formulations in Fiscal 2021.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 2,
            fontSize: { xs: "0.875rem", md: "1.125rem" },
            color: "#333",
            lineHeight: 1.6,
          }}
        >
          Our manufacturing facility is equipped with modern plant and machinery
          capable of producing quality agrochemical products and has received
          quality control certifications such as ISO 9001:2015, ISO 14001:2015,
          and ISO 45001:2018 for development.
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductionFacilities;
