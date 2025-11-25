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
  Avatar,
  Tooltip,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  PlayArrow,
  Agriculture,
  Nature,
  Science,
  TrendingUp,
  KeyboardArrowDown,
  BugReport,
  Grass,
  LocalFlorist,
  Phone,
  Email,
  LocationOn,
  EmojiEvents,
  CheckCircle,
  FlashOn,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import FloatingParticles from "./FloatingParticles";
import "./ModernHero.css";

// Import your existing images
import heroImage from "../../assets/images/main-slider/slide_v5_1.jpg";
import farmImage from "../../assets/images/main-slider/slide_v5_2.jpg";
import cropImage from "../../assets/images/main-slider/slide_v5_3.jpg";

const productCategories = [
  {
    name: "Insecticides",
    key: "insecticides",
    icon: <BugReport />,
    count: "120+",
    color: "#ff6b35",
    description: "Effective pest control solutions",
  },
  {
    name: "Fungicides",
    key: "fungicides",
    icon: <Science />,
    count: "95+",
    color: "#4ecdc4",
    description: "Disease prevention & treatment",
  },
  {
    name: "Herbicides",
    key: "herbicides",
    icon: <Grass />,
    count: "110+",
    color: "#45b7d1",
    description: "Weed management solutions",
  },
  {
    name: "PGR & Stimulants",
    key: "pgr-stimulants",
    icon: <LocalFlorist />,
    count: "88+",
    color: "#96ceb4",
    description: "Growth enhancement products",
  },
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
  const [hoveredCard, setHoveredCard] = useState(null);
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
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById("section-products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentHeroText = heroTexts[currentImage];

  return (
    <Box
      className="hero-container hero-pattern"
      sx={{
        position: "relative",
        height: {
          xs: "calc(100vh - 180px)",
          sm: "calc(100vh - 160px)",
          md: "100vh",
        },
        maxHeight: { xs: "500px", sm: "600px", md: "100vh" },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 1, sm: 2, md: 4 },
        background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.secondary.main}25 100%)`,
      }}
    >
      {/* Animated Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.25, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 2.5 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${images[currentImage]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -2,
          }}
        />
      </AnimatePresence>

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Enhanced Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(45deg, ${theme.palette.primary.main}85 0%, ${theme.palette.primary.main}35 50%, transparent 100%)`,
          zIndex: -1,
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          alignItems: "center",
          py: { xs: 0.5, sm: 1, md: 2 },
          px: { xs: 1, sm: 1.5, md: 2 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 3 }}
          alignItems="center"
          sx={{
            height: "100%",
            maxHeight: { xs: "480px", sm: "580px", md: "calc(100vh - 200px)" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Main Content */}
          <Grid item xs={12} md={8} lg={7}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ maxWidth: "100%" }}
            >
              <Box
                sx={{
                  maxWidth: { xs: "100%", md: "600px", lg: "700px" },
                  textAlign: "left",
                }}
              >
                {/* Features Tags */}
                <Box
                  sx={{
                    display: "flex",
                    gap: { xs: 0.5, sm: 1 },
                    mb: { xs: 1, sm: 2, md: 3 },
                    flexWrap: "wrap",
                  }}
                >
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    >
                      <Chip
                        icon={feature.icon}
                        label={feature.text}
                        sx={{
                          backgroundColor: "rgba(255,255,255,0.9)",
                          color: theme.palette.primary.main,
                          fontWeight: 600,
                          fontSize: { xs: "0.65rem", sm: "0.75rem" },
                          height: { xs: "24px", sm: "32px" },
                          backdropFilter: "blur(10px)",
                          display: {
                            xs: index > 1 ? "none" : "flex",
                            sm: "flex",
                          },
                          "&:hover": {
                            backgroundColor: "white",
                            transform: "translateY(-2px)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      />
                    </motion.div>
                  ))}
                </Box>

                {/* Main Title with Animation */}
                <Box
                  sx={{
                    minHeight: { xs: "60px", sm: "80px", md: "120px" },
                    display: "flex",
                    alignItems: "center",
                    mb: { xs: 0.5, sm: 1, md: 1.5 },
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
                        variant={isMobile ? "h3" : "h1"}
                        component="h1"
                        sx={{
                          fontWeight: 800,
                          color: "white",
                          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                          lineHeight: 1.2,
                          fontSize: {
                            xs: "1.75rem",
                            sm: "2.5rem",
                            md: "3rem",
                            lg: "3.5rem",
                          },
                        }}
                      >
                        {currentHeroText.title}
                      </Typography>
                    </motion.div>
                  </AnimatePresence>
                </Box>

                <Box
                  sx={{
                    minHeight: { xs: "25px", sm: "35px", md: "45px" },
                    display: "flex",
                    alignItems: "center",
                    mb: { xs: 0.5, sm: 1, md: 2 },
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`subtitle-${currentImage}`}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      <Typography
                        variant={isMobile ? "h6" : "h5"}
                        sx={{
                          color: theme.palette.secondary.light,
                          fontWeight: 500,
                          textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                          fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                        }}
                      >
                        {currentHeroText.subtitle}
                      </Typography>
                    </motion.div>
                  </AnimatePresence>
                </Box>

                <Box
                  sx={{
                    minHeight: { xs: "45px", sm: "55px", md: "70px" },
                    display: "flex",
                    alignItems: "flex-start",
                    mb: { xs: 1, sm: 2, md: 3 },
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255,255,255,0.9)",
                        fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                        lineHeight: 1.6,
                        maxWidth: 600,
                      }}
                    >
                      {currentHeroText.description}
                    </Typography>
                  </motion.div>
                </Box>

                {/* Dynamic Action Buttons */}
                <Box
                  sx={{
                    display: "flex",
                    gap: { xs: 1, sm: 2 },
                    mb: { xs: 1, sm: 2, md: 3 },
                    flexWrap: "wrap",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <Button
                      variant="contained"
                      size={isMobile ? "medium" : "large"}
                      onClick={() => navigate("/products")}
                      className="cta-button"
                      sx={{
                        backgroundColor: theme.palette.secondary.main,
                        color: "white",
                        px: { xs: 2.5, sm: 4 },
                        py: { xs: 1, sm: 1.5 },
                        borderRadius: "30px",
                        fontWeight: 600,
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                        "&:hover": {
                          backgroundColor: theme.palette.secondary.dark,
                          transform: "translateY(-3px) scale(1.05)",
                          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {currentHeroText.primaryAction}
                    </Button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <Button
                      variant="outlined"
                      size={isMobile ? "medium" : "large"}
                      startIcon={<Phone />}
                      sx={{
                        color: "white",
                        borderColor: "white",
                        px: { xs: 2.5, sm: 4 },
                        py: { xs: 1, sm: 1.5 },
                        borderRadius: "30px",
                        fontWeight: 600,
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255,0.15)",
                          borderColor: "white",
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {currentHeroText.secondaryAction}
                    </Button>
                  </motion.div>
                </Box>

                {/* Enhanced Stats */}
                <Grid
                  container
                  spacing={{ xs: 1, sm: 2, md: 3 }}
                  sx={{ mb: { xs: 1, sm: 2, md: 4 } }}
                >
                  {stats.map((stat, index) => (
                    <Grid item xs={6} sm={3} key={index}>
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                      >
                        <Tooltip title={stat.description} arrow>
                          <Box
                            sx={{
                              textAlign: "center",
                              cursor: "pointer",
                              "&:hover": {
                                transform: "translateY(-5px)",
                              },
                              transition: "all 0.3s ease",
                            }}
                          >
                            <Avatar
                              sx={{
                                backgroundColor: theme.palette.secondary.main,
                                mb: 1,
                                mx: "auto",
                              }}
                            >
                              {stat.icon}
                            </Avatar>
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
                                fontSize: "0.85rem",
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
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        style={{
          position: "absolute",
          bottom: isMobile ? 10 : 30,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: "rgba(255,255,255,0.8)",
            display: { xs: "none", sm: "block" },
            mb: 1,
            fontWeight: 600,
          }}
        >
          Scroll to explore
        </Typography>
        <IconButton
          onClick={scrollToProducts}
          className="scroll-indicator"
          sx={{
            color: "white",
            backgroundColor: "rgba(255,255,255,0.1)",
            border: "2px solid rgba(255,255,255,0.3)",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.2)",
              transform: "translateY(-3px)",
            },
            transition: "all 0.3s ease",
          }}
        >
          <KeyboardArrowDown sx={{ fontSize: "2rem" }} />
        </IconButton>
      </motion.div>

      {/* Enhanced Image Indicators */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 60, sm: 100, md: 120 },
          right: { xs: 20, sm: 30, md: 40 },
          display: "flex",
          flexDirection: "column",
          gap: { xs: 1, sm: 1.5 },
          zIndex: 2,
        }}
      >
        {images.map((_, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          >
            <Box
              onClick={() => setCurrentImage(index)}
              sx={{
                width: { xs: 10, sm: 14 },
                height: { xs: 10, sm: 14 },
                borderRadius: "50%",
                backgroundColor:
                  currentImage === index ? "white" : "rgba(255,255,255,0.4)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                border: {
                  xs: "1px solid rgba(255,255,255,0.6)",
                  sm: "2px solid rgba(255,255,255,0.6)",
                },
                "&:hover": {
                  backgroundColor: "white",
                  transform: "scale(1.2)",
                },
              }}
            />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default EnhancedHero;
