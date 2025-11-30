import React, { useState, useEffect } from "react";
import NewArrivalPopup from "../NewArrivalPopup/NewArrivalPopup";

const NewArrivalManager = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  console.log("NewArrivalManager mounted, current state:", { popupOpen });

  // Auto-show popup on page load/reload
  useEffect(() => {
    console.log("Page loaded, showing popup in 2 seconds");
    // Show popup after a short delay on every page load
    const timer = setTimeout(() => {
      console.log("Setting popup open to true");
      setPopupOpen(true);
    }, 2000); // 2 second delay

    return () => clearTimeout(timer);
  }, []);

  const handlePopupClose = () => {
    console.log("Popup closing");
    setPopupOpen(false);
  };

  return (
    <>
      {/* Popup */}
      <NewArrivalPopup open={popupOpen} onClose={handlePopupClose} />
    </>
  );
};

export default NewArrivalManager;
