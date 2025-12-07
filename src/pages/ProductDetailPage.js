import React, { useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Alert,
  Divider,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import {
  Agriculture as AgricultureIcon,
  Grass as EcoIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  Science as ScienceIcon,
  Timeline as TimelineIcon,
  Security as SecurityIcon,
  BugReport as BugReportIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

// Product category data with detailed information
const PRODUCT_DETAILS = {
  insecticides: {
    title: "Insecticides",
    subtitle: "Comprehensive Pest Control Solutions",
    description:
      "Our insecticides are scientifically formulated to provide effective protection against a wide range of harmful insects that can damage crops and reduce agricultural productivity. These products are designed with precision to target specific pest species while minimizing impact on beneficial insects and the environment.",

    detailedDescription:
      "Insecticides play a crucial role in modern agriculture by protecting crops from destructive insects that can cause significant yield losses. Our range includes contact, systemic, and stomach poison insecticides, each designed for specific pest control scenarios. These products work through various modes of action, including disrupting the nervous system, inhibiting growth, or interfering with vital physiological processes of target pests.",

    examples: [
      {
        name: "Abbot 1.9 (Abamectin 1.9% EC)",
        description: "Effective against mites, thrips, and lepidopteran larvae",
        activeIngredient: "Abamectin",
      },
      {
        name: "Blast 505 (Chlorpyriphos 50% + Cypermethrin 5% EC)",
        description: "Broad-spectrum control of sucking and chewing pests",
        activeIngredient: "Chlorpyriphos + Cypermethrin",
      },
      {
        name: "Dahaad (Thiamethoxam 12.6% + Lambda Cyhalothrin 9.5% ZC)",
        description: "Dual-action formula for comprehensive pest management",
        activeIngredient: "Thiamethoxam + Lambda Cyhalothrin",
      },
    ],

    usage: [
      "Apply during early morning or late evening to minimize bee exposure",
      "Use appropriate concentration as per crop and pest infestation level",
      "Ensure uniform coverage of plant surfaces",
      "Rotate between different modes of action to prevent resistance",
      "Follow integrated pest management (IPM) practices",
    ],

    effects: [
      "Rapid knockdown of target pests within 24-48 hours",
      "Residual activity providing protection for 7-14 days",
      "Systemic action in plants for internal pest control",
      "Contact and stomach poison effects on insects",
      "Disruption of insect nervous system and growth",
    ],

    benefits: [
      "Increased crop yield and quality",
      "Protection of economic value of crops",
      "Reduced crop damage and loss",
      "Cost-effective pest management solution",
      "Enhanced food security and agricultural productivity",
      "Selective targeting of harmful pests",
      "Long-lasting protection with residual activity",
    ],

    cautions: [
      "Always read and follow label instructions carefully",
      "Wear protective equipment during application",
      "Do not spray during flowering to protect pollinators",
      "Maintain proper pre-harvest interval (PHI)",
      "Store in original containers away from children and pets",
      "Avoid contamination of water sources",
      "Do not apply during windy conditions",
      "Wash hands and exposed skin after handling",
    ],

    safetyMeasures: [
      "Use personal protective equipment (PPE)",
      "Ensure proper ventilation during indoor storage",
      "Keep away from food, feed, and drinking water",
      "Dispose of empty containers properly",
      "Have antidote information readily available",
    ],

    icon: <BugReportIcon fontSize="large" color="primary" />,
    color: "#e3f2fd",
  },

  fungicides: {
    title: "Fungicides",
    subtitle: "Advanced Disease Management Solutions",
    description:
      "Our fungicides provide comprehensive protection against fungal diseases that can severely impact crop health and yield. These products are formulated using advanced chemistry to prevent, control, and eradicate fungal pathogens while promoting plant health and resistance.",

    detailedDescription:
      "Fungal diseases are among the most destructive factors affecting agricultural productivity worldwide. Our fungicides work through multiple modes of action including disrupting cell wall synthesis, inhibiting respiration, and interfering with nucleic acid synthesis in pathogenic fungi. These products offer both preventive and curative properties, making them essential tools in disease management programs.",

    examples: [
      {
        name: "Azoteb (Azoxystrobin 11% + Tebuconazole 18.3% SC)",
        description: "Systemic fungicide for broad-spectrum disease control",
        activeIngredient: "Azoxystrobin + Tebuconazole",
      },
      {
        name: "Safe-Sure (Carbendazim 12% + Mancozeb 63% W.P.)",
        description: "Protective and curative action against multiple diseases",
        activeIngredient: "Carbendazim + Mancozeb",
      },
      {
        name: "TebuSulf (Tebuconazole 10% + Sulphur 65% WG)",
        description: "Combination fungicide with contact and systemic action",
        activeIngredient: "Tebuconazole + Sulphur",
      },
    ],

    usage: [
      "Apply at first sign of disease symptoms or as preventive measure",
      "Ensure thorough coverage of all plant parts",
      "Use during favorable weather conditions for fungal growth",
      "Alternate between different fungicide groups to prevent resistance",
      "Follow recommended spray intervals and dosage rates",
    ],

    effects: [
      "Prevention of spore germination and mycelial growth",
      "Curative action on early-stage infections",
      "Systemic movement providing internal protection",
      "Enhancement of plant natural defense mechanisms",
      "Reduction in disease severity and spread",
    ],

    benefits: [
      "Prevention of yield losses due to diseases",
      "Improved crop quality and marketability",
      "Extended shelf life of harvested produce",
      "Reduced risk of secondary infections",
      "Enhanced plant vigor and stress tolerance",
      "Cost-effective disease management",
      "Protection of investment in crop production",
    ],

    cautions: [
      "Follow resistance management strategies",
      "Avoid application during rain or high humidity",
      "Do not exceed recommended application rates",
      "Observe pre-harvest interval strictly",
      "Avoid drift to non-target crops and water bodies",
      "Use appropriate spray equipment and nozzles",
      "Monitor weather conditions before application",
      "Maintain spray records for traceability",
    ],

    safetyMeasures: [
      "Wear appropriate protective clothing",
      "Avoid inhalation of spray mist",
      "Wash contaminated clothing separately",
      "Seek medical attention if symptoms occur",
      "Store in cool, dry place away from heat sources",
    ],

    icon: <ScienceIcon fontSize="large" color="primary" />,
    color: "#f3e5f5",
  },

  herbicides: {
    title: "Herbicides",
    subtitle: "Effective Weed Management Solutions",
    description:
      "Our herbicides provide efficient and selective weed control, helping farmers maintain clean fields and maximize crop productivity. These products are designed to target unwanted vegetation while preserving crop plants and minimizing environmental impact.",

    detailedDescription:
      "Weeds compete with crops for essential resources including water, nutrients, light, and space, often reducing yields significantly. Our herbicide portfolio includes selective and non-selective options, pre-emergence and post-emergence formulations, each designed for specific weed species and crop systems. These products work through various mechanisms including inhibiting photosynthesis, disrupting cell division, and interfering with amino acid synthesis.",

    examples: [
      {
        name: "Gly-Clear (Glyphosate 41% SL)",
        description:
          "Non-selective systemic herbicide for broad-spectrum weed control",
        activeIngredient: "Glyphosate",
      },
      {
        name: "Niva-Quizalo (Quizalofop Ethyl 10% EC)",
        description: "Selective post-emergence herbicide for grass weeds",
        activeIngredient: "Quizalofop Ethyl",
      },
      {
        name: "NivaQuat (Paraquat Dichloride 24% SL)",
        description: "Fast-acting contact herbicide for quick burndown",
        activeIngredient: "Paraquat Dichloride",
      },
    ],

    usage: [
      "Apply during optimal weather conditions (calm, dry)",
      "Target weeds at appropriate growth stage",
      "Use correct spray volume and pressure",
      "Ensure uniform application coverage",
      "Consider crop safety and selectivity",
      "Follow tank mixing compatibility guidelines",
    ],

    effects: [
      "Rapid desiccation of weed foliage (contact herbicides)",
      "Systemic translocation to kill entire weed plant",
      "Prevention of weed seed germination (pre-emergence)",
      "Selective control without harming crop plants",
      "Long-term soil activity for extended control",
    ],

    benefits: [
      "Reduced competition for water and nutrients",
      "Improved crop establishment and growth",
      "Labor savings compared to manual weeding",
      "Enhanced harvest efficiency and quality",
      "Better utilization of fertilizers and irrigation",
      "Prevention of weed seed production",
      "Increased overall farm productivity",
    ],

    cautions: [
      "Avoid spray drift to sensitive crops",
      "Check for crop rotation restrictions",
      "Consider buffer zones near water sources",
      "Do not apply before rain to prevent runoff",
      "Be aware of herbicide resistance in weed populations",
      "Follow grazing and re-cropping intervals",
      "Use anti-drift adjuvants when necessary",
      "Calibrate equipment regularly for accurate application",
    ],

    safetyMeasures: [
      "Use drift-reducing nozzles and appropriate pressure",
      "Maintain equipment in good working condition",
      "Keep records of application dates and rates",
      "Train operators in proper application techniques",
      "Have emergency response procedures in place",
    ],

    icon: <EcoIcon fontSize="large" color="primary" />,
    color: "#e8f5e8",
  },

  "pgr-stimulants": {
    title: "Plant Growth Regulators & Crop Stimulants",
    subtitle: "Advanced Plant Development Enhancement",
    description:
      "Our plant growth regulators and stimulants are scientifically designed to optimize plant development, enhance crop vigor, and improve overall agricultural productivity. These products work at the cellular level to promote beneficial physiological processes in plants.",

    detailedDescription:
      "Plant growth regulators (PGRs) and stimulants are bioactive compounds that influence various aspects of plant growth and development. They can promote root development, enhance flowering and fruiting, improve stress tolerance, and optimize nutrient uptake. Our products include natural and synthetic compounds that work synergistically with plant hormones to achieve desired agricultural outcomes.",

    examples: [
      {
        name: "Niva Neem (Natural Neem-based)",
        description:
          "Organic plant growth promoter with pest deterrent properties",
        activeIngredient: "Neem seed kernel extract",
      },
      {
        name: "Niva Stick (Silicone-based)",
        description:
          "Advanced stimulant for improved nutrient uptake and stress tolerance",
        activeIngredient: "Silicone compounds",
      },
      {
        name: "Raftar (PGR)",
        description:
          "Fast-acting growth regulator for enhanced plant development",
        activeIngredient: "Growth promoting hormones",
      },
    ],

    usage: [
      "Apply during specific growth stages for maximum benefit",
      "Use recommended concentrations to avoid phytotoxicity",
      "Ensure proper mixing and uniform application",
      "Consider environmental conditions during application",
      "Integrate with regular crop management practices",
      "Monitor plant response and adjust timing if needed",
    ],

    effects: [
      "Enhanced root development and nutrient absorption",
      "Improved flower and fruit set",
      "Increased chlorophyll content and photosynthesis",
      "Better stress tolerance (drought, heat, cold)",
      "Accelerated growth and development",
      "Improved plant architecture and branching",
    ],

    benefits: [
      "Increased crop yield and quality",
      "Enhanced nutrient use efficiency",
      "Improved stress resistance and recovery",
      "Better fruit size, color, and shelf life",
      "Reduced input costs through efficiency gains",
      "Sustainable crop production practices",
      "Enhanced economic returns for farmers",
    ],

    cautions: [
      "Do not exceed recommended dosage rates",
      "Avoid application during extreme weather conditions",
      "Consider crop-specific sensitivity and timing",
      "Test on small areas before large-scale application",
      "Maintain proper storage conditions",
      "Keep away from children and unauthorized persons",
      "Follow organic certification requirements if applicable",
      "Monitor for any adverse plant reactions",
    ],

    safetyMeasures: [
      "Use clean application equipment",
      "Store in original containers with labels intact",
      "Follow good agricultural practices (GAP)",
      "Maintain application records",
      "Ensure proper disposal of containers",
    ],

    icon: <AgricultureIcon fontSize="large" color="primary" />,
    color: "#fff3e0",
  },

  "mix-micro-nutrients": {
    title: "Mix Micro Nutrients",
    subtitle: "Essential Trace Elements for Optimal Plant Growth",
    description:
      "Our micronutrient formulations provide plants with essential trace elements required for optimal growth, development, and productivity. These products are scientifically designed to correct micronutrient deficiencies and enhance overall plant health and vigor.",

    detailedDescription:
      "Micronutrients, though required in small quantities, play crucial roles in plant metabolism, enzyme activation, and physiological processes. Deficiencies can significantly impact crop yield and quality. Our micronutrient products are formulated using chelated forms for better absorption and availability, ensuring plants receive the essential elements they need for optimal performance.",

    examples: [
      {
        name: "Niva Multi-Mix (Complete Micronutrient Blend)",
        description:
          "Comprehensive micronutrient formula with all essential trace elements",
        activeIngredient: "Zn, Fe, Mn, Cu, B, Mo in chelated form",
      },
      {
        name: "Zinc Supreme (Zinc Sulphate 33% + EDTA Chelated)",
        description:
          "High-quality zinc supplementation for improved enzyme function",
        activeIngredient: "Zinc Sulphate + EDTA",
      },
      {
        name: "Iron Power (Chelated Iron 12%)",
        description: "Prevents and corrects iron chlorosis in crops",
        activeIngredient: "EDTA Chelated Iron",
      },
    ],

    usage: [
      "Apply during active growth periods for maximum uptake",
      "Use soil application or foliar spray as recommended",
      "Ensure adequate soil moisture for better absorption",
      "Monitor plant tissue analysis for nutrient status",
      "Apply based on crop requirements and deficiency symptoms",
      "Consider soil pH for optimal nutrient availability",
    ],

    effects: [
      "Enhanced chlorophyll synthesis and photosynthesis",
      "Improved enzyme activation and metabolism",
      "Better root development and nutrient uptake",
      "Enhanced disease resistance and stress tolerance",
      "Increased protein synthesis and quality",
    ],

    benefits: [
      "Correction of micronutrient deficiencies",
      "Improved crop yield and quality parameters",
      "Enhanced plant vigor and stress tolerance",
      "Better seed set and fruit development",
      "Increased nutritional value of produce",
      "Reduced susceptibility to diseases",
      "Optimal utilization of macronutrients",
    ],

    cautions: [
      "Avoid over-application to prevent toxicity",
      "Test soil and plant tissue before application",
      "Consider interactions with other nutrients",
      "Apply during appropriate weather conditions",
      "Store in dry conditions to prevent caking",
      "Use recommended application rates and timing",
      "Monitor for signs of nutrient imbalance",
      "Ensure compatibility when tank mixing",
    ],

    safetyMeasures: [
      "Wear protective equipment during handling",
      "Store away from moisture and direct sunlight",
      "Keep containers properly sealed",
      "Follow good agricultural practices",
      "Dispose of empty containers responsibly",
    ],

    icon: <ScienceIcon fontSize="large" color="primary" />,
    color: "#e1f5fe",
  },

  "water-soluble-fertilizers": {
    title: "Water Soluble Fertilizers",
    subtitle: "High-Efficiency Nutrient Delivery Systems",
    description:
      "Our water-soluble fertilizers provide rapid and efficient nutrient delivery to plants through irrigation systems and foliar applications. These premium formulations ensure maximum nutrient uptake and utilization for enhanced crop productivity.",

    detailedDescription:
      "Water-soluble fertilizers offer superior nutrient availability and uptake efficiency compared to conventional fertilizers. They are ideal for fertigation systems, foliar feeding, and precision agriculture applications. Our products are formulated with high-quality, pure ingredients that dissolve completely in water, providing uniform nutrient distribution and minimizing salt accumulation.",

    examples: [
      {
        name: "NPK 19:19:19 (Balanced Complete Nutrition)",
        description: "Balanced NPK formula suitable for all growth stages",
        activeIngredient: "Nitrogen 19%, Phosphorus 19%, Potassium 19%",
      },
      {
        name: "NPK 13:40:13 (High Phosphorus)",
        description:
          "Specialized for root development and flowering initiation",
        activeIngredient: "Nitrogen 13%, Phosphorus 40%, Potassium 13%",
      },
      {
        name: "Calcium Nitrate (15.5:0:0 + 26.5% Ca)",
        description: "Prevents calcium deficiency and strengthens cell walls",
        activeIngredient: "Calcium Nitrate with 26.5% Calcium",
      },
    ],

    usage: [
      "Dissolve completely in clean water before application",
      "Apply through drip irrigation or foliar spray",
      "Use during cooler parts of the day for foliar application",
      "Ensure proper pH of spray solution (5.5-6.5)",
      "Apply at regular intervals based on crop requirements",
      "Monitor electrical conductivity of nutrient solution",
    ],

    effects: [
      "Rapid nutrient absorption and translocation",
      "Immediate availability of nutrients to plants",
      "Enhanced photosynthesis and metabolic activities",
      "Improved root development and shoot growth",
      "Better flowering, fruit set, and quality",
    ],

    benefits: [
      "100% water solubility for complete utilization",
      "Reduced nutrient losses and environmental impact",
      "Precise nutrient application and control",
      "Compatible with modern irrigation systems",
      "Enhanced nutrient use efficiency",
      "Faster plant response and recovery",
      "Improved crop quality and shelf life",
      "Reduced labor costs compared to solid fertilizers",
    ],

    cautions: [
      "Ensure complete dissolution to avoid clogging",
      "Check water quality and pH before mixing",
      "Avoid mixing incompatible fertilizers",
      "Do not apply during hot sunny conditions (foliar)",
      "Store in dry conditions to prevent caking",
      "Use within recommended timeframe after mixing",
      "Clean application equipment after use",
      "Monitor for salt accumulation in soil",
    ],

    safetyMeasures: [
      "Use clean water for mixing solutions",
      "Store in original packaging with labels",
      "Keep away from moisture and humidity",
      "Maintain proper storage temperature",
      "Follow calibration procedures for equipment",
    ],

    icon: <AgricultureIcon fontSize="large" color="primary" />,
    color: "#f1f8e9",
  },
};

const ProductDetailPage = () => {
  const { categoryKey } = useParams();
  const navigate = useNavigate();

  const productDetail = PRODUCT_DETAILS[categoryKey];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [categoryKey]);

  if (!productDetail) {
    return (
      <Container>
        <Typography variant="h4" align="center" sx={{ mt: 4 }}>
          Product category not found
        </Typography>
      </Container>
    );
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <Box sx={{ py: { xs: 2, md: 5 }, backgroundColor: "#f8f9fa" }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Hero Section */}
        <motion.div {...fadeIn}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, sm: 3, md: 6 },
              mb: { xs: 2, md: 4 },
              backgroundColor: productDetail.color,
              borderRadius: { xs: 2, md: 3 },
            }}
          >
            <Box
              display="flex"
              alignItems={{ xs: "flex-start", sm: "center" }}
              flexDirection={{ xs: "column", sm: "row" }}
              mb={2}
            >
              <Box sx={{ mb: { xs: 1, sm: 0 } }}>{productDetail.icon}</Box>
              <Box ml={{ xs: 0, sm: 2 }}>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  gutterBottom
                  sx={{
                    fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
                  }}
                >
                  {productDetail.title}
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                  }}
                >
                  {productDetail.subtitle}
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.7,
              }}
            >
              {productDetail.description}
            </Typography>
          </Paper>
        </motion.div>

        {/* Detailed Description */}
        <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
          <Card elevation={2} sx={{ mb: { xs: 2, md: 4 }, borderRadius: 2 }}>
            <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                sx={{
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" },
                }}
              >
                Detailed Overview
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                  lineHeight: 1.7,
                }}
              >
                {productDetail.detailedDescription}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>

        <Grid container spacing={{ xs: 2, md: 4 }}>
          {/* Examples Section */}
          <Grid item xs={12} md={6}>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <Card elevation={2} sx={{ height: "100%", borderRadius: 2 }}>
                <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                  <Box display="flex" alignItems="center" mb={3}>
                    <CheckCircleIcon color="success" sx={{ mr: 1 }} />
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      sx={{
                        fontSize: { xs: "1.25rem", sm: "1.5rem" },
                      }}
                    >
                      Product Examples
                    </Typography>
                  </Box>
                  {productDetail.examples.map((example, index) => (
                    <Box key={index} mb={2}>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        color="primary"
                      >
                        {example.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        Active Ingredient: {example.activeIngredient}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 2 }}>
                        {example.description}
                      </Typography>
                      {index < productDetail.examples.length - 1 && <Divider />}
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Usage Guidelines */}
          <Grid item xs={12} md={6}>
            <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
              <Card elevation={2} sx={{ height: "100%", borderRadius: 2 }}>
                <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                  <Box display="flex" alignItems="center" mb={3}>
                    <TimelineIcon color="primary" sx={{ mr: 1 }} />
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      sx={{
                        fontSize: { xs: "1.25rem", sm: "1.5rem" },
                      }}
                    >
                      Usage Guidelines
                    </Typography>
                  </Box>
                  <List dense>
                    {productDetail.usage.map((item, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon>
                          <CheckCircleIcon color="success" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary={item}
                          primaryTypographyProps={{
                            fontSize: { xs: "0.875rem", sm: "1rem" },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Effects & Benefits */}
          <Grid item xs={12} md={6}>
            <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
              <Card elevation={2} sx={{ height: "100%", borderRadius: 2 }}>
                <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                  <Box display="flex" alignItems="center" mb={3}>
                    <EcoIcon color="success" sx={{ mr: 1 }} />
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      sx={{
                        fontSize: { xs: "1.25rem", sm: "1.5rem" },
                      }}
                    >
                      Effects & Benefits
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    color="primary"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.125rem" },
                    }}
                  >
                    Primary Effects:
                  </Typography>
                  <List dense sx={{ mb: 2 }}>
                    {productDetail.effects.map((effect, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon>
                          <CheckCircleIcon color="info" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={effect} />
                      </ListItem>
                    ))}
                  </List>

                  <Typography
                    variant="h6"
                    color="success.main"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.125rem" },
                    }}
                  >
                    Key Benefits:
                  </Typography>
                  <List dense>
                    {productDetail.benefits.map((benefit, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon>
                          <CheckCircleIcon color="success" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={benefit} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Safety & Cautions */}
          <Grid item xs={12} md={6}>
            <motion.div {...fadeIn} transition={{ delay: 0.5 }}>
              <Card elevation={2} sx={{ height: "100%", borderRadius: 2 }}>
                <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                  <Box display="flex" alignItems="center" mb={3}>
                    <WarningIcon color="warning" sx={{ mr: 1 }} />
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      sx={{
                        fontSize: { xs: "1.25rem", sm: "1.5rem" },
                      }}
                    >
                      Safety & Cautions
                    </Typography>
                  </Box>

                  <Alert
                    severity="warning"
                    sx={{ mb: 3, fontSize: { xs: "0.875rem", sm: "1rem" } }}
                  >
                    Always follow label instructions and safety guidelines
                  </Alert>

                  <Typography
                    variant="h6"
                    color="warning.main"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.125rem" },
                    }}
                  >
                    Important Cautions:
                  </Typography>
                  <List dense sx={{ mb: 2 }}>
                    {productDetail.cautions.map((caution, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon>
                          <WarningIcon color="warning" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={caution} />
                      </ListItem>
                    ))}
                  </List>

                  <Typography
                    variant="h6"
                    color="error.main"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.125rem" },
                    }}
                  >
                    Safety Measures:
                  </Typography>
                  <List dense>
                    {productDetail.safetyMeasures.map((measure, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon>
                          <SecurityIcon color="error" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={measure} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        {/* Navigation Actions */}
        <motion.div {...fadeIn} transition={{ delay: 0.6 }}>
          <Box
            display="flex"
            justifyContent="center"
            gap={{ xs: 1, sm: 2 }}
            mt={{ xs: 3, md: 4 }}
            flexWrap="wrap"
            px={{ xs: 1, sm: 0 }}
          >
            <Chip
              label="← Products We Offer"
              clickable
              color="primary"
              variant="outlined"
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  const element = document.getElementById(
                    "section-products-overview"
                  );
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }, 100);
              }}
              sx={{
                px: { xs: 1, sm: 2 },
                py: 1,
                fontSize: { xs: "0.875rem", sm: "1rem" },
                minWidth: { xs: "140px", sm: "auto" },
              }}
            />
            <Chip
              label="View All Products"
              clickable
              color="secondary"
              variant="outlined"
              onClick={() => navigate(`/products/${categoryKey}`)}
              sx={{
                px: { xs: 1, sm: 2 },
                py: 1,
                fontSize: { xs: "0.875rem", sm: "1rem" },
                minWidth: { xs: "140px", sm: "auto" },
              }}
            />
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProductDetailPage;
