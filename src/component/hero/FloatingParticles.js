import React from "react";
import { Box } from "@mui/material";

const FloatingParticles = () => {
  const particles = Array.from({ length: 8 }, (_, i) => i);

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {particles.map((particle, index) => (
        <Box
          key={index}
          className="particle"
          sx={{
            position: "absolute",
            width: "6px",
            height: "6px",
            background: "rgba(255, 255, 255, 0.4)",
            borderRadius: "50%",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `particle-float ${
              6 + Math.random() * 4
            }s infinite linear`,
            animationDelay: `${Math.random() * 6}s`,
          }}
        />
      ))}
    </Box>
  );
};

export default FloatingParticles;
