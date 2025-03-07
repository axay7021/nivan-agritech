// import React from "react";
// import { Box, Container, Typography, Grid, Avatar } from "@mui/material";

// const teamMembers = [
//   {
//     name: "Agrowala",
//     role: "Supplier",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo9IE_DgPNWxCtNFqeRCjaMP2S6BHWZ8hsqA&s",
//   },
//   {
//     name: "Nishan Agro",
//     role: "Dealer",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMqXz_88PPMuXjKllsquzGKJIJMqTsWBLtGz6hVAhFL3ZxljS7_AXbhROOb7QmK7xEk-Y&usqp=CAU",
//   },
//   {
//     name: "Shaki Agro",
//     role: "Supplier",
//     image:
//       "https://content.jdmagicbox.com/comp/hosur/t5/9999p4344.4344.220610003229.c1t5/catalogue/shakti-agro-industries-thally-hosur-agriculture-companies-zdjimtnwvg.jpg?clr=",
//   },
//   {
//     name: "Agroson Agro",
//     role: "Clients",
//     image:
//       "https://content.jdmagicbox.com/comp/satara/p1/9999p2162.2162.220312233027.l4p1/catalogue/agroson-aadhar-satara-agricultural-consultants-2918jpljax.jpg",
//   },
// ];

// const AboutUs = () => {
//   return (
//     <Box id="abdc" sx={{ bgcolor: "#f7fafc", py: { xs: 2, md: 4, lg: 6 } }}>
//       <Container maxWidth="lg">
//         <Typography
//           variant="h2"
//           align="center"
//           fontWeight={"500"}
//           sx={{ mb: { xs: 2, md: 4 }, fontSize: { xs: "2rem", md: "3rem" } }}
//         >
//           About Us
//         </Typography>
//         <Typography
//           variant="body1"
//           align="center"
//           sx={{
//             mb: { xs: 2, md: 4 },
//             fontSize: { xs: "1rem", md: "1.25rem" },
//             px: { xs: 2, sm: 4, md: 6 },
//           }}
//         >
//           We are a dedicated team of professionals committed to delivering
//           high-quality products and services. Our mission is to empower
//           businesses with innovative solutions that drive success and growth.
//         </Typography>

//         <Typography
//           variant="h4"
//           align="center"
//           fontWeight={"450"}
//           sx={{ mb: { xs: 2, md: 4 }, fontSize: { xs: "1.5rem", md: "2rem" } }}
//         >
//           Our Clients
//         </Typography>
//         <Grid
//           container
//           spacing={{ xs: 2, sm: 4, md: 6, lg: 8 }}
//           justifyContent="center"
//         >
//           {teamMembers.map((member) => (
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={4}
//               lg={3}
//               key={member.name}
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 textAlign: "center",
//               }}
//             >
//               <Avatar
//                 alt={member.name}
//                 src={member.image}
//                 sx={{
//                   width: { xs: 150, sm: 180, md: 200, lg: 220, xl: 250 },
//                   height: { xs: 80, sm: 90, md: 100, lg: 110, xl: 125 },
//                   mb: { xs: 2, md: 4 }, // More space below Avatar for md and above
//                   borderRadius: "4%", // Rectangle shape for Avatar
//                   border: "2px solid white",
//                   transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                   "&:hover": {
//                     border: "1px solid rgba(0, 0, 0, 0.05)",
//                     transform: "translateY(-8px)",
//                     boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
//                   },
//                 }}
//               />
//               <Typography
//                 variant="h6"
//                 sx={{
//                   fontSize: {
//                     xs: "1rem",
//                     sm: "1.1rem",
//                     md: "1.25rem",
//                     lg: "1.4rem",
//                   },
//                   mt: { xs: 1, md: 2 }, // Margin-top for name
//                 }}
//               >
//                 {member.name}
//               </Typography>
//               <Typography
//                 variant="body2"
//                 color="text.secondary"
//                 sx={{
//                   fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" },
//                   mt: { xs: 0.5, md: 1 }, // Margin-top for role
//                 }}
//               >
//                 {member.role}
//               </Typography>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default AboutUs;

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import leaf from "../../assets/images/resources/leaf.png";
import serviceImage1 from "../../assets/images/service/service-1-img-5.jpg";
import serviceImage2 from "../../assets/images/service/service-1-img-6.jpg";
import serviceImage3 from "../../assets/images/service/service-1-img-7.jpg";

const services = [
  {
    title: "Fresh Vegetables",
    // icon: <AccessAlarmIcon fontSize="large" color="primary" />,
    description:
      "There are many variations of passages available, but the majority have suffered.",
    link: "/service-detail",
    serviceImage: serviceImage1,
    delay: 0.3,
  },
  {
    title: "Agriculture Products",
    // icon: <AgricultureIcon fontSize="large" color="primary" />,
    description:
      "There are many variations of passages available, but the majority have suffered.",
    link: "/service-detail",
    serviceImage: serviceImage2,
    delay: 0.6,
  },
  {
    title: "Organic Products",
    // icon: <SpaIcon fontSize="large" color="primary" />,
    description:
      "There are many variations of passages available, but the majority have suffered.",
    link: "/service-detail",
    serviceImage: serviceImage3,
    delay: 0.9,
  },
];

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: service.delay }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 }  }} // Slight scale effect on hover
    >
      <Card
        sx={{
          textAlign: "center",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          transition: "all 0.3s ease-in-out",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box
          sx={{
            boxShadow: 3,
            padding: "44px 30px 20px",
            background: "#ffffff",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        >
          <Box>{service.icon}</Box>
          <CardContent>
            <Typography
              variant="h5"
              fontWeight="bold"
              component={Link}
              to={service.link}
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              {service.title}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {service.description}
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ position: "relative", display: "block", width: "100%" }}>
          <img
            src={service.serviceImage}
            alt={service.title}
            style={{
              margin: "-3px",
              top: "1px",
              width: "100%",
              // width: { xs: "100%", sm: "100%", md: "100%" },
              // height: "",
              opacity: 1,
              transform: "scale(1)",
              transition: "transform 0.5s, opacity 0.5s",
              objectFit: "cover",
            }}
          />
        </Box>
        
        {/* Animated Arrow Icon (Only Appears on Hovered Card) */}
        {isHovered && (
          <motion.div
            initial={{ left: "0%", opacity: 0 }}  // Start at the leftmost edge of the card
            animate={{ left: "50%", opacity: 1 }} // Move to the center and appear
            exit={{ left: "0%", opacity: 0 }}  // Move back left on hover out
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
              position: "absolute",
              top: "45%", 
              // left: "50%",
              transform: "translate(-50%, -50%)",
              background: "rgba(255, 255, 255, 0.9)",
              borderRadius: "50%",
              padding: "10px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"
            }}
          >
            <IconButton component={Link} to={service.link} sx={{ color: "primary.main" }}>
              <ArrowForwardIcon />
            </IconButton>
          </motion.div>
        )}
      </Card>
    </motion.div>
  );
};

const AboutUs = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f5f0e9" }}>
      <Container>
        <Box textAlign="center" mb={5}>
          <Typography variant="h6" color="primary">
            What we do
          </Typography>
          <Typography variant="h3" fontWeight="bold">
            Services We Offer
          </Typography>
          <Box
            component="img"
            src={leaf}
            alt="Leaf"
            sx={{ mt: 2, width: 50 }}
          />
        </Box>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard service={service} />
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
