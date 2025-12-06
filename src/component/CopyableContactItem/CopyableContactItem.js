import React, { useState } from "react";
import { Box, Typography, Tooltip, Snackbar } from "@mui/material";

const CopyableContactItem = ({
  icon,
  text,
  iconColor = "primary.main",
  textVariant = "body2",
  textColor,
  sx = {},
}) => {
  const [copied, setCopied] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setSnackbarOpen(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, ...sx }}>
      {icon && React.cloneElement(icon, { sx: { color: iconColor } })}

      <Tooltip title={copied ? "Copied!" : "Click to copy"}>
        <Typography
          variant={textVariant}
          onClick={handleCopy}
          sx={{
            color: textColor,
            flexGrow: 1,
            cursor: "pointer",
            userSelect: "none",
            "&:hover": {
              opacity: 0.8,
              textDecoration: "underline",
            },
            transition: "opacity 0.2s ease",
          }}
        >
          {text}
        </Typography>
      </Tooltip>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        message="Copied to clipboard!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Box>
  );
};

export default CopyableContactItem;
