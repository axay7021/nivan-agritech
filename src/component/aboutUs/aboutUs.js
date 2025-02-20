import React from "react";
import { Box, Container, Typography, Grid, Avatar } from "@mui/material";

const teamMembers = [
  {
    name: "Agrowala",
    role: "Supplier",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo9IE_DgPNWxCtNFqeRCjaMP2S6BHWZ8hsqA&s",
  },
  {
    name: "Nishan Agro",
    role: "Dealer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMqXz_88PPMuXjKllsquzGKJIJMqTsWBLtGz6hVAhFL3ZxljS7_AXbhROOb7QmK7xEk-Y&usqp=CAU",
  },
  {
    name: "Shaki Agro",
    role: "Supplier",
    image:
      "https://content.jdmagicbox.com/comp/hosur/t5/9999p4344.4344.220610003229.c1t5/catalogue/shakti-agro-industries-thally-hosur-agriculture-companies-zdjimtnwvg.jpg?clr=",
  },
  {
    name: "Agroson Agro",
    role: "Clients",
    image:
      "https://content.jdmagicbox.com/comp/satara/p1/9999p2162.2162.220312233027.l4p1/catalogue/agroson-aadhar-satara-agricultural-consultants-2918jpljax.jpg",
  },
];

const AboutUs = () => {
  return (
    <Box id="abdc" sx={{ bgcolor: "#f7fafc", py: { xs: 2, md: 4, lg: 6 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          fontWeight={"500"}
          sx={{ mb: { xs: 2, md: 4 }, fontSize: { xs: "2rem", md: "3rem" } }}
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{
            mb: { xs: 2, md: 4 },
            fontSize: { xs: "1rem", md: "1.25rem" },
            px: { xs: 2, sm: 4, md: 6 },
          }}
        >
          We are a dedicated team of professionals committed to delivering
          high-quality products and services. Our mission is to empower
          businesses with innovative solutions that drive success and growth.
        </Typography>

        <Typography
          variant="h4"
          align="center"
          fontWeight={"450"}
          sx={{ mb: { xs: 2, md: 4 }, fontSize: { xs: "1.5rem", md: "2rem" } }}
        >
          Our Clients
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, sm: 4, md: 6, lg: 8 }}
          justifyContent="center"
        >
          {teamMembers.map((member) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={member.name}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Avatar
                alt={member.name}
                src={member.image}
                sx={{
                  width: { xs: 150, sm: 180, md: 200, lg: 220, xl: 250 },
                  height: { xs: 80, sm: 90, md: 100, lg: 110, xl: 125 },
                  mb: { xs: 2, md: 4 }, // More space below Avatar for md and above
                  borderRadius: "4%", // Rectangle shape for Avatar
                  border: "2px solid white",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    transform: "translateY(-8px)",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
                  },
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.25rem",
                    lg: "1.4rem",
                  },
                  mt: { xs: 1, md: 2 }, // Margin-top for name
                }}
              >
                {member.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" },
                  mt: { xs: 0.5, md: 1 }, // Margin-top for role
                }}
              >
                {member.role}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
