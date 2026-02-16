import { Box, Typography, Chip } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import companyImage from "../../assets/images/infastructure-home.jpg";
import VerifiedIcon from "@mui/icons-material/Verified";

const certifications = ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018"];

const ProductionFacilities = () => {
  return (
    <Box
      className="production-facilities"
      sx={{
        display: "flex",
        justifyContent: { xs: "center", md: "flex-start" },
        alignItems: "center",
        padding: { xs: "2rem 1rem", sm: "3rem 1.5rem", md: "4rem 3rem" },
        backgroundImage: `url(${companyImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        minHeight: { xs: "70vh", sm: "75vh", md: "85vh" },
        height: "auto",
        overflow: "hidden",
        backgroundAttachment: { xs: "scroll", md: "fixed" },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.35) 100%)",
          zIndex: 0,
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Box
          className="text-section"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(16px)",
            padding: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            borderRadius: "20px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            zIndex: 1,
            position: "relative",
            maxWidth: { xs: "95%", sm: "85%", md: 520 },
            width: { xs: "95%", sm: "85%", md: "100%" },
            textAlign: "left",
            marginLeft: { xs: "auto", md: "2rem" },
            marginRight: { xs: "auto", md: 0 },
            border: "1px solid rgba(255,255,255,0.5)",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: "linear-gradient(90deg, #1b5e20, #2E7D32, #F9A825)",
              borderRadius: "20px 20px 0 0",
            },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "#2E7D32",
              fontWeight: 600,
              letterSpacing: "3px",
              fontSize: "0.75rem",
              display: "block",
              mb: 1,
            }}
          >
            Our Infrastructure
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              mb: 2,
              color: "#1a2e1a",
              letterSpacing: "-0.02em",
              fontSize: { xs: "1.4rem", sm: "1.7rem", md: "2rem" },
              lineHeight: 1.2,
              fontWeight: 700,
            }}
          >
            Production Facilities
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              fontSize: { xs: "0.88rem", sm: "0.92rem", md: "0.98rem" },
              color: "#4a5e4a",
              lineHeight: 1.7,
            }}
          >
            Our manufacturing facility is strategically located at Plot No.
            8/13, Opp. SunPharma Panoli GIDC, Dist. Bharuch, Gujarat – 394116,
            India. This prime location enables us to streamline logistics and
            efficiently serve clients across India.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 2.5,
              fontSize: { xs: "0.88rem", sm: "0.92rem", md: "0.98rem" },
              color: "#4a5e4a",
              lineHeight: 1.7,
            }}
          >
            Equipped with modern plant and machinery, our facility is designed
            for the highest levels of efficiency and product quality.
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {certifications.map((cert, i) => (
              <Chip
                key={i}
                icon={<VerifiedIcon sx={{ fontSize: 16 }} />}
                label={cert}
                size="small"
                sx={{
                  backgroundColor: "rgba(46, 125, 50, 0.08)",
                  color: "#1b5e20",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  borderRadius: "8px",
                  "& .MuiChip-icon": {
                    color: "#2E7D32",
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default ProductionFacilities;
