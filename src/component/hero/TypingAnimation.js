import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const TypingAnimation = ({ texts, speed = 100, pause = 2000, ...props }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetText = texts[currentTextIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting && currentText !== targetText) {
          // Typing
          setCurrentText(targetText.slice(0, currentText.length + 1));
        } else if (isDeleting && currentText !== "") {
          // Deleting
          setCurrentText(targetText.slice(0, currentText.length - 1));
        } else if (!isDeleting && currentText === targetText) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pause);
        } else if (isDeleting && currentText === "") {
          // Move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      },
      isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, speed, pause]);

  return (
    <Typography {...props}>
      {currentText}
      <span style={{ opacity: 0.7 }}>|</span>
    </Typography>
  );
};

export default TypingAnimation;
