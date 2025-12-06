import React from "react";
import { Box, Container, Typography, Grid, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { Phone } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CopyableContactItem from "../CopyableContactItem";

const Footer = () => {
  const handleSocialClick = (platform) => {
    if (platform === "instagram") {
      window.open(
        "https://www.instagram.com/nivaanchemical?igsh=MXQ2Y2cyNzBkdjVuNA==",
        "_blank"
      );
    } else if (platform === "facebook") {
      window.open(
        "https://www.facebook.com/share/15qorGsZta/?mibextid=wwXIfr",
        "_blank"
      );
    } else if (platform === "whatsapp") {
      const phoneNumber = "919106725328";
      window.open(`https://wa.me/${phoneNumber}`, "_blank");
    }
  };

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
              <Box sx={{ mb: 1 }}>
                <CopyableContactItem
                  icon={<EmailIcon />}
                  text="nivaanchemical@gmail.com"
                  type="email"
                  iconColor="rgba(255,255,255,0.8)"
                  textVariant="body2"
                  textColor="rgba(255,255,255,0.8)"
                  sx={{ mb: 1 }}
                />
                <CopyableContactItem
                  icon={<Phone />}
                  text="+91 91067 25328"
                  type="phone"
                  iconColor="rgba(255,255,255,0.8)"
                  textVariant="body2"
                  textColor="rgba(255,255,255,0.8)"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            pt: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
              mb: { xs: 2, sm: 0 },
            }}
          >
            {[
              { Icon: FacebookIcon, platform: "facebook" },
              { Icon: InstagramIcon, platform: "instagram" },
              { Icon: WhatsAppIcon, platform: "whatsapp" },
            ].map(({ Icon, platform }, i) => (
              <IconButton
                key={i}
                onClick={() => handleSocialClick(platform)}
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                    transform: "scale(1.1)",
                  },
                  color: "rgba(255,255,255,0.8)",
                  transition: "all 0.3s ease",
                }}
              >
                <Icon />
              </IconButton>
            ))}
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.7)",
              textAlign: { xs: "center", sm: "right" },
            }}
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
