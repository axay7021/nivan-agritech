import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FireExtinguisherTwoToneIcon from "@mui/icons-material/FireExtinguisherTwoTone";
import PestControlTwoToneIcon from "@mui/icons-material/PestControlTwoTone";
import MacroOffTwoToneIcon from "@mui/icons-material/MacroOffTwoTone";
import ScienceTwoToneIcon from "@mui/icons-material/ScienceTwoTone";
import WaterDropTwoToneIcon from "@mui/icons-material/WaterDropTwoTone";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const categories = [
  {
    key: "insecticides",
    name: "Insecticides",
    icon: <PestControlTwoToneIcon sx={{ fontSize: 36 }} />,
    products: 120,
  },
  {
    key: "fungicides",
    name: "Fungicides",
    icon: <MacroOffTwoToneIcon sx={{ fontSize: 36 }} />,
    products: 95,
  },
  {
    key: "herbicides",
    name: "Herbicides",
    icon: <FireExtinguisherTwoToneIcon sx={{ fontSize: 36 }} />,
    products: 110,
  },
  {
    key: "pgr-stimulants",
    name: "PGR & Crop Stimulants",
    icon: <MacroOffTwoToneIcon sx={{ fontSize: 36 }} />,
    products: 88,
  },
  {
    key: "mix-micro-nutrients",
    name: "Mix Micro Nutrients",
    icon: <ScienceTwoToneIcon sx={{ fontSize: 36 }} />,
    products: 6,
  },
  {
    key: "water-soluble-fertilizers",
    name: "Water Soluble Fertilizers",
    icon: <WaterDropTwoToneIcon sx={{ fontSize: 36 }} />,
    products: 8,
  },
];

const CategorySelection = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 3, md: 5 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#FAFDF7",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(46,125,50,0.12), transparent)",
        },
      }}
    >
      <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 }, maxWidth: 600 }}>
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
          Browse Products
        </Typography>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 700,
            color: "#1a2e1a",
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem" },
            lineHeight: 1.2,
            mb: 1.5,
          }}
        >
          Select a category to explore
        </Typography>
        <Box
          sx={{
            width: 60,
            height: 3,
            background: "linear-gradient(90deg, #2E7D32, #F9A825)",
            borderRadius: 2,
            mx: "auto",
          }}
        />
      </Box>

      <Grid
        container
        spacing={{ xs: 2, sm: 2.5, md: 3 }}
        sx={{
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
          justifyContent: "center",
        }}
      >
        {categories.map((category, index) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={4}
            lg={2}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              style={{ height: "100%" }}
            >
              <Paper
                elevation={0}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  p: { xs: 2.5, md: 3 },
                  backgroundColor: "white",
                  borderRadius: "16px",
                  border: "1px solid rgba(46, 125, 50, 0.08)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  textAlign: "center",
                  minHeight: { xs: 160, md: 180 },
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 16px 40px rgba(27, 94, 32, 0.14)",
                    borderColor: "rgba(46, 125, 50, 0.2)",
                    "& .category-icon": {
                      transform: "scale(1.1)",
                      color: "#F9A825",
                    },
                    "& .category-arrow": {
                      opacity: 1,
                      transform: "translateX(0)",
                    },
                  },
                }}
                onClick={() => navigate(`/products/${category.key}`)}
              >
                <Box
                  className="category-icon"
                  sx={{
                    mb: 1.5,
                    color: "#2E7D32",
                    transition: "all 0.3s ease",
                    p: 1.5,
                    borderRadius: "12px",
                    backgroundColor: "rgba(46, 125, 50, 0.06)",
                  }}
                >
                  {category.icon}
                </Box>
                <Typography
                  variant="subtitle1"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "0.8rem", md: "0.88rem" },
                    color: "#1a2e1a",
                    lineHeight: 1.3,
                    mb: 0.5,
                    minHeight: { xs: 36, md: 40 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {category.name}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    mt: "auto",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#4a5e4a",
                      fontSize: "0.72rem",
                    }}
                  >
                    {category.products} Products
                  </Typography>
                  <ArrowForwardIcon
                    className="category-arrow"
                    sx={{
                      fontSize: 14,
                      color: "#2E7D32",
                      opacity: 0,
                      transform: "translateX(-8px)",
                      transition: "all 0.3s ease",
                    }}
                  />
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategorySelection;
