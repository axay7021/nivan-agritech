// import React from "react";
// import { Grid, Card, Typography, Box } from "@mui/material";
// import { styled } from "@mui/system";

// // Styled component for hover effect
// const HoverCard = styled(Card)(({ theme }) => ({
//   padding: theme.spacing(2),
//   textAlign: "center",
//   backgroundColor: "black",
//   color: "white",
//   transition: "background-color 0.3s ease",

//   "&:hover": {
//     backgroundColor: "#292a29",
//   },
// }));

// const Banner = () => {
//   return (
//     <Box
//       sx={{
//         backgroundColor: "white",
//         py: { xs: 2, md: 4 }, // Responsive vertical padding
//         px: { xs: 2, md: 10 }, // Responsive horizontal padding
//         color: "black",
//         height: { xs: "auto", sm: "auto", md: "100%" }, // Auto height for small screens
//       }}
//     >
//       <Grid container alignItems="center" height="100%">
//         <Grid xs={12} md={12}>
//           <Typography
//             variant="h4"
//             sx={{
//               fontWeight: "bold",
//               fontSize: { xs: 18, sm: 24, md: 35 }, // Further reduce font size for smaller screens
//               textAlign: "center", // Center the text horizontally
//               display: "flex", // Flexbox for vertical centering
//               justifyContent: "center", // Center vertically
//               alignItems: "center", // Align vertically if needed
//               height: "100%", // Ensure the height takes the full available space
//               lineHeight: { xs: 1.2, sm: 1.5, md: 1.5 }, // Adjust line height for readability
//               paddingBottom: "20px",
//             }}
//           >
//             WELCOME TO NIVAN AGRITECH LIMITED
//             <br />
//             Agro Chemicals Manufacturer
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Typography
//             variant="body1"
//             sx={{
//               lineHeight: 1.8,
//               fontSize: { xs: 16, sm: 18, md: 20 }, // Font size adjustment for different breakpoints
//               overflow: "hidden", // Prevent overflow
//               textOverflow: "ellipsis", // Add ellipsis for overflow text if necessary
//               whiteSpace: "normal", // Allow wrapping of text on smaller screens
//               paddingRight: { md: "20px" },
//             }}
//           >
//             Established in 2015, Nivan Agritech Limited is engaged in the
//             business of manufacturing, distributing, and marketing of a wide
//             range of agrochemical formulations such as insecticides, fungicides,
//             herbicides, plant growth regulators, micro fertilizers, and
//             antibiotics to B2C and B2B customers. We also engage in the
//             marketing and distribution of agrochemical products under brands
//             in-licensed by us, owned by us, and through generic brands, to
//             Indian farmers through our distribution network. We provide crop
//             protection solutions to assist farmers in maximizing productivity
//             and profitability.
//           </Typography>
//         </Grid>

//         {/* Right Icon Cards Section */}
//         <Grid item xs={12} md={6}>
//           <Grid container spacing={2}>
//             {[
//               "20+ YEARS OF EXPERTISE",
//               "ISO 9001 : 2015 CERTIFIED",
//               "100+ PRODUCT RANGE",
//               "IN-HOUSE R&D FACILITY",
//               "DISTRIBUTION NETWORK",
//               "MANUFACTURING",
//             ].map((text, index) => (
//               <Grid item xs={6} sm={4} key={index}>
//                 <HoverCard>
//                   <Typography
//                     variant="h6"
//                     sx={{ fontSize: { xs: 14, sm: 16 } }}
//                   >
//                     {text}
//                   </Typography>
//                 </HoverCard>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Banner;

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Left Image Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative", textAlign: "center" }}>
              <Box component="img" src="/images/about/about-1-img-1.jpg" alt="About" sx={{ width: "100%", borderRadius: 2 }} />
              <Box
                sx={{
                  position: "absolute",
                  top: "10%",
                  left: "10%",
                  background: "white",
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: 3,
                }}
              >
                <span className="icon-focus"></span>
              </Box>
              <Box component="img" src="/images/about/about-1-img-2.jpg" alt="" sx={{ position: "absolute", bottom: 0, right: 0, width: "40%", borderRadius: 2 }} />
            </Box>
          </Grid>
          {/* Right Content Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" color="primary" gutterBottom>
              About Agriculture
            </Typography>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              We’re leader in agriculture market
            </Typography>
            <Box component="img" src="/images/resources/leaf.png" alt="Leaf" sx={{ mb: 2 }} />
            <Typography variant="body1" paragraph>
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour, or randomised words which
              don't look even slightly believable.
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={6}>
                <Box display="flex" alignItems="center">
                  <span className="icon-harvest" style={{ fontSize: 32, marginRight: 8 }}></span>
                  <Typography>Growing Fruits and Vegetables</Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box display="flex" alignItems="center">
                  <span className="icon-temperature" style={{ fontSize: 32, marginRight: 8 }}></span>
                  <Typography>Tips for Ripening your Fruits</Typography>
                </Box>
              </Grid>
            </Grid>
            <Typography variant="body1" paragraph sx={{ mt: 2 }}>
              If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
              anything embarrassing hidden in the middle of text.
            </Typography>
            <Button component={Link} to="/about" variant="contained" color="primary" sx={{ mt: 3 }}>
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
