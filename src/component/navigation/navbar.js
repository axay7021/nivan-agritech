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
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import { Email, Phone } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import InventoryIcon from "@mui/icons-material/Inventory";
import FactoryIcon from "@mui/icons-material/Factory";
import CategoryIcon from "@mui/icons-material/Category";
import VerifiedIcon from "@mui/icons-material/Verified";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CopyableContactItem from "../CopyableContactItem";
import logo from "../../assets/images/resources/logo.png";
import "./index.css";

const NAV_ITEMS = [
  { label: "Home", id: "section-hero", icon: <HomeIcon /> },
  {
    label: "About Us",
    id: "section-banner",
    route: "/about",
    icon: <InfoIcon />,
  },
  {
    label: "Products Overview",
    id: "section-products-overview",
    icon: <InventoryIcon />,
  },
  {
    label: "Facilities",
    id: "section-facilities",
    route: "/facilities",
    icon: <FactoryIcon />,
  },
  { label: "Product", id: "section-products", icon: <CategoryIcon /> },
  {
    label: "Quality & Certifications",
    id: "quality-certification",
    icon: <VerifiedIcon />,
  },
  {
    label: "Contact",
    id: "contact-us",
    route: "/contact-us",
    icon: <ContactMailIcon />,
  },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("section-hero");
  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = isMobile ? 60 : 100;
      setScrolled(window.scrollY > headerHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Track active section on scroll
  useEffect(() => {
    if (location.pathname !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" },
    );
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [location.pathname]);

  const handleDrawerClose = () => setDrawerOpen(false);

  const handleSocialClick = (platform) => {
    if (platform === "instagram") {
      window.open(
        "https://www.instagram.com/nivaanchemical?igsh=MXQ2Y2cyNzBkdjVuNA==",
        "_blank",
      );
    } else if (platform === "facebook") {
      window.open(
        "https://www.facebook.com/share/15qorGsZta/?mibextid=wwXIfr",
        "_blank",
      );
    } else if (platform === "whatsapp") {
      const phoneNumber = "919106725328";
      window.open(`https://wa.me/${phoneNumber}`, "_blank");
    }
  };

  const scrollToId = (id) => {
    const doScroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(doScroll, 100);
    } else doScroll();
  };

  const handleNavClick = (item) => {
    if (item.route) {
      navigate(item.route);
    } else if (item.id === "section-products") {
      navigate("/products/insecticides");
    } else if (item.id === "quality-certification") {
      navigate("/quality-certification");
    } else {
      scrollToId(item.id);
    }
  };

  const socialButtons = [
    { Icon: FacebookIcon, platform: "facebook", color: "#1877F2" },
    { Icon: InstagramIcon, platform: "instagram", color: "#E4405F" },
    { Icon: WhatsAppIcon, platform: "whatsapp", color: "#25D366" },
  ];

  return (
    <Box>
      {/* Top Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: "center",
          padding: isMobile ? "10px 16px" : "12px 40px",
          backgroundColor: "white",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          position: "relative",
          minHeight: isMobile ? "60px" : "72px",
        }}
      >
        {!isMobile ? (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 3,
                alignItems: "center",
              }}
            >
              <CopyableContactItem
                icon={<Email sx={{ fontSize: 18 }} />}
                text="nivaanchemical@gmail.com"
                type="email"
                iconColor="#2E7D32"
                textVariant="body2"
              />
              <CopyableContactItem
                icon={<Phone sx={{ fontSize: 18 }} />}
                text="+91 91067 25328"
                type="phone"
                iconColor="#2E7D32"
                textVariant="body2"
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <img
                src={logo}
                alt="Nivaan Chemical"
                style={{
                  width: 56,
                  height: 56,
                  objectFit: "contain",
                  flexShrink: 0,
                }}
              />
              <Box>
                <Box
                  component="span"
                  sx={{
                    fontFamily: "'Playfair Display', serif !important",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: "#1b5e20",
                    letterSpacing: "0.5px",
                    display: "block",
                    lineHeight: 1.2,
                  }}
                >
                  Nivaan Chemical
                </Box>
                <Box
                  component="span"
                  sx={{
                    fontSize: "0.65rem",
                    color: "#4a5e4a",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  Agro Solutions
                </Box>
              </Box>
            </Box>

            {/* Social Icons */}
            <Box sx={{ display: "flex", gap: 0.5 }}>
              {socialButtons.map(({ Icon, platform, color }, i) => (
                <IconButton
                  key={i}
                  onClick={() => handleSocialClick(platform)}
                  size="small"
                  sx={{
                    color: "#666",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      color: color,
                      backgroundColor: `${color}10`,
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <img
              src={logo}
              alt="Nivaan Chemical"
              style={{
                width: 44,
                height: 44,
                objectFit: "contain",
                flexShrink: 0,
              }}
            />
            <Box
              component="span"
              sx={{
                fontFamily: "'Playfair Display', serif !important",
                fontWeight: 700,
                fontSize: "1rem",
                color: "#1b5e20",
              }}
            >
              Nivaan Chemical
            </Box>
          </Box>
        )}
      </Box>

      {/* Main Navigation Bar */}
      <AppBar
        position={scrolled ? "fixed" : "static"}
        elevation={0}
        sx={{
          backgroundColor: scrolled ? "rgba(27, 94, 32, 0.97)" : "#1b5e20",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.12)" : "none",
          zIndex: 1100,
          transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {!isMobile ? (
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "center",
              minHeight: { md: scrolled ? "56px" : "62px" },
              transition: "min-height 0.3s ease",
              px: 3,
            }}
          >
            <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
              {/* {scrolled && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mr: 2,
                  }}
                >
                  <img
                    src={logo}
                    alt="Nivaan"
                    style={{
                      width: 36,
                      height: 36,
                      objectFit: "contain",
                    }}
                  />
                </Box>
              )} */}
              {NAV_ITEMS.map((item) => {
                const isActive =
                  location.pathname === "/" && activeSection === item.id;
                return (
                  <Button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    sx={{
                      color: "rgba(255,255,255,0.88)",
                      fontSize: "0.84rem",
                      fontWeight: 500,
                      letterSpacing: "0.3px",
                      px: 2.2,
                      py: 1,
                      borderRadius: "8px",
                      position: "relative",
                      textTransform: "none",
                      transition: "all 0.25s ease",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 2,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: isActive ? "60%" : "0%",
                        height: "2px",
                        backgroundColor: "#F9A825",
                        borderRadius: "2px",
                        transition: "width 0.3s ease",
                      },
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.1)",
                        color: "white",
                        "&::after": {
                          width: "60%",
                        },
                      },
                      ...(isActive && {
                        color: "white",
                        fontWeight: 600,
                      }),
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>
          </Toolbar>
        ) : (
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              minHeight: "56px",
            }}
          >
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ display: "flex", gap: 0.5 }}>
              {socialButtons.map(({ Icon, platform }, i) => (
                <IconButton
                  key={i}
                  size="small"
                  onClick={() => handleSocialClick(platform)}
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.15)",
                      color: "white",
                    },
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </Toolbar>
        )}
      </AppBar>

      {/* Placeholder to prevent jump when nav becomes fixed */}
      {scrolled && <Box sx={{ height: isMobile ? "56px" : "62px" }} />}

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
        PaperProps={{
          sx: {
            width: 280,
            borderRadius: "0 20px 20px 0",
            backgroundColor: "#FAFDF7",
            boxShadow: "4px 0 24px rgba(0,0,0,0.12)",
          },
        }}
      >
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          {/* Drawer Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
              pb: 1.5,
              borderBottom: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <img
                src={logo}
                alt="Nivaan"
                style={{ width: 36, height: "auto" }}
              />
              <Box
                sx={{
                  fontFamily: "'Playfair Display', serif !important",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "#1b5e20",
                }}
              >
                Nivaan Chemical
              </Box>
            </Box>
            <IconButton onClick={handleDrawerClose} size="small">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Nav Items */}
          <List sx={{ flex: 1, pt: 1, px: 1 }}>
            {NAV_ITEMS.map((item) => (
              <ListItemButton
                key={item.id}
                onClick={() => {
                  handleDrawerClose();
                  handleNavClick(item);
                }}
                sx={{
                  borderRadius: "10px",
                  mb: 0.5,
                  py: 1.2,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: "rgba(46, 125, 50, 0.08)",
                    transform: "translateX(4px)",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40, color: "#2E7D32" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "#1a2e1a",
                  }}
                />
              </ListItemButton>
            ))}
          </List>

          {/* Drawer Footer */}
          <Divider />
          <Box sx={{ p: 2 }}>
            <CopyableContactItem
              icon={<Phone sx={{ fontSize: 16 }} />}
              text="+91 91067 25328"
              type="phone"
              iconColor="#2E7D32"
              textVariant="caption"
            />
            <Box sx={{ display: "flex", gap: 0.5, mt: 1.5 }}>
              {socialButtons.map(({ Icon, platform, color }, i) => (
                <IconButton
                  key={i}
                  size="small"
                  onClick={() => handleSocialClick(platform)}
                  sx={{
                    color: "#666",
                    "&:hover": { color: color, bgcolor: `${color}10` },
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
