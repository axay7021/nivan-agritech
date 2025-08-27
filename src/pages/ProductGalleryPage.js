import React from "react";
import { Box, Container, Grid, Typography, Paper, List, ListItemButton, ListItemText, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const CATEGORY_LIST = [
  { key: "insecticides", name: "Insecticides" },
  { key: "fungicides", name: "Fungicides" },
  { key: "herbicides", name: "Herbicides" },
  { key: "pgr-stimulants", name: "Plant Growth Regulators (PGR) and Crop Stimulants" },
];

// Fake 20+ products per category
const buildProducts = (categoryKey) =>
  Array.from({ length: 20 }).map((_, i) => ({
    id: `${categoryKey}-${i + 1}`,
    name: `${CATEGORY_LIST.find(c => c.key === categoryKey)?.name || "Product"} #${i + 1}`,
    image: `https://picsum.photos/seed/${categoryKey}-${i}/400/300`,
    description: "High quality agricultural product for better yields.",
  }));

const ProductGalleryPage = () => {
  const navigate = useNavigate();
  const { categoryKey = "insecticides" } = useParams();

  const products = buildProducts(categoryKey);

  const handleSelect = (key) => navigate(`/products/${key}`);

  return (
    <Box sx={{ py: { xs: 3, md: 5 }, backgroundColor: (t) => t.palette.background.default }}>
      <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3, md: 6, lg: 8, xl: 10 } }}>
        <Grid container spacing={3}>
          {/* Sidebar on left for desktop/tablet */}
          <Grid item xs={12} md={3}>
            {/* Mobile category dropdown */}
            <Box sx={{ display: { xs: "block", md: "none" }, mb: 2 }}>
              <FormControl fullWidth size="small">
                <InputLabel id="cat-select-label">Category</InputLabel>
                <Select
                  labelId="cat-select-label"
                  label="Category"
                  value={categoryKey}
                  onChange={(e) => handleSelect(e.target.value)}
                >
                  {CATEGORY_LIST.map((c) => (
                    <MenuItem key={c.key} value={c.key}>{c.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            {/* Sidebar list hidden on mobile */}
            <Paper elevation={0} sx={{ display: { xs: "none", md: "block" }, p: 2, backgroundColor: (t) => t.palette.grey[100], borderRadius: 2 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>Categories</Typography>
              <List>
                {CATEGORY_LIST.map((c) => (
                  <ListItemButton key={c.key} selected={c.key === categoryKey} onClick={() => handleSelect(c.key)}>
                    <ListItemText primary={c.name} />
                  </ListItemButton>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Gallery on right */}
          <Grid item xs={12} md={9}>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
              {CATEGORY_LIST.find(c => c.key === categoryKey)?.name}
            </Typography>
            <Grid container spacing={2}>
              {products.map((p) => (
                <Grid key={p.id} item xs={12} sm={6} md={4}>
                  <Paper elevation={1} sx={{ overflow: "hidden", borderRadius: 2 }}>
                    <Box component="img" src={p.image} alt={p.name} sx={{ width: "100%", height: 180, objectFit: "cover" }} />
                    <Box sx={{ p: 2 }}>
                      <Typography variant="subtitle1" fontWeight={600}>{p.name}</Typography>
                      <Typography variant="body2" color="text.secondary">{p.description}</Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductGalleryPage;
