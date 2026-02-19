import React from "react";
import { Box, Container, Typography, Grid, Paper, Chip } from "@mui/material";
import { motion } from "framer-motion";
import {
  EmojiEvents,
  Visibility,
  Flag,
  Handshake,
  Science,
  Agriculture,
  VerifiedUser,
  Groups,
  TrendingUp,
  EnergySavingsLeaf,
} from "@mui/icons-material";

// ==================== Fade in animation variant ====================
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

// ==================== Data ====================
const values = [
  {
    icon: <VerifiedUser sx={{ fontSize: 32 }} />,
    title: "Quality Assurance",
    description:
      "Every product undergoes rigorous multi-stage testing per ISO 9001:2015 standards to guarantee exceptional quality and efficacy.",
  },
  {
    icon: <EnergySavingsLeaf sx={{ fontSize: 32 }} />,
    title: "Sustainability",
    description:
      "We are committed to eco-friendly formulations that protect crops while preserving the natural environment for future generations.",
  },
  {
    icon: <Science sx={{ fontSize: 32 }} />,
    title: "Innovation",
    description:
      "Our in-house R&D continuously develops advanced agrochemical solutions using cutting-edge technology and scientific research.",
  },
  {
    icon: <Handshake sx={{ fontSize: 32 }} />,
    title: "Farmer-First Approach",
    description:
      "We prioritize farmer welfare, providing affordable, effective solutions combined with education and field support.",
  },
  {
    icon: <Groups sx={{ fontSize: 32 }} />,
    title: "Ethical Business",
    description:
      "Transparency, integrity, and trust are the cornerstones of every relationship we build — with farmers, dealers, and partners.",
  },
  {
    icon: <TrendingUp sx={{ fontSize: 32 }} />,
    title: "Continuous Growth",
    description:
      "We constantly expand our product range and distribution network to serve more farmers across India and beyond.",
  },
];

const services = [
  "Insecticides",
  "Fungicides",
  "Herbicides",
  "Plant Growth Regulators",
  "Crop Stimulants",
  "Mix Micro Nutrients",
  "Water Soluble Fertilizers",
  "Technical Grade Active Ingredients",
];

const milestones = [
  { year: "2009", event: "Nivaan Chemical founded by Mr. Mihir Nasit" },
  {
    year: "2012",
    event: "Crossed 50+ product range; expanded Gujarat network",
  },
  { year: "2015", event: "Achieved ISO 9001:2015 certification" },
  { year: "2018", event: "Launched in-house R&D for new formulations" },
  { year: "2020", event: "Expanded to 10+ states across India" },
  { year: "2023", event: "400+ products; serving 10,000+ farmers nationwide" },
];

// ==================== Component ====================
const AboutUsPage = () => {
  return (
    <Box sx={{ backgroundColor: "#FAFDF7" }}>
      {/* Hero Banner */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        sx={{
          position: "relative",
          py: { xs: 10, md: 14 },
          textAlign: "center",
          color: "white",
          overflow: "hidden",
          background:
            'linear-gradient(135deg, rgba(27, 94, 32, 0.88) 0%, rgba(46, 125, 50, 0.82) 50%, rgba(27, 94, 32, 0.9) 100%), url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1920&q=80") center / cover no-repeat',
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #2E7D32, #F9A825, #E65100)",
          },
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "#F9A825",
                fontWeight: 600,
                letterSpacing: "4px",
                fontSize: "0.85rem",
                mb: 2,
                display: "block",
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2rem", sm: "2.75rem", md: "3.5rem" },
                lineHeight: 1.15,
                mb: 2,
                textShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              Empowering Indian Agriculture Since 2009
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.85)",
                fontWeight: 400,
                maxWidth: 700,
                mx: "auto",
                lineHeight: 1.7,
                fontSize: { xs: "0.95rem", md: "1.1rem" },
              }}
            >
              Nivaan Chemical is a premier manufacturer of innovative
              agrochemical solutions dedicated to increasing crop yield and
              protecting harvests across India.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Company Story */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          {/* Image Side */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(27, 94, 32, 0.15)",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "40%",
                    background:
                      "linear-gradient(to top, rgba(27, 94, 32, 0.4), transparent)",
                  },
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80"
                  alt="Agricultural fields"
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>

          {/* Text Side */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: "#2E7D32",
                  fontWeight: 600,
                  letterSpacing: "3px",
                  fontSize: "0.8rem",
                  mb: 1,
                  display: "block",
                }}
              >
                Our Story
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: "#1a2e1a",
                  fontSize: { xs: "1.75rem", md: "2.5rem" },
                  lineHeight: 1.2,
                  mb: 1,
                }}
              >
                Who We Are
              </Typography>
              <Box
                sx={{
                  width: 50,
                  height: 3,
                  background: "linear-gradient(90deg, #2E7D32, #F9A825)",
                  borderRadius: 2,
                  mb: 3,
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  color: "#4a5e4a",
                  lineHeight: 1.85,
                  fontSize: "1rem",
                  mb: 2.5,
                }}
              >
                Founded in 2009 by Mr. Mihir Nasit, Nivaan Chemical has grown
                from a regional agrochemical manufacturer into one of India's
                trusted names in crop protection. Headquartered near Panoli GIDC
                in Gujarat, we operate state-of-the-art manufacturing facilities
                that produce a comprehensive range of insecticides, fungicides,
                herbicides, plant growth regulators, and micronutrient
                formulations.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#4a5e4a",
                  lineHeight: 1.85,
                  fontSize: "1rem",
                }}
              >
                With a team of highly qualified experts, robust in-house R&D,
                and an unwavering commitment to quality, we serve over 10,000
                farmers across 50+ districts with 400+ products — always
                prioritizing efficacy, safety, and sustainability.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Mission & Vision */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          background:
            'linear-gradient(135deg, rgba(27, 94, 32, 0.92) 0%, rgba(46, 125, 50, 0.88) 100%), url("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&q=80") center / cover no-repeat',
          color: "white",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: "20px",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      mb: 2,
                    }}
                  >
                    <Flag sx={{ fontSize: 32, color: "#F9A825" }} />
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: "1.5rem", md: "1.75rem" },
                      }}
                    >
                      Our Mission
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.85)",
                      lineHeight: 1.8,
                      fontSize: "1rem",
                    }}
                  >
                    To empower Indian farmers with innovative, affordable, and
                    sustainable agrochemical solutions that maximize crop yield
                    and quality while preserving the natural environment. We
                    strive to bridge the gap between advanced agricultural
                    science and practical field application, ensuring food
                    security for generations to come.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: "20px",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      mb: 2,
                    }}
                  >
                    <Visibility sx={{ fontSize: 32, color: "#F9A825" }} />
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: "1.5rem", md: "1.75rem" },
                      }}
                    >
                      Our Vision
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.85)",
                      lineHeight: 1.8,
                      fontSize: "1rem",
                    }}
                  >
                    To become India's most trusted and respected agrochemical
                    company — recognized for cutting-edge innovation, unwavering
                    quality, and a deep commitment to farmer welfare. We
                    envision a future where every Indian farmer has access to
                    world-className crop protection technology.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Core Values */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "#2E7D32",
                fontWeight: 600,
                letterSpacing: "3px",
                fontSize: "0.8rem",
                display: "block",
                mb: 1,
              }}
            >
              What Drives Us
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: "#1a2e1a",
                fontSize: { xs: "1.75rem", md: "2.5rem" },
                lineHeight: 1.2,
              }}
            >
              Our Core Values
            </Typography>
            <Box
              sx={{
                width: 60,
                height: 3,
                background: "linear-gradient(90deg, #2E7D32, #F9A825)",
                borderRadius: 2,
                mx: "auto",
                mt: 2,
              }}
            />
          </motion.div>
        </Box>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={stagger}
          viewport={{ once: true }}
        >
          <Grid container spacing={3}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div variants={fadeIn}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3.5,
                      borderRadius: "20px",
                      border: "1px solid rgba(46, 125, 50, 0.08)",
                      backgroundColor: "white",
                      height: "100%",
                      transition: "all 0.35s ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 16px 40px rgba(27, 94, 32, 0.1)",
                        borderColor: "rgba(46, 125, 50, 0.15)",
                        "& .value-icon": {
                          backgroundColor: "#2E7D32",
                          color: "white",
                        },
                      },
                    }}
                  >
                    <Box
                      className="value-icon"
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: "14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(46, 125, 50, 0.08)",
                        color: "#2E7D32",
                        mb: 2,
                        transition: "all 0.35s ease",
                      }}
                    >
                      {value.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: "#1a2e1a",
                        mb: 1,
                        fontSize: "1.05rem",
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#5a6e5a",
                        lineHeight: 1.7,
                        fontSize: "0.87rem",
                      }}
                    >
                      {value.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Service Overview */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: "#f0f7e6",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: "#2E7D32",
                    fontWeight: 600,
                    letterSpacing: "3px",
                    fontSize: "0.8rem",
                    display: "block",
                    mb: 1,
                  }}
                >
                  What We Offer
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: "#1a2e1a",
                    fontSize: { xs: "1.75rem", md: "2.25rem" },
                    lineHeight: 1.2,
                    mb: 1,
                  }}
                >
                  Comprehensive Crop Protection
                </Typography>
                <Box
                  sx={{
                    width: 50,
                    height: 3,
                    background: "linear-gradient(90deg, #2E7D32, #F9A825)",
                    borderRadius: 2,
                    mb: 3,
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: "#4a5e4a",
                    lineHeight: 1.85,
                    fontSize: "1rem",
                    mb: 3,
                  }}
                >
                  We manufacture, distribute, and market a wide range of
                  agrochemical formulations to both B2C and B2B customers.
                  Through our growing distribution network and strategic
                  partnerships, we deliver reliable crop protection solutions to
                  farmers across India.
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {services.map((service, i) => (
                    <Chip
                      key={i}
                      label={service}
                      icon={<Agriculture sx={{ fontSize: 16 }} />}
                      sx={{
                        backgroundColor: "rgba(46, 125, 50, 0.08)",
                        color: "#1b5e20",
                        fontWeight: 500,
                        fontSize: "0.8rem",
                        "& .MuiChip-icon": { color: "#2E7D32" },
                        border: "1px solid rgba(46, 125, 50, 0.12)",
                      }}
                    />
                  ))}
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0 16px 48px rgba(27, 94, 32, 0.12)",
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80"
                    alt="Modern agriculture technology"
                    style={{
                      width: "100%",
                      height: "380px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Journey / Milestones */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "#2E7D32",
                fontWeight: 600,
                letterSpacing: "3px",
                fontSize: "0.8rem",
                display: "block",
                mb: 1,
              }}
            >
              Our Journey
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: "#1a2e1a",
                fontSize: { xs: "1.75rem", md: "2.5rem" },
                lineHeight: 1.2,
              }}
            >
              Key Milestones
            </Typography>
            <Box
              sx={{
                width: 60,
                height: 3,
                background: "linear-gradient(90deg, #2E7D32, #F9A825)",
                borderRadius: 2,
                mx: "auto",
                mt: 2,
              }}
            />
          </motion.div>
        </Box>

        <Box sx={{ position: "relative" }}>
          {/* Vertical timeline line */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: 20, md: "50%" },
              transform: { md: "translateX(-50%)" },
              top: 0,
              bottom: 0,
              width: "2px",
              background: "linear-gradient(to bottom, #2E7D32, #F9A825)",
              borderRadius: 1,
            }}
          />

          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "flex-start",
                    md: index % 2 === 0 ? "flex-start" : "flex-end",
                  },
                  mb: 4,
                  position: "relative",
                  pl: { xs: 6, md: 0 },
                }}
              >
                {/* Dot */}
                <Box
                  sx={{
                    position: "absolute",
                    left: { xs: 14, md: "50%" },
                    transform: { md: "translateX(-50%)" },
                    top: 8,
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    backgroundColor: "#2E7D32",
                    border: "3px solid #F9A825",
                    zIndex: 1,
                  }}
                />

                <Paper
                  elevation={0}
                  sx={{
                    p: 2.5,
                    borderRadius: "16px",
                    backgroundColor: "white",
                    border: "1px solid rgba(46, 125, 50, 0.1)",
                    width: { xs: "100%", md: "44%" },
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 8px 24px rgba(27, 94, 32, 0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#F9A825",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      mb: 0.5,
                    }}
                  >
                    {item.year}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#4a5e4a",
                      lineHeight: 1.6,
                      fontSize: "0.9rem",
                    }}
                  >
                    {item.event}
                  </Typography>
                </Paper>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>

      {/* Leadership */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: "linear-gradient(180deg, #f0f7e6 0%, #FAFDF7 100%)",
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <Box textAlign="center">
              <Typography
                variant="overline"
                sx={{
                  color: "#2E7D32",
                  fontWeight: 600,
                  letterSpacing: "3px",
                  fontSize: "0.8rem",
                  display: "block",
                  mb: 1,
                }}
              >
                Leadership
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: "#1a2e1a",
                  fontSize: { xs: "1.75rem", md: "2.5rem" },
                  lineHeight: 1.2,
                  mb: 1,
                }}
              >
                Led by Vision & Experience
              </Typography>
              <Box
                sx={{
                  width: 60,
                  height: 3,
                  background: "linear-gradient(90deg, #2E7D32, #F9A825)",
                  borderRadius: 2,
                  mx: "auto",
                  mt: 2,
                  mb: 4,
                }}
              />
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: "24px",
                  backgroundColor: "white",
                  border: "1px solid rgba(46, 125, 50, 0.08)",
                  boxShadow: "0 8px 32px rgba(27, 94, 32, 0.06)",
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    backgroundColor: "rgba(46, 125, 50, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  <EmojiEvents sx={{ fontSize: 40, color: "#F9A825" }} />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: "#1a2e1a",
                    mb: 1,
                  }}
                >
                  Mr. Mihir Nasit
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#2E7D32",
                    fontWeight: 600,
                    mb: 2,
                    fontSize: "0.95rem",
                  }}
                >
                  Founder & Managing Director
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#4a5e4a",
                    lineHeight: 1.85,
                    fontSize: "1rem",
                    maxWidth: 600,
                    mx: "auto",
                  }}
                >
                  With over two decades of hands-on experience in the
                  agrochemical industry, Mr. Mihir Nasit founded Nivaan Chemical
                  with a vision to make world-class crop protection accessible
                  to every Indian farmer. His deep understanding of field
                  challenges, combined with a passion for scientific innovation,
                  drives the company's mission to deliver trusted, effective,
                  and sustainable solutions.
                </Typography>
              </Paper>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUsPage;
