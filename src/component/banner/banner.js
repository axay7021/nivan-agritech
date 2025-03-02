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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";
import aboutImageOne from "../../assets/images/about/about-1-img-1.jpg";
import aboutImageTwo from "../../assets/images/about/about-1-img-2.jpg";
import cropsIcon from "../../assets/images/icon/crops_banner_icon.png";
import harvestIcon from "../../assets/images/icon/veggies_banner_icon.png";
import leafImage from "../../assets/images/resources/leaf.png";

// Create a custom theme with custom breakpoints
const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600, // Custom small screen size
            md: 1040,
            lg: 1280,
            xl: 1920,
        },
    },
});

const Banner = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ py: 20, width: "100%", backgroundColor: "#f9f9f9", position: "relative" }}>
                <Container>
                    <Grid container spacing={4} alignItems="center" sx={{ flexDirection: { xs: "column", sm: "column", md: "row" } }}>
                        {/* Left Image Section */}
                        <Grid item xs={12} md={7} sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: { xs: 4, md: 0 } }}>
                            <Box sx={{ position: "relative", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box sx={{
                                    position: 'absolute',
                                    left: { xs: '50%', md: '-215px' },
                                    top: { xs: '50%', md: '70px' },
                                    transform: { xs: 'translate(-50%, -50%)', md: 'none' },
                                    height: '430px',
                                    width: '430px',
                                    background: '#f5f0e9',
                                    borderRadius: '50%',
                                    zIndex: 0 ,
                                    display: { xs: 'none', md: 'block' }
                                    }} 
                                />
                                <Box component="img" src={aboutImageOne} alt="About" sx={{ width: "100%", borderRadius: 2, zIndex: 1 }} />
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: { xs: "39%", sm: "40%", md: "50%" },
                                        left: { xs: '35%', sm: '40%', md: '-10%' },
                                        transform: { xs: "translate(-50%, -50%)", md: "translateY(-57.5px)" },
                                        zIndex: 2,
                                    }}
                                >
                                    <Box sx={{
                                        background: '#1976D2',
                                        width: '115px',
                                        height: '115px',
                                        borderRadius: "50%",
                                        position: "absolute",
                                        textAlign: "center",
                                    }} >
                                        <span className="icon-focus"></span>
                                    </Box>
                                </Box>
                                <Box component="img" src={aboutImageTwo} alt="" sx={{ position: "absolute", bottom: -110, right: { xs: 47, md: -80 }, width: "70%", borderRadius: 2, zIndex: 2 }} />
                            </Box>
                        </Grid>
                        {/* Right Content Section */}
                        <Grid item xs={12} md={5} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", mt: { xs: 10, md: 0 } }}>
                            <Typography variant="h6" color="primary" gutterBottom>
                                About Agriculture
                            </Typography>
                            <Typography variant="h4" fontWeight="bold" gutterBottom>
                                We’re leader in agriculture market
                            </Typography>
                            <Box component="img" src={leafImage} alt="Leaf" sx={{ mb: 2 }} />
                            <Typography variant="body1" paragraph>
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which
                                don't look even slightly believable.
                            </Typography>
                            <Grid container spacing={2} sx={{ mt: 2, display: "flex", justifyContent: "center", flexDirection: { xs: "column", sm: "row", md: "row" } }}>
                                <Grid item xs={6}>
                                    <Box display="flex" alignItems="center" gap={2}>
                                        {/*<span className="icon-harvest" style={{ fontSize: 32, marginRight: 8 }}></span>*/}
                                        <img src={harvestIcon} alt="Harvest Icon" style={{ fontSize: 32, marginRight: 8, height: 60 }} />
                                        <Typography sx={{ fontWeight: 800, fontSize: {xs: 20, sm: 18, md: 16}}}>Growing Fruits and Vegetables</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box display="flex" alignItems="center" gap={2}>
                                        {/*<span className="icon-temperature" style={{ fontSize: 32, marginRight: 8 }}></span>*/}
                                        <img src={cropsIcon} alt="Harvest Icon" style={{ fontSize: 32, marginRight: 8, height: 60 }} />
                                        <Typography sx={{ fontWeight: 800, fontSize: {xs: 20, sm: 18, md: 16}}}>Tips for Ripening your Fruits</Typography>
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
        </ThemeProvider>
    );
};

export default Banner;