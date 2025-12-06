import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Fade,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import GradeIcon from "@mui/icons-material/Grade";
import FactoryIcon from "@mui/icons-material/Factory";
import ScienceIcon from "@mui/icons-material/Science";

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  minHeight: "100vh",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}));

const HeroSection = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #0F5477 0%, #2F8EA3 50%, #4AC6D0 100%)",
  color: "white",
  padding: theme.spacing(4, 2),
  textAlign: "center",
  marginBottom: theme.spacing(4),
  borderRadius: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(6, 3),
    marginBottom: theme.spacing(5),
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(8, 0),
    marginBottom: theme.spacing(6),
  },
}));

const CertificationCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[10],
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 250,
  backgroundSize: "contain",
  backgroundPosition: "center",
  border: `2px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(1),
  margin: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    height: 300,
    margin: theme.spacing(1.5),
  },
  [theme.breakpoints.up("md")]: {
    height: 400,
    margin: theme.spacing(2),
  },
}));

const FeatureBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
  textAlign: "center",
  transition: "transform 0.2s ease-in-out",
  height: "100%",
  minHeight: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: theme.shadows[6],
  },
  [theme.breakpoints.up("sm")]: {
    minHeight: "220px",
    padding: theme.spacing(2.5),
  },
  [theme.breakpoints.up("md")]: {
    minHeight: "260px",
    padding: theme.spacing(3),
    justifyContent: "center",
  },
}));

const QualityCertificationPage = () => {
  const qualityFeatures = [
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 40, color: "#0F5477" }} />,
      title: "ISO 9001:2015 Certified",
      description:
        "Quality management systems ensuring consistent product excellence",
    },
    {
      icon: <ScienceIcon sx={{ fontSize: 40, color: "#2F8EA3" }} />,
      title: "Advanced Testing",
      description:
        "State-of-the-art analytical instruments for comprehensive quality assessment",
    },
    {
      icon: <FactoryIcon sx={{ fontSize: 40, color: "#4AC6D0" }} />,
      title: "Manufacturing Excellence",
      description:
        "Stringent quality control integrated at every production stage",
    },
    {
      icon: <GradeIcon sx={{ fontSize: 40, color: "#6DD4DE" }} />,
      title: "Industry Standards",
      description:
        "Consistently exceeding agrochemical industry quality benchmarks",
    },
  ];

  return (
    <StyledContainer maxWidth="lg">
      <Fade in timeout={1000}>
        <HeroSection>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            fontWeight="bold"
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
              lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 },
              px: 1,
            }}
          >
            Quality Assurance & Certifications
          </Typography>
          <Typography
            variant="h6"
            sx={{
              opacity: 0.9,
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
              lineHeight: { xs: 1.4, sm: 1.5, md: 1.6 },
              px: 2,
            }}
          >
            Building Trust Through Excellence and Certified Quality Standards
          </Typography>
        </HeroSection>
      </Fade>

      <Fade in timeout={1500}>
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            textAlign="center"
            color="primary.main"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
              px: 2,
            }}
          >
            Our Commitment to Quality
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.2rem" },
              lineHeight: { xs: 1.6, sm: 1.7, md: 1.8 },
              textAlign: { xs: "left", md: "justify" },
              mb: { xs: 3, md: 4 },
              px: { xs: 1, sm: 0 },
            }}
          >
            At Nivaan Chemical, delivering consistently superior agrochemical
            products is the cornerstone of our business philosophy. Quality
            assurance is seamlessly integrated throughout every stage of our
            production process—from meticulous sourcing of premium raw materials
            to the final manufacturing phase—through unwavering adherence to
            internationally recognized standardized protocols and best
            practices.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.2rem" },
              lineHeight: { xs: 1.6, sm: 1.7, md: 1.8 },
              textAlign: { xs: "left", md: "justify" },
              mb: { xs: 3, md: 4 },
              px: { xs: 1, sm: 0 },
            }}
          >
            Our state-of-the-art manufacturing facilities proudly maintain ISO
            9001:2015 certification, encompassing the development and production
            of an extensive range of high-performance agrochemical formulations.
            Our product portfolio includes advanced insecticides, selective
            herbicides, protective fungicides, specialized micro fertilizers,
            and innovative plant growth regulators, all manufactured to exceed
            industry standards.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.2rem" },
              lineHeight: { xs: 1.6, sm: 1.7, md: 1.8 },
              textAlign: { xs: "left", md: "justify" },
              mb: { xs: 3, md: 4 },
              px: { xs: 1, sm: 0 },
            }}
          >
            To ensure unwavering product integrity and performance, we implement
            comprehensive process and product auditing systems, maintain robust
            quality rating mechanisms, and enforce stringent operational
            parameters. Our commitment extends beyond compliance—we consistently
            strive to surpass industry benchmarks and deliver exceptional value
            to our customers.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.2rem" },
              lineHeight: { xs: 1.6, sm: 1.7, md: 1.8 },
              textAlign: { xs: "left", md: "justify" },
              mb: { xs: 3, md: 4 },
              px: { xs: 1, sm: 0 },
            }}
          >
            Our quality assurance laboratory is equipped with cutting-edge
            analytical instruments including UV spectrophotometers,
            high-performance liquid chromatographs (HPLC), gas chromatographs
            (GC), and precision moisture analyzers. Our expert technical team
            conducts extensive chemical and physical evaluations, including
            detailed assessments of pH levels, active ingredient assays,
            suspension characteristics, density measurements, viscosity
            analysis, wettability tests, acidity/alkalinity profiles, thermal
            stability, emulsion stability, and flash point determinations.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.2rem" },
              lineHeight: { xs: 1.6, sm: 1.7, md: 1.8 },
              textAlign: { xs: "left", md: "justify" },
              px: { xs: 1, sm: 0 },
            }}
          >
            Beyond maintaining our ISO certification, Nivaan Chemical actively
            invests in next-generation laboratory equipment and continuously
            expands our Research & Development capabilities to drive innovation
            and maintain our position as a quality leader. We are committed to
            fostering technological advancement while ensuring environmental
            responsibility and sustainable agricultural solutions for the
            future.
          </Typography>
        </Box>
      </Fade>

      <Fade in timeout={2000}>
        <Grid container spacing={4} sx={{ mb: 6, alignItems: "stretch" }}>
          {qualityFeatures.map((feature, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{ display: "flex" }}
            >
              <FeatureBox>
                <Box sx={{ mb: { xs: 1, md: 2 } }}>{feature.icon}</Box>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: "bold",
                    mb: { xs: 1, md: 2 },
                    minHeight: { xs: "auto", md: "48px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                    textAlign: "center",
                    lineHeight: 1.3,
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    lineHeight: { xs: 1.4, md: 1.6 },
                    flexGrow: 1,
                    display: "flex",
                    alignItems: { xs: "flex-start", md: "center" },
                    fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.875rem" },
                    textAlign: "center",
                  }}
                >
                  {feature.description}
                </Typography>
              </FeatureBox>
            </Grid>
          ))}
        </Grid>
      </Fade>

      <Fade in timeout={2500}>
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            textAlign="center"
            color="primary.main"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
              px: 2,
            }}
          >
            Our Certifications
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={8}>
              <CertificationCard>
                <CardContent
                  sx={{
                    textAlign: "center",
                    pb: 2,
                    px: { xs: 2, sm: 3, md: 4 },
                    pt: { xs: 2, md: 3 },
                  }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "center", mb: 2 }}
                  >
                    <Chip
                      label="ISO 9001:2015 Certified"
                      color="primary"
                      size="large"
                      icon={<VerifiedUserIcon />}
                      sx={{
                        fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                        padding: { xs: "4px", md: "8px" },
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    color="primary.main"
                    fontWeight="bold"
                    sx={{
                      fontSize: { xs: "1.3rem", sm: "1.4rem", md: "1.5rem" },
                    }}
                  >
                    Certificate of Registration
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
                      lineHeight: { xs: 1.5, md: 1.6 },
                    }}
                  >
                    This certification validates our commitment to maintaining
                    the highest quality management standards in the development
                    and manufacturing of agrochemical products.
                  </Typography>
                </CardContent>
                <StyledCardMedia
                  image="https://res.cloudinary.com/dxhih7kwi/image/upload/v1765025123/soft_NIVAAN_CHEMICAL_9001_page-0001_qq8aqy.jpg"
                  title="Nivaan Chemical ISO 9001:2015 Certificate"
                />
                <CardContent
                  sx={{
                    px: { xs: 2, sm: 3, md: 4 },
                    pb: { xs: 2, md: 3 },
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign="center"
                    sx={{
                      fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.875rem" },
                      lineHeight: { xs: 1.4, md: 1.5 },
                    }}
                  >
                    This certificate demonstrates our adherence to international
                    quality management standards and our dedication to
                    continuous improvement in all aspects of our operations.
                  </Typography>
                </CardContent>
              </CertificationCard>
            </Grid>
          </Grid>
        </Box>
      </Fade>

      <Fade in timeout={3000}>
        <Box
          sx={{
            background: "linear-gradient(135deg, #E3F2FD 0%, #E0F7F7 100%)",
            padding: { xs: 3, sm: 4, md: 4 },
            borderRadius: 2,
            textAlign: "center",
            mx: { xs: 1, sm: 0 },
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            color="primary.main"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "1.3rem", sm: "1.4rem", md: "1.5rem" },
            }}
          >
            Trust Through Transparency
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: { xs: 1.5, md: 1.6 },
              px: { xs: 1, sm: 2 },
            }}
          >
            Our certifications and quality commitments serve as a testament to
            our reliability and trustworthiness. When you choose Nivaan
            Chemical, you're partnering with a company that prioritizes
            excellence, safety, and sustainable agricultural solutions for a
            better tomorrow.
          </Typography>
        </Box>
      </Fade>
    </StyledContainer>
  );
};

export default QualityCertificationPage;
