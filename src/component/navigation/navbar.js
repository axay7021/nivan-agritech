import { Email, Phone, Search, ShoppingCart } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
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
import React, { useState } from "react";
import './index.css';

// const Navbar = () => {
//   const [exportAnchorEl, setExportAnchorEl] = useState(null);
//   const [productAnchorEl, setProductAnchorEl] = useState(null);
//   const [showSearch, setShowSearch] = useState(false);
//   const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
//   const [mobileOpenMenus, setMobileOpenMenus] = useState({});

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   const handleClick = (event, setAnchorFunction) => {
//     setAnchorFunction(event.currentTarget);
//   };

//   const handleClose = (setAnchorFunction) => {
//     setAnchorFunction(null);
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMenuAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMenuAnchorEl(null);
//     setMobileOpenMenus({});
//   };

//   const handleMobileSubmenuToggle = (label) => {
//     setMobileOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
//   };

//   const navItems = [
//     { label: "Home", dropdown: false },
//     { label: "Quality Assurance", dropdown: false },
//     { label: "Company Profile", dropdown: false },
//     { label: "Infrastructure", dropdown: false },
//     { label: "Investors", dropdown: false },
//     {
//       label: "Exports",
//       dropdown: true,
//       anchorEl: exportAnchorEl,
//       setAnchorEl: setExportAnchorEl,
//       items: ["Export 1", "Export 2"],
//     },
//     {
//       label: "Product",
//       dropdown: true,
//       anchorEl: productAnchorEl,
//       setAnchorEl: setProductAnchorEl,
//       items: ["Product 1", "Product 2"],
//     },
//   ];

//   const renderNavItems = () => (
//     <>
//       {navItems.map((item, index) => (
//         <Box key={index} sx={{ mx: 1 }}>
//           {item.dropdown ? (
//             <>
//               <Button
//                 color="inherit"
//                 endIcon={<KeyboardArrowDownIcon />}
//                 onClick={(e) => handleClick(e, item.setAnchorEl)}
//               >
//                 {item.label}
//               </Button>
//               <Menu
//                 anchorEl={item.anchorEl}
//                 open={Boolean(item.anchorEl)}
//                 onClose={() => handleClose(item.setAnchorEl)}
//               >
//                 {item.items.map((subItem, subIndex) => (
//                   <MenuItem
//                     key={subIndex}
//                     onClick={() => handleClose(item.setAnchorEl)}
//                   >
//                     {subItem}
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </>
//           ) : (
//             <Button color="inherit">{item.label}</Button>
//           )}
//         </Box>
//       ))}
//     </>
//   );

//   return (
//     <AppBar position="fixed" sx={{ bgcolor: "#000" }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           {/* Logo */}
//           <Typography
//             variant={isMobile ? "h6" : "h5"}
//             component="div"
//             sx={{ flexGrow: 1, color: "white" }}
//           >
//             NIVAN AGRITECH
//           </Typography>

//           {isMobile ? (
//             <>
//               <IconButton
//                 color="inherit"
//                 aria-label="open drawer"
//                 edge="start"
//                 onClick={handleMobileMenuOpen}
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 anchorEl={mobileMenuAnchorEl}
//                 anchorOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 open={Boolean(mobileMenuAnchorEl)}
//                 onClose={handleMobileMenuClose}
//               >
//                 {navItems.map((item, index) => (
//                   <div key={index}>
//                     {item.dropdown ? (
//                       <>
//                         <ListItemButton
//                           onClick={() => handleMobileSubmenuToggle(item.label)}
//                         >
//                           <ListItemText primary={item.label} />
//                           {mobileOpenMenus[item.label] ? (
//                             <ExpandLess />
//                           ) : (
//                             <ExpandMore />
//                           )}
//                         </ListItemButton>
//                         <Collapse
//                           in={mobileOpenMenus[item.label]}
//                           timeout="auto"
//                           unmountOnExit
//                         >
//                           <List component="div" disablePadding>
//                             {item.items.map((subItem, subIndex) => (
//                               <ListItemButton
//                                 key={subIndex}
//                                 sx={{ pl: 4 }}
//                                 onClick={handleMobileMenuClose}
//                               >
//                                 <ListItemText primary={subItem} />
//                               </ListItemButton>
//                             ))}
//                           </List>
//                         </Collapse>
//                       </>
//                     ) : (
//                       <MenuItem onClick={handleMobileMenuClose}>
//                         {item.label}
//                       </MenuItem>
//                     )}
//                   </div>
//                 ))}
//               </Menu>
//             </>
//           ) : (
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               {renderNavItems()}
//             </Box>
//           )}

//           {/* Search Icon and Input */}
//           <Box
//             sx={{
//               ml: 4,
//               display: "flex",
//               alignItems: "center",
//               position: "relative",
//             }}
//           >
//             <IconButton
//               color="inherit"
//               onClick={() => setShowSearch(!showSearch)}
//               sx={{
//                 transition: "all 0.3s ease-in-out",
//                 "&:hover": {
//                   bgcolor: "rgba(255, 255, 255, 0.1)",
//                 },
//               }}
//             >
//               <SearchIcon />
//             </IconButton>
//             <Fade in={showSearch}>
//               <Box
//                 sx={{
//                   position: "absolute",
//                   right: 0,
//                   top: "100%",
//                   mt: 1,
//                   bgcolor: "white",
//                   borderRadius: 1,
//                   boxShadow: 3,
//                   overflow: "hidden",
//                   width: isMobile ? 160 : 200,
//                 }}
//               >
//                 <InputBase
//                   placeholder="Search…"
//                   inputProps={{ "aria-label": "search" }}
//                   sx={{
//                     color: "inherit",
//                     p: 1,
//                     width: "100%",
//                     bgcolor: "white",
//                     color: "black",
//                   }}
//                 />
//               </Box>
//             </Fade>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default Navbar;

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      {/* Top Bar */}
      <Box
        sx={isMobile ? {  display: "flex", justifyContent: "center", alignItems: "center", } : { display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#f8f5ec", padding: "10px 0" }}
      >
        {!isMobile ? (
          <>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Email sx={{ color: "green" }} />
                <Phone sx={{ color: "green" }} />
              </Box>
              <Box  sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography variant="body2">needhelp@agrikol.com</Typography>
                <Typography variant="body2">666 888 0000</Typography>
              </Box>
            </Box>
            <Box sx={{ width: "150px", height: "auto" }}>
              <img src="/images/resources/logo.png" alt="agrikol-logo" style={{ width: "100%", height: "auto" }} />
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton><FacebookIcon /></IconButton>
              <IconButton><TwitterIcon /></IconButton>
              <IconButton><InstagramIcon /></IconButton>
            </Box>
          </>
        ) : (
            <Box sx={{ width: "150px", height: "auto", justifyContent: "center" }}>
              <img src="/images/resources/logo.png" alt="agrikol-logo" style={{ width: "100%", height: "auto" }} />
            </Box>
        )}
      </Box>

       {/* Main Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#f8f5ec", boxShadow: "none" }}>
        {!isMobile ? (
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" color="black" sx={{ fontWeight: "bold" }}>
            AGRIKOL
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button sx={{ backgroundColor: "#f1d354", borderRadius: "5px" }}>Home</Button>
            <Button>Services</Button>
            <Button>Our Projects</Button>
            <Button>Shop</Button>
            <Button>Pages</Button>
            <Button>News</Button>
            <Button>Contact</Button>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton><Search /></IconButton>
            <IconButton><ShoppingCart /></IconButton>
          </Box>
        </Toolbar>
        ) : (
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton onClick={() => setDrawerOpen(true)}>
            {/* // drover icon */}
            {/* Drawer for Mobile Menu */}
            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
              <Box sx={{ width: 250, backgroundColor: "#f8f5ec", height: "100vh", padding: "20px" }}>
                <List>
                  {["Home", "Services", "Our Projects", "Shop", "Pages", "News", "Contact"].map((text) => (
                    <ListItem button key={text} onClick={() => setDrawerOpen(false)}>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>

          </IconButton>
        </Toolbar>
        )}
      </AppBar>

    </Box>
  );
};

export default Navbar;
