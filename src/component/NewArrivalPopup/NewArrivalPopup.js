import React from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
  Backdrop,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./NewArrivalPopup.css";

const NewArrivalPopup = ({ open, onClose }) => {
  console.log("NewArrivalPopup render - open:", open);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // Get responsive dimensions - much smaller to prevent scrolling
  const getDialogDimensions = () => {
    if (isMobile) {
      return {
        maxWidth: "80vw",
        maxHeight: "55vh",
        width: "80vw",
        height: "55vh",
      };
    } else if (isTablet) {
      return {
        maxWidth: "50vw",
        maxHeight: "45vh",
        width: "50vw",
        height: "45vh",
      };
    } else {
      return {
        maxWidth: "35vw",
        maxHeight: "55vh",
        width: "35vw",
        height: "55vh",
      };
    }
  };

  const dimensions = getDialogDimensions();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      PaperProps={{
        sx: {
          ...dimensions,
          borderRadius: 0,
          overflow: "hidden",
          position: "relative",
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "none",
        },
      }}
      BackdropComponent={Backdrop}
      BackdropProps={{
        sx: {
          backgroundColor: "rgba(0,0,0,0.7)",
        },
      }}
    >
      <DialogContent
        sx={{
          p: 0,
          position: "relative",
          backgroundColor: "transparent",
          border: "none",
          overflow: "hidden",
          height: "100%",
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: -50,
            zIndex: 10,
            backgroundColor: "rgba(255,255,255,0.9)",
            color: "black",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,1)",
              transform: "scale(1.1)",
            },
            transition: "all 0.2s ease",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Advertisement Text with Up-Down Movement */}
        <Box
          className="moving-text-container"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 5,
            height: isMobile ? "30px" : "40px",
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <Typography
            className="bounce-text"
            sx={{
              color: "#4CAF50",
              fontWeight: "bold",
              fontSize: isMobile ? "1rem" : "1.2rem",
              whiteSpace: "nowrap",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              animation: "gentleBounce 2s ease-in-out infinite",
              textAlign: "center",
            }}
          >
            🎉 New Arrivals - Special Offers Available! 🌟
          </Typography>
        </Box>

        {/* Simple Image Container */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
            position: "relative",
            overflow: "hidden",
            paddingTop: isMobile ? "30px" : "40px", // Space for the moving text
          }}
        >
          <img
            src="https://res.cloudinary.com/dxhih7kwi/image/upload/v1764478784/WhatsApp_Image_2025-11-30_at_10.27.12-Photoroom_cqgcj9.png"
            alt="New Arrival"
            style={{
              width: "100%",
              height: isMobile ? "calc(100% - 40px)" : "calc(100% - 50px)",
              objectFit: "contain",
              maxHeight: isMobile
                ? `calc(${dimensions.maxHeight} - 40px)`
                : `calc(${dimensions.maxHeight} - 50px)`,
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default NewArrivalPopup;
