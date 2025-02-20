import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  InputBase,
  Box,
  useMediaQuery,
  useTheme,
  Fade,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [exportAnchorEl, setExportAnchorEl] = useState(null);
  const [productAnchorEl, setProductAnchorEl] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
  const [mobileOpenMenus, setMobileOpenMenus] = useState({});

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleClick = (event, setAnchorFunction) => {
    setAnchorFunction(event.currentTarget);
  };

  const handleClose = (setAnchorFunction) => {
    setAnchorFunction(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
    setMobileOpenMenus({});
  };

  const handleMobileSubmenuToggle = (label) => {
    setMobileOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const navItems = [
    { label: "Home", dropdown: false },
    { label: "Quality Assurance", dropdown: false },
    { label: "Company Profile", dropdown: false },
    { label: "Infrastructure", dropdown: false },
    { label: "Investors", dropdown: false },
    {
      label: "Exports",
      dropdown: true,
      anchorEl: exportAnchorEl,
      setAnchorEl: setExportAnchorEl,
      items: ["Export 1", "Export 2"],
    },
    {
      label: "Product",
      dropdown: true,
      anchorEl: productAnchorEl,
      setAnchorEl: setProductAnchorEl,
      items: ["Product 1", "Product 2"],
    },
  ];

  const renderNavItems = () => (
    <>
      {navItems.map((item, index) => (
        <Box key={index} sx={{ mx: 1 }}>
          {item.dropdown ? (
            <>
              <Button
                color="inherit"
                endIcon={<KeyboardArrowDownIcon />}
                onClick={(e) => handleClick(e, item.setAnchorEl)}
              >
                {item.label}
              </Button>
              <Menu
                anchorEl={item.anchorEl}
                open={Boolean(item.anchorEl)}
                onClose={() => handleClose(item.setAnchorEl)}
              >
                {item.items.map((subItem, subIndex) => (
                  <MenuItem
                    key={subIndex}
                    onClick={() => handleClose(item.setAnchorEl)}
                  >
                    {subItem}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Button color="inherit">{item.label}</Button>
          )}
        </Box>
      ))}
    </>
  );

  return (
    <AppBar position="fixed" sx={{ bgcolor: "#000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant={isMobile ? "h6" : "h5"}
            component="div"
            sx={{ flexGrow: 1, color: "white" }}
          >
            NIVAN AGRITECH
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleMobileMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={mobileMenuAnchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(mobileMenuAnchorEl)}
                onClose={handleMobileMenuClose}
              >
                {navItems.map((item, index) => (
                  <div key={index}>
                    {item.dropdown ? (
                      <>
                        <ListItemButton
                          onClick={() => handleMobileSubmenuToggle(item.label)}
                        >
                          <ListItemText primary={item.label} />
                          {mobileOpenMenus[item.label] ? (
                            <ExpandLess />
                          ) : (
                            <ExpandMore />
                          )}
                        </ListItemButton>
                        <Collapse
                          in={mobileOpenMenus[item.label]}
                          timeout="auto"
                          unmountOnExit
                        >
                          <List component="div" disablePadding>
                            {item.items.map((subItem, subIndex) => (
                              <ListItemButton
                                key={subIndex}
                                sx={{ pl: 4 }}
                                onClick={handleMobileMenuClose}
                              >
                                <ListItemText primary={subItem} />
                              </ListItemButton>
                            ))}
                          </List>
                        </Collapse>
                      </>
                    ) : (
                      <MenuItem onClick={handleMobileMenuClose}>
                        {item.label}
                      </MenuItem>
                    )}
                  </div>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {renderNavItems()}
            </Box>
          )}

          {/* Search Icon and Input */}
          <Box
            sx={{
              ml: 4,
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <IconButton
              color="inherit"
              onClick={() => setShowSearch(!showSearch)}
              sx={{
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <SearchIcon />
            </IconButton>
            <Fade in={showSearch}>
              <Box
                sx={{
                  position: "absolute",
                  right: 0,
                  top: "100%",
                  mt: 1,
                  bgcolor: "white",
                  borderRadius: 1,
                  boxShadow: 3,
                  overflow: "hidden",
                  width: isMobile ? 160 : 200,
                }}
              >
                <InputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  sx={{
                    color: "inherit",
                    p: 1,
                    width: "100%",
                    bgcolor: "white",
                    color: "black",
                  }}
                />
              </Box>
            </Fade>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
