import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Email, Phone } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../../assets/images/resources/logo.png";
import headerBackgroundImage from "../../assets/images/shapes/header-bg.png";
import "./index.css";

const NAV_ITEMS = [
  { label: "Home", id: "section-hero" },
  { label: "About Us", id: "section-banner" },
  { label: "Products Overview", id: "section-products-overview" },
  { label: "Facilities", id: "section-facilities" },
  { label: "Product", id: "section-products" },
  { label: "Contact", id: "section-contact" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = isMobile ? 60 : 120;
      setScrolled(window.scrollY > headerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const handleDrawerClose = () => setDrawerOpen(false);

  const scrollToId = (id) => {
    const doScroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(doScroll, 50);
    } else doScroll();
  };

  return (
    <Box>
      {/* Top Bar */}
      <Box
        sx={
          isMobile
            ? {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }
            : {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 0",
              }
        }
      >
        {!isMobile ? (
          <>
            <Box
              sx={{
                paddingLeft: 5,
                display: "flex",
                gap: 2,
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Email sx={{ color: "primary.main" }} />
                <Phone sx={{ color: "primary.main" }} />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography variant="body2">
                  nivaanchemical@gmail.com
                </Typography>
                <Typography variant="body2">+91 91067 25328</Typography>
              </Box>
            </Box>
            <Box sx={{ width: "150px", height: "auto" }}>
              <img
                src={logo}
                alt="agrikol-logo"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
            <Box sx={{ display: "flex", gap: 1, paddingRight: 5 }}>
              {[FacebookIcon, TwitterIcon, InstagramIcon].map((Icon, i) => (
                <IconButton
                  key={i}
                  sx={{
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "white",
                    },
                    backgroundColor: (t) => t.palette.secondary.light,
                    color: "#000000ff",
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </>
        ) : (
          <Box
            sx={{ width: "150px", height: "auto", justifyContent: "center" }}
          >
            <img
              src={logo}
              alt="agrikol-logo"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        )}
      </Box>

      {/* Main Navigation Bar */}
      <AppBar
        position={scrolled ? "fixed" : "static"}
        sx={{
          backgroundColor: (t) => t.palette.secondary.light,
          boxShadow: scrolled ? "0px 2px 4px rgba(0, 0, 0, 0.1)" : "none",
          zIndex: 1000,
          transition: "all 0.3s ease",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${headerBackgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            padding: "10px 0",
            display: scrolled ? "none" : "flex",
          }}
        />

        {!isMobile ? (
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              {NAV_ITEMS.map((item, idx) => (
                <Button
                  key={item.id}
                  sx={
                    idx === 0
                      ? {
                          backgroundColor: "primary.main",
                          borderRadius: "5px",
                          color: "white",
                          "&:hover": { backgroundColor: "secondary.main" },
                        }
                      : undefined
                  }
                  onClick={() =>
                    item.id === "section-products"
                      ? navigate("/products/insecticides")
                      : scrollToId(item.id)
                  }
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        ) : (
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        )}
      </AppBar>

      {/* Placeholder to prevent jump when fixed */}
      {scrolled && <Box sx={{ height: isMobile ? "56px" : "64px" }} />}

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
        PaperProps={{
          sx: {
            height: "100%",
            top: scrolled ? 0 : 184,
            width: 250,
            borderRadius: "0 10px 10px 0",
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            backgroundColor: (t) => t.palette.secondary.light,
            overflow: "auto",
          }}
        >
          <List>
            {NAV_ITEMS.map((item) => (
              <ListItemButton
                key={item.id}
                onClick={() => {
                  setDrawerOpen(false);
                  if (item.id === "section-products") {
                    navigate("/products/insecticides");
                  } else {
                    scrollToId(item.id);
                  }
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
