import React, { useState } from "react";
import {
  Box,
  IconButton,
  Badge,
  useMediaQuery,
  useTheme,
  Tooltip,
  Zoom,
} from "@mui/material";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import "./NewArrivalSticker.css";

const NewArrivalSticker = ({ onClick, hasNewArrivals = true }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [isVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Get responsive positioning and sizing
  const getStickerStyles = () => {
    if (isMobile) {
      return {
        bottom: 20,
        left: 16,
        width: 50,
        height: 50,
        fontSize: "1.2rem",
      };
    } else if (isTablet) {
      return {
        bottom: 30,
        left: 20,
        width: 60,
        height: 60,
        fontSize: "1.4rem",
      };
    } else {
      return {
        bottom: 40,
        left: 24,
        width: 70,
        height: 70,
        fontSize: "1.6rem",
      };
    }
  };

  const stickerStyles = getStickerStyles();

  return (
    <Zoom in={isVisible}>
      <Box
        className={`new-arrival-sticker ${isHovered ? "hovered" : ""}`}
        sx={{
          position: "fixed",
          ...stickerStyles,
          zIndex: 9999, // Increased z-index to ensure it's on top
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "auto", // Ensure pointer events work
          cursor: "pointer", // Add cursor pointer to show it's clickable
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          console.log("Box container clicked");
          if (onClick) {
            onClick();
          }
        }}
      >
        <Tooltip
          title="New Arrivals! Click to see latest products"
          placement="right"
          TransitionComponent={Zoom}
        >
          <IconButton
            onClick={() => {
              console.log("Sticker button clicked, onClick function:", onClick);
              if (onClick) {
                console.log("Calling onClick function");
                onClick();
              } else {
                console.log("No onClick function provided");
              }
            }}
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "primary.main",
              color: "white",
              border: "3px solid white",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              "&:hover": {
                backgroundColor: "primary.dark",
                transform: "scale(1.1)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <Badge
              badgeContent=""
              variant="dot"
              color="error"
              sx={{
                "& .MuiBadge-dot": {
                  display: hasNewArrivals ? "block" : "none",
                  animation: "pulse 2s infinite",
                },
              }}
            >
              <FiberNewIcon sx={{ fontSize: stickerStyles.fontSize }} />
            </Badge>
          </IconButton>
        </Tooltip>

        {/* Ripple effect */}
        <Box
          className="ripple-effect"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: "2px solid",
            borderColor: "primary.main",
            opacity: 0.6,
          }}
        />
      </Box>
    </Zoom>
  );
};

export default NewArrivalSticker;
