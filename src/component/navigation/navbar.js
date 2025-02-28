import { Email, Phone } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from '@mui/icons-material/Menu';
import TwitterIcon from "@mui/icons-material/Twitter";
import {
    AppBar,
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import logo from "../../assets/images/resources/logo.png";
import headerBackgroundImage from "../../assets/images/shapes/header-bg.png";

import React, { useEffect, useState } from "react";
import './index.css';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    // Keep the useEffect for scroll detection - this is needed!
    useEffect(() => {
        const handleScroll = () => {
            // We'll set scrolled to true when the page scrolls down beyond the initial header height
            const headerHeight = isMobile ? 60 : 120; // Approximate header height in pixels
            if (window.scrollY > headerHeight) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isMobile]);

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    return (
        <Box>
            {/* Top Bar - This always stays at the top initially */}
            <Box
                sx={isMobile ?
                    { display: "flex", justifyContent: "center", alignItems: "center" } :
                    { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0" }
                }
            >
                {!isMobile ? (
                    <>
                        <Box sx={{ paddingLeft: 5, display: "flex", gap: 2, alignItems: "center" }}>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                <Email sx={{ color: "green" }} />
                                <Phone sx={{ color: "green" }} />
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                <Typography variant="body2">needhelp@agrikol.com</Typography>
                                <Typography variant="body2">666 888 0000</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ width: "150px", height: "auto" }}>
                            <img src={logo} alt="agrikol-logo" style={{ width: "100%", height: "auto" }} />
                        </Box>
                        <Box sx={{ display: "flex", gap: 1, paddingRight: 5}}>
                            <IconButton sx={{ "&:hover": {backgroundColor: 'green', color: "white" }, backgroundColor: '#f5f0e9', color: '#878986'}}><FacebookIcon /></IconButton>
                            <IconButton sx={{ "&:hover": {backgroundColor: 'green', color: "white" }, backgroundColor: '#f5f0e9', color: '#878986'}}><TwitterIcon /></IconButton>
                            <IconButton sx={{ "&:hover": {backgroundColor: 'green', color: "white" }, backgroundColor: '#f5f0e9', color: '#878986'}}><InstagramIcon /></IconButton>
                        </Box>
                    </>
                ) : (
                    <Box sx={{ width: "150px", height: "auto", justifyContent: "center" }}>
                        <img src={logo} alt="agrikol-logo" style={{ width: "100%", height: "auto" }} />
                    </Box>
                )}
            </Box>

            {/* Main Navigation Bar */}
            <AppBar
                position={scrolled ? "fixed" : "static"}
                sx={{
                    backgroundColor: "#f8f5ec",
                    boxShadow: scrolled ? "0px 2px 4px rgba(0, 0, 0, 0.1)" : "none",
                    zIndex: 1000,
                    transition: "all 0.3s ease",
                }}
            >
                <Box sx={{
                    backgroundImage: "url(" + headerBackgroundImage + ")",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    padding: "10px 0",
                    display: scrolled ? "none" : 'flex'
                }} />

                {!isMobile ? (
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <Button sx={{
                                backgroundColor: "green",
                                borderRadius: "5px",
                                color: "white",
                                "&:hover": { backgroundColor: "darkgreen" }
                            }}>
                                Home
                            </Button>
                            <Button>Services</Button>
                            <Button>Our Projects</Button>
                            <Button>Shop</Button>
                            <Button>Pages</Button>
                            <Button>News</Button>
                            <Button>Contact</Button>
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

            {/* Add a placeholder when the navbar becomes fixed to prevent content jump */}
            {scrolled && (
                <Box sx={{ height: isMobile ? "56px" : "64px" }} /> // Toolbar height
            )}

            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerClose}
                PaperProps={{
                    sx: { height: "100%", top: scrolled ? 0 : 184, width: 250, borderRadius: "0 10px 10px 0" }
                }}
            >
                <Box sx={{height: "100%", backgroundColor: "#f8f5ec", overflow: "auto" }}>
                    <List>
                        {["Home", "Services", "Our Projects", "Shop", "Pages", "News", "Contact"].map((text) => (
                            <ListItem button key={text} onClick={() => setDrawerOpen(false)}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
};

export default Navbar;