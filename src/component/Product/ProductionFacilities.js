import { Box, Typography } from "@mui/material";
import React from "react";
import companyImage from "../../assets/images/infastructure-home.jpg";

const ProductionFacilities = () => {
  return (
    <Box
      className="production-facilities"
      sx={{
        display: "flex",
        justifyContent: { xs: "center", md: "flex-start" },
        alignItems: { xs: "center", md: "center" },
        padding: { xs: "1rem", sm: "1.5rem", md: "2rem" },
        backgroundImage: `url(${companyImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        minHeight: { xs: "80vh", sm: "85vh", md: "90vh" },
        height: "auto",
        zIndex: -1,
        overflow: "visible",
        backgroundAttachment: { xs: "scroll", md: "fixed" },
        paddingTop: { xs: "2rem", sm: "2.5rem", md: "2rem" },
        paddingBottom: { xs: "2rem", sm: "2.5rem", md: "2rem" },
      }}
    >
      <Box
        className="text-section"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          borderRadius: 1,
          boxShadow: 2,
          zIndex: 1,
          position: "relative",
          maxWidth: { xs: "90%", sm: "85%", md: 500 },
          width: { xs: "90%", sm: "85%", md: "80%" },
          textAlign: "left",
          marginLeft: { xs: 0, md: "2rem" },
          marginTop: { xs: "1rem", sm: "1.5rem", md: 2 },
          marginBottom: { xs: "1rem", sm: "1.5rem", md: 2 },
          height: "auto",
          overflow: "visible",
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "center", sm: "center", md: "flex-start" },
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            mb: { xs: 1.5, sm: 2, md: 2 },
            color: "text.primary",
            textTransform: "uppercase",
            letterSpacing: "1px",
            fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" },
            lineHeight: 1.2,
            fontWeight: "bold",
          }}
        >
          PRODUCTION FACILITIES
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: { xs: 1.5, sm: 2, md: 3 },
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
            color: "text.primary",
            lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 },
          }}
        >
          Our manufacturing facility is strategically located at Plot No. 8/13,
          Opp. SunPharma Panoli GIDC, Dist. Bharuch, Gujarat – 394116, India.
          This prime location enables us to streamline logistics and efficiently
          serve clients across India.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: { xs: 1, sm: 1.5, md: 2 },
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
            color: "text.primary",
            lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 },
          }}
        >
          Equipped with modern plant and machinery, our facility is designed for
          the highest levels of efficiency and product quality. We proudly hold
          ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications.
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductionFacilities;
