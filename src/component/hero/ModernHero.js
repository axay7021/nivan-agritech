import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  IconButton,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import "./ModernHero.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  PlayArrow,
  Science,
  TrendingUp,
  KeyboardArrowDown,
  PestControl,
  Grass,
  LocalFlorist,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// Import your existing images
import heroImage from "../../assets/images/main-slider/slide_v5_1.jpg";
import farmImage from "../../assets/images/main-slider/slide_v5_2.jpg";
import cropImage from "../../assets/images/main-slider/slide_v5_3.jpg";
import FloatingParticles from "./FloatingParticles";

const productCategories = [
  {
    name: "Insecticides",
    key: "insecticides",
    icon: <PestControl />,
    count: "120+",
    color: "#ff6b35",
  },
  {
    name: "Fungicides",
    key: "fungicides",
    icon: <Science />,
    count: "95+",
    color: "#4ecdc4",
  },
  {
    name: "Herbicides",
    key: "herbicides",
    icon: <Grass />,
    count: "110+",
    color: "#45b7d1",
  },
  {
    name: "PGR & Stimulants",
    key: "pgr-stimulants",
    icon: <LocalFlorist />,
    count: "88+",
    color: "#96ceb4",
  },
];

const stats = [
  { number: "25+", label: "Years Experience" },
  { number: "400+", label: "Products" },
  { number: "10K+", label: "Happy Farmers" },
  { number: "50+", label: "Districts Served" },
];

const ModernHero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const images = [heroImage, farmImage, cropImage];
  const heroTexts = [
    {
      title: "Nourishing Growth, Protecting Harvests",
      subtitle: "Leading Agricultural Chemical Solutions",
      description:
        "Empowering farmers with innovative, sustainable agricultural chemicals that enhance crop yield and protect against pests, diseases, and weeds.",
    },
    {
      title: "Science-Driven Agricultural Excellence",
      subtitle: "Innovation in Every Drop",
      description:
        "From research to field application, we deliver cutting-edge solutions that transform agricultural practices and maximize farm productivity.",
    },
    {
      title: "Sustainable Farming Solutions",
      subtitle: "Growing Tomorrow's Harvest Today",
      description:
        "Committed to environmental stewardship while providing effective crop protection solutions that ensure food security for generations.",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToProducts = () => {
    const element = document.getElementById("section-products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.secondary.main}25 100%)`,
      }}
    >
      {/* Animated Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.3, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
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
            zIndex: -1,
          }}
        />
      </AnimatePresence>

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(45deg, ${theme.palette.primary.main}90 0%, ${theme.palette.primary.main}40 50%, transparent 100%)`,
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} lg={7}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Chip
                label="🌱 Agri-Tech Innovation Leader"
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  color: "white",
                  fontWeight: 600,
                  mb: 3,
                  fontSize: "0.9rem",
                }}
              />

              <Typography
                variant={isMobile ? "h3" : "h1"}
                component="h1"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                  lineHeight: 1.2,
                }}
              >
                {heroTexts[currentImage].title}
              </Typography>

              <Typography
                variant={isMobile ? "h6" : "h5"}
                sx={{
                  color: theme.palette.secondary.light,
                  mb: 3,
                  fontWeight: 500,
                  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                }}
              >
                {heroTexts[currentImage].subtitle}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255,255,255,0.9)",
                  mb: 4,
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
                  maxWidth: 600,
                }}
              >
                {heroTexts[currentImage].description}
              </Typography>

              {/* Action Buttons */}
              <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate("/products")}
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    color: "white",
                    px: 4,
                    py: 1.5,
                    borderRadius: "30px",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: theme.palette.secondary.dark,
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Explore Products
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<PlayArrow />}
                  sx={{
                    color: "white",
                    borderColor: "white",
                    px: 4,
                    py: 1.5,
                    borderRadius: "30px",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                      borderColor: "white",
                    },
                  }}
                >
                  Watch Demo
                </Button>
              </Box>

              {/* Stats */}
              <Grid container spacing={3} sx={{ mb: 4 }}>
                {stats.map((stat, index) => (
                  <Grid item xs={6} sm={3} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 800,
                          color: theme.palette.secondary.main,
                          textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: 500,
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>

          {/* Right Content - Product Categories */}
          <Grid item xs={12} lg={5}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "white",
                    fontWeight: 700,
                    mb: 2,
                    textAlign: isMobile ? "center" : "left",
                  }}
                >
                  Our Product Categories
                </Typography>

                {productCategories.map((category, index) => (
                  <motion.div
                    key={category.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <Card
                      sx={{
                        backgroundColor: "rgba(255,255,255,0.95)",
                        backdropFilter: "blur(10px)",
                        borderRadius: "15px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-5px) scale(1.02)",
                          boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                          backgroundColor: "rgba(255,255,255,1)",
                        },
                      }}
                      onClick={() => navigate(`/products/${category.key}`)}
                    >
                      <CardContent sx={{ p: 2.5 }}>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
                          <Box
                            sx={{
                              backgroundColor: category.color,
                              borderRadius: "12px",
                              p: 1.5,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {React.cloneElement(category.icon, {
                              sx: { color: "white", fontSize: "1.5rem" },
                            })}
                          </Box>
                          <Box sx={{ flex: 1 }}>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 700,
                                color: theme.palette.primary.main,
                              }}
                            >
                              {category.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {category.count} Products Available
                            </Typography>
                          </Box>
                          <TrendingUp sx={{ color: category.color }} />
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      >
        <IconButton
          onClick={scrollToProducts}
          sx={{
            color: "white",
            backgroundColor: "rgba(255,255,255,0.1)",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
          }}
        >
          <KeyboardArrowDown sx={{ fontSize: "2rem" }} />
        </IconButton>
      </motion.div>

      {/* Image Indicators */}
      <Box
        sx={{
          position: "absolute",
          bottom: 100,
          right: 30,
          display: "flex",
          flexDirection: "column",
          gap: 1,
          zIndex: 2,
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentImage(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor:
                currentImage === index ? "white" : "rgba(255,255,255,0.4)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": { backgroundColor: "white" },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ModernHero;
