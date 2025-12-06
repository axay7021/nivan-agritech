import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.dark",
        color: "#ffffff",
        padding: { xs: "20px 10px", sm: "40px 10px" }, // Adjust padding for 10px space around
        // width: "100%", // Make sure it spans full width
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2 } }}>
        {" "}
        {/* Reduced padding inside Container */}
        <Grid
          container
          spacing={4}
          sx={{ mb: 5, justifyContent: "space-between" }}
        >
          <Grid item xs={12} sm={6} md={5} lg={4}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: "bold", lineHeight: 1.2, width: "max-content" }}
            >
              Nivaan Chemical
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <LocationOnIcon
                  sx={{ marginRight: 1, color: "rgba(255,255,255,0.8)" }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.8)" }}
                >
                  Nivaan Chemical, Plot No. 8/13, Opp. SunPharma Panoli GIDC,
                  Dist. Bharuch. Gujarat - 394116 (INDIA)
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <EmailIcon
                  sx={{ marginRight: 1, color: "rgba(255,255,255,0.8)" }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.8)" }}
                >
                  nivaanchemical@gmail.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Stack links on smaller screens
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            pt: 2,
          }}
        >
          {/* <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
            }}
          >
            <Link href="#" color="inherit" underline="hover">
              About
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Features
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Works
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Support
            </Link>
          </Box> */}
          <Typography
            variant="body2"
            sx={{ color: "rgba(255,255,255,0.7)", mt: { xs: 2, sm: 0 } }}
          >
            © Copyright 2024, All Rights Reserved
            <br></br>
            Designed by{" "}
            <span style={{ fontWeight: "800", color: "#4AC6D0" }}>
              {" "}
              Akshay Dobariya
            </span>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
