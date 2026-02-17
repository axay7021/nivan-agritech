import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import serviceImage1 from "../../assets/images/service/service-1-img-9.jpg";
import serviceImage2 from "../../assets/images/service/service-1-img-8.jpg";
import serviceImage3 from "../../assets/images/service/service-1-img-7.jpg";
import serviceImage4 from "../../assets/images/service/service-1-img-10.jpg";
import serviceImage5 from "../../assets/images/service/service-1-img-11.jpg";
import serviceImage6 from "../../assets/images/service/service-1-img-12.jpg";

const services = [
  {
    title: "Insecticides",
    // icon: <AccessAlarmIcon fontSize="large" color="primary" />,
    description:
      "We manufacture a broad spectrum of insecticides designed to protect crops from a variety of harmful insects, ensuring healthier fields and better yields. Our solutions are formulated for efficacy, safety, and sustainability, helping farmers prevent losses due to pest infestations.",
    link: "/product-details/insecticides",
    serviceImage: serviceImage1,
    delay: 0.3,
  },
  {
    title: "Fungicides",
    // icon: <AgricultureIcon fontSize="large" color="primary" />,
    description:
      "Our fungicides help protect crops from diseases caused by pathogenic fungi, improving crop quality and yield. Fungicides are essential for preventing and controlling fungal infections that can devastate agricultural production.",
    link: "/product-details/fungicides",
    serviceImage: serviceImage2,
    delay: 0.6,
  },
  {
    title: "Herbicides",
    // icon: <SpaIcon fontSize="large" color="primary" />,
    description:
      "Herbicides in our lineup are formulated to control weeds efficiently, reducing the need for manual weeding, conserving water and nutrients, and promoting optimal crop growth. Proper weed management ensures that crops utilize resources to their fullest potential.",
    link: "/product-details/herbicides",
    serviceImage: serviceImage3,
    delay: 0.9,
  },
  {
    title: "Plant Growth Regulators (PGR) and Crop Stimulants",
    // icon: <SpaIcon fontSize="large" color="primary" />,
    description:
      "We also manufacture advanced plant growth regulators (PGRs) and stimulants, which enhance crop vigor, yield, and quality. These products also foster better nutrient uptake and overall plant health.",
    link: "/product-details/pgr-stimulants",
    serviceImage: serviceImage4,
    delay: 0.9,
  },
  {
    title: "Mix Micro Nutrients",
    // icon: <ScienceIcon fontSize="large" color="primary" />,
    description:
      "Our micronutrient formulations provide plants with essential trace elements required for optimal growth, development, and productivity. These products are scientifically designed to correct micronutrient deficiencies and enhance overall plant health.",
    link: "/product-details/mix-micro-nutrients",
    serviceImage: serviceImage5,
    delay: 1.2,
  },
  {
    title: "Water Soluble Fertilizers",
    // icon: <WaterDropIcon fontSize="large" color="primary" />,
    description:
      "Our water-soluble fertilizers provide rapid and efficient nutrient delivery to plants through irrigation systems and foliar applications. These premium formulations ensure maximum nutrient uptake and utilization for enhanced crop productivity.",
    link: "/product-details/water-soluble-fertilizers",
    serviceImage: serviceImage6,
    delay: 1.5,
  },
];

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      style={{ display: "flex", flexDirection: "column", width: "100%" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          overflow: "hidden",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          cursor: "pointer",
          borderRadius: "20px",
          border: "1px solid rgba(0,0,0,0.06)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: "0 24px 48px rgba(27, 94, 32, 0.15)",
            borderColor: "rgba(46, 125, 50, 0.2)",
            "& .service-image": {
              transform: "scale(1.08)",
            },
            "& .service-overlay": {
              opacity: 1,
            },
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate(service.link)}
      >
        {/* Image Section — Top */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 200, sm: 220, md: 240 },
            overflow: "hidden",
          }}
        >
          <img
            className="service-image"
            src={service.serviceImage}
            alt={service.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
          {/* Green gradient overlay on hover */}
          <Box
            className="service-overlay"
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(27, 94, 32, 0.7), transparent)",
              opacity: 0,
              transition: "opacity 0.4s ease",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              pb: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "white",
                fontWeight: 600,
                fontSize: "0.9rem",
              }}
            >
              View Products <ArrowForwardIcon sx={{ fontSize: 18 }} />
            </Box>
          </Box>
        </Box>

        {/* Content Section */}
        <CardContent
          sx={{
            p: { xs: 2.5, md: 3 },
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            component={Link}
            to={service.link}
            sx={{
              textDecoration: "none",
              color: "#1a2e1a",
              fontWeight: 700,
              fontSize: { xs: "1rem", md: "1.1rem" },
              mb: 1,
              lineHeight: 1.3,
              "&:hover": { color: "#2E7D32" },
              transition: "color 0.2s ease",
            }}
          >
            {service.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#5a6e5a",
              fontSize: "0.85rem",
              lineHeight: 1.65,
              flex: 1,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {service.description}
          </Typography>

          {/* Learn More link */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              mt: 2,
              pt: 1.5,
              borderTop: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#2E7D32",
                fontWeight: 600,
                fontSize: "0.85rem",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.stopPropagation();
                navigate(service.link);
              }}
            >
              Learn More
            </Typography>
            <ArrowForwardIcon
              sx={{
                fontSize: 16,
                color: "#2E7D32",
                transition: "transform 0.3s ease",
                transform: isHovered ? "translateX(4px)" : "translateX(0)",
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const AboutUs = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        pb: { xs: 8, sm: 12, md: 14 },
        background:
          "linear-gradient(180deg, #f0f7e6 0%, #e8f5e9 50%, #f1f8e9 100%)",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(46,125,50,0.15), transparent)",
        },
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
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
            What we do
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "#1a2e1a",
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
              lineHeight: 1.2,
            }}
          >
            Products We Offer
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 3,
              background: "linear-gradient(90deg, #2E7D32, #F9A825)",
              borderRadius: 2,
              mx: "auto",
              mt: 2,
              mb: 2,
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: "#5a6e5a",
              maxWidth: 680,
              mx: "auto",
              fontSize: { xs: "0.9rem", md: "1rem" },
              lineHeight: 1.7,
            }}
          >
            We manufacture a comprehensive range of agrochemical formulations
            designed to protect crops and enhance agricultural productivity
            across India.
          </Typography>
        </Box>
        <Grid container spacing={{ xs: 2, md: 3 }} alignItems="stretch">
          {services.map((service, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ display: "flex" }}
            >
              <ServiceCard service={service} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;

// <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: service.delay }}>
//                 <Card sx={{
//                     textAlign: "center",
//                     position: "relative", display: "flex", flexDirection: "column"
//                     }}>
//                       <Box sx={{
//                         boxShadow: 3,
//                         padding: "44px 30px 20px",
//                         background: "#ffffff",
//                         borderTopLeftRadius: "5px",
//                         borderTopRightRadius: "5px",
//                       }}>
//                         <Box>{service.icon}</Box>
//                         <CardContent>
//                           <Typography variant="h5" fontWeight="bold" component={Link} to={service.link} sx={{ textDecoration: "none", color: "inherit" }}>{service.title}</Typography>
//                           <Typography variant="body2" sx={{ mt: 1 }}>{service.description}</Typography>
//                         </CardContent>
//                       </Box>
//                       <Box sx={{ position: "relative", display: "block", width: "100%" }}>
//                         <img
//                           src={service.serviceImage}
//                           alt={service.title}
//                           style={{
//                             margin: "-3px",
//                             top: '1px',
//                             width: "100%",
//                             // width: { xs: "100%", sm: "100%", md: "100%" },
//                             // height: "",
//                             opacity: 1,
//                             transform: "scale(1)",
//                             transition: "transform 0.5s, opacity 0.5s",
//                             objectFit: "cover"
//                           }}
//                         />
//                       </Box>
//                       {/* Animated Arrow Icon (Shows on Hover) */}
//                       <motion.div
//                         initial={{ x: -50, opacity: 0 }} // Initially hidden
//                         whileHover={{ x: 0, opacity: 1 }} // Slide in on hover
//                         transition={{ duration: 0.4, ease: "easeOut" }}
//                         style={{
//                           position: "absolute",
//                           top: "50%",
//                           left: "50%",
//                           transform: "translate(-50%, -50%)", // Perfectly centered
//                           background: "rgba(255, 255, 255, 0.9)",
//                           borderRadius: "50%",
//                           padding: "10px",
//                           boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"
//                         }}
//                       >
//                         <IconButton component={Link} to={service.link} sx={{ color: "primary.main" }}>
//                           <ArrowForwardIcon />
//                         </IconButton>
//                       </motion.div>

//                 </Card>
//               </motion.div>
