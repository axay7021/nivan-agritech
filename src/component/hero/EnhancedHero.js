import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  IconButton,
  Chip,
  useTheme,
  useMediaQuery,
  Avatar,
  Tooltip,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  Agriculture,
  Nature,
  Science,
  KeyboardArrowDown,
  Phone,
  LocationOn,
  EmojiEvents,
  CheckCircle,
  FlashOn,
  Download,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import FloatingParticles from "./FloatingParticles";
import "./ModernHero.css";

// Import the catalog PDF
import catalogPDF from "../../assets/fiels/Catalog/Niavan-Chemical - Brochure.pdf";

// Import your existing images
import heroImage from "../../assets/images/main-slider/slide_v5_1.jpg";
import farmImage from "../../assets/images/main-slider/slide_v5_2.jpg";
import cropImage from "../../assets/images/main-slider/slide_v5_3.jpg";

// High-quality online agricultural images for hero backgrounds
const onlineImages = [
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&q=80",
];

const stats = [
  {
    number: "25+",
    label: "Years Experience",
    icon: <EmojiEvents />,
    description: "Decades of agricultural expertise",
  },
  {
    number: "400+",
    label: "Products",
    icon: <Science />,
    description: "Comprehensive product range",
  },
  {
    number: "10K+",
    label: "Happy Farmers",
    icon: <Agriculture />,
    description: "Satisfied customers nationwide",
  },
  {
    number: "50+",
    label: "Districts Served",
    icon: <LocationOn />,
    description: "Wide geographical coverage",
  },
];

const features = [
  { icon: <CheckCircle />, text: "ISO Certified Quality" },
  { icon: <Nature />, text: "Eco-Friendly Solutions" },
  { icon: <FlashOn />, text: "Fast-Acting Formulas" },
  { icon: <EmojiEvents />, text: "Industry Awards" },
];

const EnhancedHero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const images = [...onlineImages, heroImage, farmImage, cropImage];
  const heroTexts = [
    {
      title: "Nourishing Growth, Protecting Harvests",
      subtitle: "Leading Agricultural Chemical Solutions",
      description:
        "Empowering farmers with innovative, sustainable agricultural chemicals that enhance crop yield and protect against pests, diseases, and weeds.",
      primaryAction: "Explore Products",
      secondaryAction: "Download Catalog",
    },
    {
      title: "Science-Driven Agricultural Excellence",
      subtitle: "Innovation in Every Drop",
      description:
        "From research to field application, we deliver cutting-edge solutions that transform agricultural practices and maximize farm productivity.",
      primaryAction: "View Solutions",
      secondaryAction: "Contact Expert",
    },
    {
      title: "Sustainable Farming Solutions",
      subtitle: "Growing Tomorrow's Harvest Today",
      description:
        "Committed to environmental stewardship while providing effective crop protection solutions that ensure food security for generations.",
      primaryAction: "Learn More",
      secondaryAction: "Get Quote",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToProducts = () => {
    const element = document.getElementById("section-products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCatalog = () => {
    const link = document.createElement("a");
    link.href = catalogPDF;
    link.download = "Nivan-Chemical-Brochure.pdf";
    link.click();
  };

  const copyContactNumber = () => {
    const contactNumber = "+91 91067 25328"; // Replace with actual contact number
    navigator.clipboard
      .writeText(contactNumber)
      .then(() => {
        setSnackbarOpen(true);
      })
      .catch((err) => {
        console.error("Failed to copy contact number: ", err);
      });
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleSecondaryAction = () => {
    if (currentHeroText.secondaryAction === "Download Catalog") {
      downloadCatalog();
    } else {
      // Handle other secondary actions (Contact Expert, Get Quote)
      copyContactNumber();
    }
  };

  const currentHeroText = heroTexts[currentImage % heroTexts.length];

  return (
    <Box
      className="hero-container hero-pattern"
      sx={{
        position: "relative",
        height: {
          xs: "auto",
          md: "100vh",
        },
        minHeight: { xs: "580px", sm: "650px", md: "100vh" },
        maxHeight: { md: "100vh" },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Animated Background Images — full opacity, cinematic */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${images[currentImage]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
      </AnimatePresence>

      {/* Dark dramatic overlay for text readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(
            to bottom,
            rgba(10, 30, 10, 0.65) 0%,
            rgba(15, 45, 15, 0.55) 30%,
            rgba(10, 35, 10, 0.6) 60%,
            rgba(5, 20, 5, 0.8) 100%
          )`,
          zIndex: 1,
        }}
      />

      {/* Floating Particles */}
      <FloatingParticles />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          py: { xs: 6, sm: 8, md: 0 },
          px: { xs: 2.5, sm: 3, md: 4 },
        }}
      >
        <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
          {/* Main Content */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <Box>
                {/* Trusted badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                      mb: { xs: 2, md: 3 },
                      px: 2,
                      py: 0.75,
                      borderRadius: "24px",
                      border: "1px solid rgba(249, 168, 37, 0.4)",
                      backgroundColor: "rgba(249, 168, 37, 0.1)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <CheckCircle sx={{ fontSize: 16, color: "#F9A825" }} />
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#F9A825",
                        fontWeight: 600,
                        fontSize: "0.75rem",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                      }}
                    >
                      ISO 9001:2015 Certified
                    </Typography>
                  </Box>
                </motion.div>

                {/* Main Title with Animation */}
                <Box
                  sx={{
                    mb: { xs: 1.5, md: 2 },
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImage}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 1 }}
                    >
                      <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                          fontWeight: 800,
                          color: "white",
                          textShadow: "0 4px 30px rgba(0,0,0,0.4)",
                          lineHeight: 1.1,
                          letterSpacing: "-0.02em",
                          fontSize: {
                            xs: "2rem",
                            sm: "2.75rem",
                            md: "3.25rem",
                            lg: "3.75rem",
                          },
                        }}
                      >
                        {currentHeroText.title}
                      </Typography>
                    </motion.div>
                  </AnimatePresence>
                </Box>

                {/* Subtitle */}
                <Box sx={{ mb: { xs: 1.5, md: 2 } }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`subtitle-${currentImage}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          color: "#F9A825",
                          fontWeight: 600,
                          textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                          fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                          letterSpacing: "0.5px",
                        }}
                      >
                        {currentHeroText.subtitle}
                      </Typography>
                    </motion.div>
                  </AnimatePresence>
                </Box>

                {/* Description */}
                <Box sx={{ mb: { xs: 2.5, md: 3.5 } }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255,255,255,0.85)",
                        fontSize: {
                          xs: "0.95rem",
                          sm: "1.05rem",
                          md: "1.15rem",
                        },
                        lineHeight: 1.7,
                        maxWidth: 560,
                      }}
                    >
                      {currentHeroText.description}
                    </Typography>
                  </motion.div>
                </Box>

                {/* CTA Buttons */}
                <Box
                  sx={{
                    display: "flex",
                    gap: { xs: 1.5, sm: 2 },
                    mb: { xs: 3, md: 4 },
                    flexWrap: "wrap",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => navigate("/products")}
                      sx={{
                        backgroundColor: "#F9A825",
                        color: "#1b5e20",
                        px: { xs: 4, sm: 5 },
                        py: { xs: 1.4, sm: 1.6 },
                        borderRadius: "12px",
                        fontWeight: 700,
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                        textTransform: "none",
                        letterSpacing: "0.3px",
                        boxShadow: "0 6px 20px rgba(249, 168, 37, 0.35)",
                        "&:hover": {
                          backgroundColor: "#fdd835",
                          transform: "translateY(-3px)",
                          boxShadow: "0 10px 30px rgba(249, 168, 37, 0.45)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {currentHeroText.primaryAction}
                    </Button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={
                        currentHeroText.secondaryAction ===
                        "Download Catalog" ? (
                          <Download />
                        ) : (
                          <Phone />
                        )
                      }
                      onClick={handleSecondaryAction}
                      sx={{
                        color: "white",
                        borderColor: "rgba(255,255,255,0.5)",
                        borderWidth: "2px",
                        px: { xs: 3, sm: 4 },
                        py: { xs: 1.3, sm: 1.5 },
                        borderRadius: "12px",
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                        textTransform: "none",
                        backdropFilter: "blur(8px)",
                        backgroundColor: "rgba(255,255,255,0.06)",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255,0.15)",
                          borderColor: "white",
                          borderWidth: "2px",
                          transform: "translateY(-3px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {currentHeroText.secondaryAction}
                    </Button>
                  </motion.div>
                </Box>

                {/* Feature Tags */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    flexWrap: "wrap",
                  }}
                >
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    >
                      <Chip
                        icon={feature.icon}
                        label={feature.text}
                        size="small"
                        sx={{
                          backgroundColor: "rgba(255,255,255,0.08)",
                          color: "rgba(255,255,255,0.85)",
                          fontWeight: 500,
                          fontSize: "0.72rem",
                          height: "30px",
                          backdropFilter: "blur(12px)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          display: {
                            xs: index > 1 ? "none" : "flex",
                            sm: "flex",
                          },
                          "& .MuiChip-icon": {
                            color: "#F9A825",
                            fontSize: "16px",
                          },
                          transition: "all 0.3s ease",
                        }}
                      />
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Side — Stats Cards */}
          <Grid item xs={12} md={5}>
            <Grid container spacing={{ xs: 1.5, md: 2 }}>
              {stats.map((stat, index) => (
                <Grid item xs={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
                  >
                    <Tooltip title={stat.description} arrow>
                      <Box
                        sx={{
                          textAlign: "center",
                          cursor: "pointer",
                          p: { xs: 2, md: 2.5 },
                          borderRadius: "16px",
                          backgroundColor: "rgba(255,255,255,0.08)",
                          backdropFilter: "blur(16px)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          "&:hover": {
                            transform: "translateY(-6px)",
                            backgroundColor: "rgba(255,255,255,0.14)",
                            border: "1px solid rgba(249, 168, 37, 0.3)",
                          },
                          transition: "all 0.35s ease",
                        }}
                      >
                        <Avatar
                          sx={{
                            backgroundColor: "rgba(249, 168, 37, 0.15)",
                            color: "#F9A825",
                            mb: 1,
                            mx: "auto",
                            width: { xs: 40, md: 48 },
                            height: { xs: 40, md: 48 },
                          }}
                        >
                          {stat.icon}
                        </Avatar>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 800,
                            color: "white",
                            textShadow: "0 2px 8px rgba(0,0,0,0.2)",
                            fontSize: {
                              xs: "1.5rem",
                              sm: "1.75rem",
                              md: "2.25rem",
                            },
                            lineHeight: 1.2,
                          }}
                        >
                          {stat.number}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "rgba(255,255,255,0.65)",
                            fontWeight: 500,
                            fontSize: { xs: "0.72rem", sm: "0.8rem" },
                            letterSpacing: "0.5px",
                            mt: 0.5,
                          }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                    </Tooltip>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* Image Indicators — bottom center dots */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 20, md: 35 },
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1.5,
          zIndex: 3,
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentImage(index)}
            sx={{
              width: currentImage === index ? 32 : 10,
              height: 10,
              borderRadius: "5px",
              backgroundColor:
                currentImage === index ? "#F9A825" : "rgba(255,255,255,0.4)",
              cursor: "pointer",
              transition: "all 0.4s ease",
              "&:hover": {
                backgroundColor:
                  currentImage === index ? "#F9A825" : "rgba(255,255,255,0.7)",
              },
            }}
          />
        ))}
      </Box>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        style={{
          position: "absolute",
          bottom: isMobile ? 15 : 30,
          right: isMobile ? 20 : 40,
          zIndex: 3,
        }}
      >
        <IconButton
          onClick={scrollToProducts}
          sx={{
            color: "white",
            backgroundColor: "rgba(255,255,255,0.08)",
            border: "2px solid rgba(255,255,255,0.2)",
            animation: "bounce 2s infinite",
            "@keyframes bounce": {
              "0%, 100%": { transform: "translateY(0)" },
              "50%": { transform: "translateY(-8px)" },
            },
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.15)",
            },
          }}
        >
          <KeyboardArrowDown />
        </IconButton>
      </motion.div>

      {/* Snackbar for contact number copy notification */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{
            width: "100%",
            backgroundColor: theme.palette.secondary.main,
            color: "white",
            "& .MuiAlert-icon": {
              color: "white",
            },
          }}
        >
          Contact number copied to clipboard!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default EnhancedHero;
