import React, { useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  List,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { InfoOutlined } from "@mui/icons-material";

const CATEGORY_LIST = [
  { key: "insecticides", name: "Pesticides" },
  { key: "fungicides", name: "Fungicides" },
  { key: "herbicides", name: "Herbicides" },
  {
    key: "pgr-stimulants",
    name: "Plant Growth Regulators (PGR) and Crop Stimulants",
  },
  {
    key: "mix-micro-nutrients",
    name: "Mix Micro Nutrients",
  },
  {
    key: "water-soluble-fertilizers",
    name: "Water Soluble Fertilizers",
  },
];

// Product data with Cloudinary images
const PRODUCTS_DATA = {
  insecticides: [
    {
      id: "pesticides-tolfenza",
      name: "TOLFENZA",
      image:
        "https://res.cloudinary.com/dg8eoy4nt/image/upload/v1775059969/TOLFENZA_qq3rlr.jpg",
      description:
        "Tolfenpyrad 15% EC\nInsecticide for effective pest control.",
    },
    {
      id: "pesticides-imida-30",
      name: "IMIDA 30",
      image:
        "https://res.cloudinary.com/dg8eoy4nt/image/upload/v1775061904/IMIDA-30_zrklcn.jpg",
      description:
        "Imidacloprid 30.5% SC\nSystemic insecticide for pest control.",
    },
    {
      id: "insecticides-1",
      name: "Abbot 1.9",
      image:
        "https://res.cloudinary.com/dg8eoy4nt/image/upload/v1775059175/Abbot_1.9_aqrvlv.jpg",
      description:
        "Abamectin 1.9% EC\nHigh quality insecticide for effective pest control.",
    },
    {
      id: "insecticides-2",
      name: "Blast 505",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1762797406/Blast_505_xvcge6.jpg",
      description:
        "Chlorpyriphos 50% + Cypermethrin 5% EC\nPowerful insecticide for crop protection.",
    },
    {
      id: "insecticides-3",
      name: "Cypron-10",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1762797425/Cypron-10_scssb2.jpg",
      description: "Cypermethrin 10% EC\nAdvanced insecticide formulation.",
    },
    {
      id: "pesticides-cypron-25",
      name: "CYPRON 25",
      image:
        "https://res.cloudinary.com/dg8eoy4nt/image/upload/v1775063059/CYPRON-25_b9ekkb.jpg",
      description: "Cypermethrin 25% EC\nBroad-spectrum insecticide.",
    },
    {
      id: "insecticides-4",
      name: "Dahaad",
      image:
        "https://res.cloudinary.com/dg8eoy4nt/image/upload/v1775064039/DAHAAD_fqarcn.jpg",
      description:
        "Systemic and Contact Insecticide\nEffective insecticide for various pests.",
    },
    {
      id: "insecticides-5",
      name: "Flyout-20",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1762797419/Flyout-20_rjnoa3.jpg",
      description:
        "Acetamiprid 20% SP\nSpecialized insecticide for flying insects.",
    },
    {
      id: "insecticides-6",
      name: "Larva Out",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1762797423/Larva_Out_mxqbre.jpg",
      description:
        "Emamectin Benzoate 1.9% EC Insecticide\nLarvicide for effective pest control.",
    },
    {
      id: "insecticides-7",
      name: "Niva-Claim-5",
      image:
        "https://res.cloudinary.com/dg8eoy4nt/image/upload/v1775062814/Niva-Claim-5_b21i67.jpg",
      description: "Emamectin Benzoate 5% SG\nPremium insecticide solution.",
    },
    {
      id: "insecticides-8",
      name: "NivaChlor-50",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1762797430/NivaChlor-50_ogbt61.jpg",
      description: "Chlorpyriphos 50% EC\nHigh concentration insecticide.",
    },
    {
      id: "insecticides-9",
      name: "Procyper",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1762797432/Procyper_urcn9m.jpg",
      description:
        "Profenophos 40% + Cypermethrin 4% EC Insecticide\nProfessional grade insecticide.",
    },
    {
      id: "insecticides-10",
      name: "Protect-30",
      image:
        "https://res.cloudinary.com/dg8eoy4nt/image/upload/v1775063754/PROTECT-30_o66mwy.jpg",
      description: "Thiamethoxam 30% FS\nProtective insecticide formula.",
    },
    {
      id: "insecticides-11",
      name: "Runner",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1762797434/Runner_rq0fe3.jpg",
      description: "Fipronil 5% SC Insecticide\nFast-acting insecticide.",
    },
    {
      id: "insecticides-12",
      name: "Boss-20",
      image:
        "https://res.cloudinary.com/dg8eoy4nt/image/upload/v1775059701/Boss-20_1_ob1dzk.jpg",
      description:
        "Dinotefuran 20% SG systemic insecticide\nSuperior insecticide for pest management.",
    },
    {
      id: "insecticides-13",
      name: "Fimida 40-40",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1762797416/fimida_40-40_kfa5iv.jpg",
      description:
        "Fipronil 40% + Imidacloprid 40% WG\nDual action insecticide.",
    },
    {
      id: "insecticides-14",
      name: "Flykill 25",
      image:
        "https://res.cloudinary.com/dg8eoy4nt/image/upload/v1775060785/FlyKill_fvqoos.jpg",
      description:
        "Thiamethoxam 25% WG Pesticide\nEffective fly control insecticide.",
    },
    {
      id: "insecticides-15",
      name: "NivaChlor-20",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1762797429/nivachlor-20_o5ymzd.jpg",
      description:
        "Chlorpyriphos 20% EC\nReliable insecticide for crop protection.",
    },
    // Adding new products from Cloudinary
    {
      id: "insecticides-16",
      name: "Emida-17",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1762797415/Emida-17_psnbhe.jpg",
      description: "Imidacloprid 17% SL\nAdvanced pest control solution.",
    },
    {
      id: "insecticides-17",
      name: "Sypron-25",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1762797477/Sypron-25_iayqke.jpg",
      description: "Cypermethrin 25% EC\nEffective broad-spectrum insecticide.",
    },
    {
      id: "insecticides-18",
      name: "Alfachlor",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1762797409/Alfachlor_wyllq6.jpg",
      description:
        "Chlorpyrifos 16% + Alpha-Cypermethrin 1% EC\nPremium insecticide formulation.",
    },
    {
      id: "insecticides-19",
      name: "Deltra-11",
      image:
        "https://res.cloudinary.com/dg8eoy4nt/image/upload/v1775062202/DELTRA-11_cwa1ei.jpg",
      description: "Deltamethrin 11% EC\nHigh-performance insecticide.",
    },
    // Adding new fungicide from Cloudinary
    {
      id: "fungicides-6",
      name: "Corzin",
      image:
        "https://res.cloudinary.com/dg8eoy4nt/image/upload/v1775062520/CORZIN_tkcrmn.jpg",
      description:
        "Chlorantraniliprole 18.5% W/W SC\nSystemic fungicide for comprehensive disease management.",
    },
    {
      id: "pgr-stimulants-1",
      name: "Niva Neem",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1762797425/NIVA_NEEM_kdmbme.jpg",
      description:
        "Azadirachtin 0.3% (3000ppm) Insecticide\nNatural neem-based plant growth regulator.",
    },
  ],
  fungicides: [
    {
      id: "fungicides-1",
      name: "Azoteb",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1762797407/Azoteb_mqss3j.jpg",
      description:
        "Azoxystrobin 11% + Tebuconazole 18.3% SC\nEffective fungicide for disease control.",
    },
    {
      id: "fungicides-2",
      name: "Hexa-5",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1762797426/Hexa-5_xyrphc.jpg",
      description: "Hexaconazole 5% SC\nAdvanced fungicide formulation.",
    },
    {
      id: "fungicides-3",
      name: "Metaman",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1762797425/Metaman_ytlj33.jpg",
      description:
        "Metalaxyl 8% + Mancozeb 64% WP\nSystemic fungicide for plant protection.",
    },
    {
      id: "fungicides-4",
      name: "Safe-Sure",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1762797449/Safe-Sure_vciduw.jpg",
      description:
        "Carbendazim 12% + Mancozeb 63% W.P.\nSafe and effective fungicide.",
    },
    {
      id: "fungicides-5",
      name: "TebuSulf",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1762797437/TebuSulf_peniee.jpg",
      description:
        "Tebuconazole 10% + Sulphur 65% WG\nProfessional fungicide solution.",
    },
    {
      id: "fungicides-7",
      name: "PRODIFE",
      image:
        "https://res.cloudinary.com/dg8eoy4nt/image/upload/v1775064755/PRODIFE_eutko3.jpg",
      description:
        "Propiconazole 13.9% + Difenoconazole 13.9 w/w EC\nDual-action crop protection formula.",
    },
    {
      id: "fungicides-8",
      name: "NIVA TEBU-25.9",
      image:
        "https://res.cloudinary.com/dg8eoy4nt/image/upload/v1775064753/NIVA-TEMU-25.9_z3o7ev.jpg",
      description: "Tebuconazole 25.9% EC\nSystemic formulation for crop care.",
    },
    {
      id: "fungicides-9",
      name: "TEBU-TRIFO",
      image:
        "https://res.cloudinary.com/dg8eoy4nt/image/upload/v1775064755/TEBU-TRIFO_hxllmb.jpg",
      description:
        "Tebuconazole 50% + Trifloxystrobin 25 WG\nBroad-spectrum disease management support.",
    },
  ],
  herbicides: [
    {
      id: "herbicides-1",
      name: "Gly-Clear",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1762797420/Gly-Clear_amboyl.jpg",
      description: "Glyphosate 41% SL\nEffective herbicide for weed control.",
    },
    {
      id: "herbicides-2",
      name: "Glyphos-71",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1762797422/Glyphos-71_exrz1s.jpg",
      description:
        "Ammonium Salt of Glyphosate 71% SG\nHigh concentration glyphosate herbicide.",
    },
    {
      id: "herbicides-3",
      name: "Niva-Quizalo",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1762797442/Niva-Quizalo_hd0bkq.jpg",
      description:
        "Quizalofop Ethyl 10% EC\nAdvanced herbicide for selective weed control.",
    },
    {
      id: "herbicides-4",
      name: "NivaQuat",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1762797433/NivaQuat_zys8cf.jpg",
      description:
        "Paraquat Dichloride 24% SL\nQuaternary herbicide formulation.",
    },
    {
      id: "herbicides-5",
      name: "Gulfo-Shield",
      image:
        "https://res.cloudinary.com/dg8eoy4nt/image/upload/v1775065741/GLUFO-SHIELD_vdedba.jpg",
      description:
        "Glufosinate Ammonium 13.5% w/w SL\nEffective post-emergence herbicide for weed control.",
    },
    {
      id: "herbicides-6",
      name: "Niva-Neem",
      image:
        "https://res.cloudinary.com/dg8eoy4nt/image/upload/v1775065743/NIVA-NEEM_yyw1ev.jpg",
      description:
        "Neem Seeds Karnel Based\nNeem-based botanical formulation for crop care.",
    },
  ],
  "pgr-stimulants": [
    {
      id: "pgr-stimulants-2",
      name: "Niva Stick",
      image:
        "https://res.cloudinary.com/dg8eoy4nt/image/upload/v1775065745/NIVA-STICK_jen7hs.jpg",
      description: "Silicone based stimulant\nAdvanced plant growth stimulant.",
    },
    {
      id: "pgr-stimulants-3",
      name: "Raftar",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1762797434/Raftar_chtte7.jpg",
      description: "Plant growth regulator\nFast-acting growth stimulant.",
    },
    {
      id: "pgr-stimulants-4",
      name: "Raftar-extra-power",
      image:
        "https://res.cloudinary.com/dg8eoy4nt/image/upload/v1775065746/RAFTAR-EXTRA-POWER_t86wcj.jpg",
      description:
        "Gibberellic Acid 40% WSG\nPlant growth regulator for enhanced vigor.",
    },
    {
      id: "pgr-stimulants-5",
      name: "GATADAR",
      image:
        "https://res.cloudinary.com/dg8eoy4nt/image/upload/v1775065740/GHATADAR_ywo0lq.jpg",
      description:
        "Better Quality Better Yield\nLiquid fermented organic manure for all crops.",
    },
  ],
  "mix-micro-nutrients": [
    {
      id: "mix-micro-nutrients-1",
      name: "Niva Green",
      image:
        "https://res.cloudinary.com/dg8eoy4nt/image/upload/v1775065743/NIVA-GREEN_lf8sb5.jpg",
      description:
        "Complete micronutrient blend\nEssential trace elements for optimal plant growth.",
    },
    {
      id: "mix-micro-nutrients-2",
      name: "Mix Micro Premium",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1771137065/MIX_MICRO_ky3j33.jpg",
      description:
        "Complete Mix Micronutrient Formula\nBalanced blend of zinc, iron, manganese, boron, copper, and molybdenum.",
    },
    {
      id: "mix-micro-nutrients-3",
      name: "Mix Micro Grade 5",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1771137065/Grade_5_zvytss.jpg",
      description:
        "Mix Micro Grade 5\nPremium-grade micronutrient blend for superior crop performance.",
    },
    {
      id: "mix-micro-nutrients-4",
      name: "Mix Micro Grade 4",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1771137063/Grade_4_cd9n4h.jpg",
      description:
        "Mix Micro Grade 4\nBalanced micronutrient formulation for consistent growth.",
    },
    {
      id: "mix-micro-nutrients-5",
      name: "Mix Micro Grade 3",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1771137061/Grade_3_ucxhb2.jpg",
      description:
        "Mix Micro Grade 3\nReliable micronutrient support for healthier plants.",
    },
    {
      id: "mix-micro-nutrients-6",
      name: "Mix Micro Grade 2",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1771137061/Grade_2_yezb9f.jpg",
      description:
        "Mix Micro Grade 2\nEveryday micronutrient blend for steady crop development.",
    },
  ],
  "water-soluble-fertilizers": [
    {
      id: "water-soluble-fertilizers-1",
      name: "NPK 19:19:19",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1765988253/191919_fyj9d9.jpg",
      description:
        "Balanced NPK 19:19:19\nComplete nutrition for all growth stages.",
    },
    {
      id: "water-soluble-fertilizers-2",
      name: "NPK 20:20:20",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1765988252/202020_jncqnw.jpg",
      description:
        "High concentration NPK 20:20:20\nPremium balanced fertilizer for maximum yield.",
    },
    {
      id: "water-soluble-fertilizers-3",
      name: "NPK 13:00:45",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1765988252/130045_z65qrr.jpg",
      description:
        "High Phosphorus NPK 13:00:45\nSpecialized for root development and flowering.",
    },
    {
      id: "water-soluble-fertilizers-4",
      name: "NPK 00:52:34",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1765988251/005234_npn8rl.jpg",
      description:
        "Phosphorus Potassium 00:52:34\nIdeal for bloom enhancement and fruit development.",
    },
    {
      id: "water-soluble-fertilizers-5",
      name: "NPK 12:32:16",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1765988252/123216_e7b6wa.jpg",
      description:
        "High Phosphorus NPK 12:32:16\nPromotes root growth and flowering.",
    },
    {
      id: "water-soluble-fertilizers-6",
      name: "Niva Sulf - Sulfer 90% Powder",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1765988252/SULPHUR_90_elnzn6.jpg",
      description:
        "Sulfur 90% Powder\nEssential for chlorophyll synthesis and enzyme activation.",
    },
    {
      id: "water-soluble-fertilizers-7",
      name: "Boron 20% - Imported",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1765988251/BORON20_th8p7c.jpg",
      description:
        "Boron 20% - Imported\nHigh-quality boron for improved flowering and fruit set.",
    },
    {
      id: "water-soluble-fertilizers-8",
      name: "Magnesium Sulphate",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1771137064/MAGNACIUM_SULPHATE_ivmaqn.jpg",
      description:
        "Epsom Salt 16% MgO + 13% S\nEssential for chlorophyll synthesis and enzyme activation.",
    },
    {
      id: "water-soluble-fertilizers-9",
      name: "Bentonite Sulphate",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1771137064/BENTONITE_SULPH_dnnxad.jpg",
      description:
        "Bentonite Sulphate Premium\nImproves soil structure and nutrient retention.",
    },
    {
      id: "water-soluble-fertilizers-10",
      name: "Boronated Calcium",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1771137063/BORONATED_CALCIUM_pf4vin.jpg",
      description:
        "Boronated Calcium Nitrate\nCombined calcium and boron for comprehensive nutrition.",
    },
    {
      id: "water-soluble-fertilizers-11",
      name: "Calcium Nitrate",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1771137063/CALCIUM_NITRATE_kxs6tl.jpg",
      description:
        "Calcium Nitrate 15.5% N + 26% CaO\nEssential calcium and nitrogen for strong plant development.",
    },
    {
      id: "water-soluble-fertilizers-12",
      name: "Zinc Sulphate",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1771137062/ZINK_SULPH_gdwrij.jpg",
      description:
        "Zinc Sulphate 33%\nHigh-quality zinc for enzyme activation and growth.",
    },
    {
      id: "water-soluble-fertilizers-16",
      name: "Sulphur Granules",
      image:
        "https://res.cloudinary.com/dxhih7kwi/image/upload/v1771137061/SULPHUR_GRENULES_doiduy.jpg",
      description:
        "Sulfur Granules 100%\nPure sulfur for soil acidification and nutrient availability.",
    },
  ],
};

const buildProducts = (categoryKey) => PRODUCTS_DATA[categoryKey] || [];

const ProductGalleryPage = () => {
  const navigate = useNavigate();
  const { categoryKey = "insecticides" } = useParams();

  const products = buildProducts(categoryKey);

  const handleSelect = (key) => navigate(`/products/${key}`);

  // Ensure page starts at the top on navigation or when category changes
  useEffect(() => {
    // Jump to top when arriving on this page or switching category
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [categoryKey]);

  return (
    <Box
      sx={{
        py: { xs: 3, md: 5 },
        backgroundColor: (t) => t.palette.background.default,
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{ px: { xs: 1, sm: 2, md: 3, lg: 4, xl: 6 } }}
      >
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
                    <MenuItem key={c.key} value={c.key}>
                      {c.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            {/* Sidebar list hidden on mobile */}
            <Paper
              elevation={0}
              sx={{
                display: { xs: "none", md: "block" },
                p: 2,
                backgroundColor: (t) => t.palette.grey[100],
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                Categories
              </Typography>
              <List>
                {CATEGORY_LIST.map((c) => (
                  <ListItemButton
                    key={c.key}
                    selected={c.key === categoryKey}
                    onClick={() => handleSelect(c.key)}
                  >
                    <ListItemText primary={c.name} />
                  </ListItemButton>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Gallery on right */}
          <Grid item xs={12} md={9}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
              flexWrap="wrap"
              gap={1}
            >
              <Typography variant="h5" fontWeight={700}>
                {CATEGORY_LIST.find((c) => c.key === categoryKey)?.name}
              </Typography>
              <Button
                variant="outlined"
                startIcon={<InfoOutlined />}
                onClick={() => navigate(`/product-details/${categoryKey}`)}
                sx={{
                  minWidth: { xs: "100%", sm: "auto" },
                  mt: { xs: 1, sm: 0 },
                }}
              >
                Detailed Information
              </Button>
            </Box>
            <Grid
              container
              spacing={{ xs: 1, sm: 1.5, md: 2 }}
              sx={{ alignItems: "stretch" }}
            >
              {products.map((p) => (
                <Grid
                  key={p.id}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  sx={{ display: "flex" }}
                >
                  <Paper
                    elevation={1}
                    sx={{
                      overflow: "hidden",
                      borderRadius: 2,
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      height: "100%", // Let card height be determined by content
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        paddingBottom:
                          categoryKey === "water-soluble-fertilizers"
                            ? "125%" // 4:5 aspect ratio (2160×2700) - height = width * 1.25
                            : "150%", // 2:3 aspect ratio (3600×5400) - height = width * 1.5
                        backgroundColor: "#f5f5f5",
                        flexShrink: 0,
                      }}
                    >
                      <Box
                        component="img"
                        src={p.image}
                        alt={p.name}
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "contain", // Show full image without cropping
                          objectPosition: "center",
                          transition: "transform 0.3s ease",
                          "&:hover": {
                            transform: "scale(1.02)",
                          },
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        p: 2,
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        overflow: "hidden",
                        minHeight: "120px", // Ensure minimum content height
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        sx={{
                          mb: 1,
                          height: "3em", // Fixed height for title (approximately 2 lines)
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          lineHeight: 1.5,
                        }}
                      >
                        {p.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          flex: 1,
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 3, // Reduced to 3 lines to accommodate larger image
                          WebkitBoxOrient: "vertical",
                          whiteSpace: "pre-line",
                          lineHeight: 1.3,
                          fontSize: { xs: "0.85rem", sm: "0.875rem" },
                        }}
                      >
                        {p.description}
                      </Typography>
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
