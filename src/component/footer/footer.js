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
        "_blank",
      );
    } else if (platform === "facebook") {
      window.open(
        "https://www.facebook.com/share/15qorGsZta/?mibextid=wwXIfr",
        "_blank",
      );
    } else if (platform === "whatsapp") {
      const phoneNumber = "919106725328";
      window.open(`https://wa.me/${phoneNumber}`, "_blank");
    }
  };

  const socialButtons = [
    { Icon: FacebookIcon, platform: "facebook", hoverColor: "#1877F2" },
    { Icon: InstagramIcon, platform: "instagram", hoverColor: "#E4405F" },
    { Icon: WhatsAppIcon, platform: "whatsapp", hoverColor: "#25D366" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background:
          "linear-gradient(135deg, #0d3d0f 0%, #1b5e20 50%, #1a4a1e 100%)",
        color: "#ffffff",
        padding: { xs: "40px 16px 24px", sm: "60px 24px 32px" },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #2E7D32, #F9A825, #E65100)",
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 3, md: 5 }}
          sx={{ mb: { xs: 3, md: 5 } }}
        >
          {/* Brand Column */}
          <Grid item xs={12} sm={6} md={5}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                lineHeight: 1.2,
                fontSize: { xs: "1.5rem", md: "1.75rem" },
                mb: 1.5,
                letterSpacing: "-0.02em",
              }}
            >
              Nivaan Chemical
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255,255,255,0.55)",
                maxWidth: 340,
                lineHeight: 1.7,
                fontSize: "0.85rem",
              }}
            >
              Leading manufacturer of premium agrochemical solutions, dedicated
              to empowering Indian farmers since 2009.
            </Typography>
          </Grid>

          {/* Contact Column */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="subtitle2"
              sx={{
                color: "rgba(255,255,255,0.5)",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: "0.7rem",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Get in Touch
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                <LocationOnIcon
                  sx={{
                    fontSize: 18,
                    color: "#F9A825",
                    mt: 0.3,
                    flexShrink: 0,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.82rem",
                    lineHeight: 1.6,
                  }}
                >
                  Plot No. 8/13, Opp. SunPharma Panoli GIDC, Dist. Bharuch,
                  Gujarat — 394116
                </Typography>
              </Box>
              <CopyableContactItem
                icon={<EmailIcon sx={{ fontSize: 18 }} />}
                text="nivaanchemical@gmail.com"
                type="email"
                iconColor="#F9A825"
                textVariant="body2"
                textColor="rgba(255,255,255,0.7)"
              />
              <CopyableContactItem
                icon={<Phone sx={{ fontSize: 18 }} />}
                text="+91 91067 25328"
                type="phone"
                iconColor="#F9A825"
                textVariant="body2"
                textColor="rgba(255,255,255,0.7)"
              />
            </Box>
          </Grid>

          {/* Quick Links Column */}
          <Grid item xs={12} sm={12} md={3}>
            <Typography
              variant="subtitle2"
              sx={{
                color: "rgba(255,255,255,0.5)",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: "0.7rem",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {socialButtons.map(({ Icon, platform, hoverColor }, i) => (
                <IconButton
                  key={i}
                  onClick={() => handleSocialClick(platform)}
                  sx={{
                    color: "rgba(255,255,255,0.6)",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    borderRadius: "10px",
                    width: 40,
                    height: 40,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: `${hoverColor}20`,
                      color: hoverColor,
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            pt: 2.5,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "0.75rem",
            }}
          >
            © {new Date().getFullYear()} Nivaan Chemical. All Rights Reserved.
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "rgba(255,255,255,0.35)",
              fontSize: "0.72rem",
            }}
          >
            Designed by{" "}
            <Box
              component="span"
              sx={{
                fontWeight: 600,
                color: "#F9A825",
              }}
            >
              Akshay Dobariya
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
