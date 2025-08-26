import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import FireExtinguisherTwoToneIcon from "@mui/icons-material/FireExtinguisherTwoTone";
import PestControlTwoToneIcon from "@mui/icons-material/PestControlTwoTone";
import MacroOffTwoToneIcon from "@mui/icons-material/MacroOffTwoTone";

const categories = [
  {
    name: "Corazon",
    icon: <FireExtinguisherTwoToneIcon fontSize="large" />,
    products: 983,
  },
  {
    name: "Basali",
    icon: <PestControlTwoToneIcon fontSize="large" />,
    products: 142,
  },
  {
    name: "Monocoto",
    icon: <MacroOffTwoToneIcon fontSize="large" />,
    products: 476,
  },
  {
    name: "Saff",
    icon: <PestControlTwoToneIcon fontSize="large" />,
    products: 849,
  },
  {
    name: "Tufan",
    icon: <FireExtinguisherTwoToneIcon fontSize="large" />,
    products: 253,
  },
  {
    name: "Movento",
    icon: <MacroOffTwoToneIcon fontSize="large" />,
    products: 94,
  },
];

const CategorySelection = () => {
  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6 },
        px: { xs: 2, sm: 3, md: 5 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // width: "100%",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: "center",
          mb: { xs: 3, sm: 4 },
          fontWeight: "bold",
          maxWidth: 800, // Limit text width on larger screens
          px: { xs: 1, md: 0 }, // Add padding for small screens
        }}
      >
        Select a category to get started
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        sx={{
          width: "100%", // Ensure full width
          maxWidth: "auto", // Limit max width to 1200px
          mx: "auto",
          justifyContent: "center",
          px: { lg: 4 }, // Extra padding for large screens
        }}
      >
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                p: { xs: 3, md: 4 },
                backgroundColor: (theme) => theme.palette.grey[100],
                borderRadius: 2,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
                textAlign: "center",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
                  backgroundColor: (theme) => theme.palette.secondary.light,
                },
              }}
            >
              <Box sx={{ mb: 1, color: "primary.main" }}>{category.icon}</Box>
              <Typography
                variant="h6"
                component="h3"
                sx={{ mb: 0.5, fontWeight: 600 }}
              >
                {category.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {category.products} Available Products
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategorySelection;
