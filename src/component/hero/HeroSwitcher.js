import React, { useState } from "react";
import { Box, Fab, Menu, MenuItem, Typography } from "@mui/material";
import { Settings, SwapHoriz } from "@mui/icons-material";
import ImageSlider from "../slider/slider";
import ModernHero from "./ModernHero";
import EnhancedHero from "./EnhancedHero";

const HeroSwitcher = () => {
  const [currentHero, setCurrentHero] = useState("enhanced"); // "original", "modern", "enhanced"
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHeroChange = (heroType) => {
    setCurrentHero(heroType);
    handleClose();
  };

  const renderHero = () => {
    switch (currentHero) {
      case "original":
        return <ImageSlider />;
      case "modern":
        return <ModernHero />;
      case "enhanced":
      default:
        return <EnhancedHero />;
    }
  };

  return (
    <Box sx={{ position: "relative" }}>
      {renderHero()}

      {/* Hero Switcher FAB - Only visible in development */}
      {process.env.NODE_ENV === "development" && (
        <>
          <Fab
            color="primary"
            size="small"
            onClick={handleClick}
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              zIndex: 1000,
              opacity: 0.7,
              "&:hover": { opacity: 1 },
            }}
          >
            <SwapHoriz />
          </Fab>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleHeroChange("enhanced")}>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Enhanced Hero
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Full-featured with animations
                </Typography>
              </Box>
            </MenuItem>
            <MenuItem onClick={() => handleHeroChange("modern")}>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Modern Hero
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Clean and simple
                </Typography>
              </Box>
            </MenuItem>
            <MenuItem onClick={() => handleHeroChange("original")}>
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Original Slider
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Traditional image slider
                </Typography>
              </Box>
            </MenuItem>
          </Menu>
        </>
      )}
    </Box>
  );
};

export default HeroSwitcher;
