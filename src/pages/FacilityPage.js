import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  VerifiedUser,
  Engineering,
  Science,
  Psychology,
  Spa,
  PeopleAlt,
} from "@mui/icons-material";

// Color Scheme
const colors = {
  primary: "#0F5477",
  secondary: "#2F8EA3",
  teal: "#4AC6D0",
  light: "#F5F7FA",
  dark: "#1a1a1a",
  white: "#FFFFFF",
};

// Styled Components
const PageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: ${colors.white};
`;

const HeroSection = styled(motion.div)`
  width: 100%;
  height: 600px;
  background: linear-gradient(
    135deg,
    ${colors.primary} 0%,
    ${colors.secondary} 50%,
    ${colors.teal} 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 20% 50%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%
    );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  color: ${colors.white};
  z-index: 2;
  position: relative;
`;

const HeroTitle = styled.h1`
  font-size: 64px;
  font-weight: 800;
  margin: 0;
  margin-bottom: 20px;
  letter-spacing: -2px;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const HeroTagline = styled.p`
  font-size: 28px;
  font-weight: 300;
  margin: 0;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const OverviewSection = styled(motion.section)`
  padding: 80px 20px;
  background-color: ${colors.light};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  font-weight: 800;
  color: ${colors.primary};
  text-align: center;
  margin-bottom: 60px;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 30px;
  }
`;

const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;

  @media (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const OverviewCard = styled(motion.div)`
  background: ${colors.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border-left: 5px solid ${colors.teal};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
    transform: translateY(-5px);
  }

  h3 {
    color: ${colors.secondary};
    font-size: 20px;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p {
    color: #666;
    line-height: 1.8;
    font-size: 14px;
  }
`;

const FeaturesSection = styled.section`
  padding: 80px 20px;
  background-color: ${colors.white};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 20px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const FeatureCard = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(15, 84, 119, 0.05) 0%,
    rgba(74, 198, 208, 0.05) 100%
  );
  padding: 40px;
  border-radius: 16px;
  text-align: center;
  border: 1px solid rgba(74, 198, 208, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(15, 84, 119, 0.1) 0%,
      rgba(74, 198, 208, 0.1) 100%
    );
    border-color: ${colors.teal};
    transform: translateY(-10px);
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(
    135deg,
    ${colors.primary} 0%,
    ${colors.teal} 100%
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  transition: all 0.3s ease;

  svg {
    color: ${colors.white};
    font-size: 40px !important;
  }

  ${FeatureCard}:hover & {
    transform: scale(1.1);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.primary};
  margin: 0 0 10px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const FeatureDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin: 0;
`;

const GallerySection = styled.section`
  padding: 80px 20px;
  background-color: ${colors.light};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 20px;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  background: #f0f0f0;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.4s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const MapSection = styled.section`
  padding: 80px 20px;
  background-color: ${colors.white};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 20px;
  }
`;

const MapContainer = styled(motion.div)`
  margin-top: 40px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);

  iframe {
    width: 100%;
    height: 500px;
    border: none;

    @media (max-width: 768px) {
      height: 400px;
    }

    @media (max-width: 480px) {
      height: 300px;
    }
  }
`;

const CTASection = styled(motion.section)`
  padding: 60px 20px;
  background: linear-gradient(
    135deg,
    ${colors.primary} 0%,
    ${colors.secondary} 100%
  );
  text-align: center;
  color: ${colors.white};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const CTATitle = styled.h2`
  font-size: 40px;
  font-weight: 800;
  margin: 0 0 20px 0;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const CTAText = styled.p`
  font-size: 18px;
  margin: 0;
  opacity: 0.95;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const heroTitleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

const heroTaglineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.4,
      ease: "easeOut",
    },
  },
};

// Feature Data
const features = [
  {
    icon: <VerifiedUser />,
    title: "ISO Certified",
    description:
      "Certified with international quality standards ensuring product excellence and safety compliance.",
  },
  {
    icon: <Engineering />,
    title: "Advanced Equipment",
    description:
      "State-of-the-art machinery and technology for precision manufacturing and consistent quality.",
  },
  {
    icon: <Science />,
    title: "Quality Control Lab",
    description:
      "Comprehensive testing laboratory ensuring every product meets rigorous quality benchmarks.",
  },
  {
    icon: <Psychology />,
    title: "R&D Laboratory",
    description:
      "Dedicated innovation center developing next-generation agricultural chemical solutions.",
  },
  {
    icon: <Spa />,
    title: "Environmental Care",
    description:
      "Sustainable practices and eco-friendly processes throughout our manufacturing operations.",
  },
  {
    icon: <PeopleAlt />,
    title: "Expert Team",
    description:
      "Highly skilled professionals with decades of experience in agricultural chemistry.",
  },
];

// Overview Data
const overviewItems = [
  {
    title: "Facility Overview",
    description:
      "Nivan Chemicals operates a cutting-edge manufacturing facility spanning state-of-the-art production units. Our factory is equipped with modern technology and maintains the highest standards of safety and hygiene. We employ over 500 skilled professionals dedicated to delivering premium agricultural chemicals.",
  },
  {
    title: "Capabilities",
    description:
      "Our facility is capable of producing a wide range of pesticides, fertilizers, and specialty chemicals. With production capacity exceeding 50,000 MT annually, we serve agricultural markets across multiple regions. Our flexible manufacturing processes allow for custom formulations to meet specific crop and soil requirements.",
  },
  {
    title: "Quality Standards",
    description:
      "Every product undergoes rigorous testing and quality control procedures. We maintain certifications from renowned international bodies including ISO 9001, ISO 14001, and OHSAS 18001. Our QA laboratory operates 24/7 to ensure consistent product quality and regulatory compliance.",
  },
  {
    title: "Sustainability",
    description:
      "Committed to environmental responsibility, our facility incorporates waste management systems, water recycling units, and emission control technologies. We follow best practices in green chemistry and maintain zero-discharge policies. Our sustainability initiatives reduce environmental impact while enhancing operational efficiency.",
  },
];

// Gallery Images (using placeholder service)
const galleryImages = [
  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1576091160399-1c6dae14167f?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1581092918069-7160de900fcd?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=600&fit=crop",
];

// Main Component
const FacilityPage = () => {
  const overviewRef = React.useRef(null);
  const featuresRef = React.useRef(null);
  const galleryRef = React.useRef(null);
  const mapRef = React.useRef(null);

  const [overviewInView, setOverviewInView] = React.useState(false);
  const [featuresInView, setFeaturesInView] = React.useState(false);
  const [galleryInView, setGalleryInView] = React.useState(false);
  const [mapInView, setMapInView] = React.useState(false);

  // Observer for overview section
  React.useEffect(() => {
    const target = overviewRef.current;
    if (!target) {
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOverviewInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, []);

  // Observer for features section
  React.useEffect(() => {
    const target = featuresRef.current;
    if (!target) {
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFeaturesInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, []);

  // Observer for gallery section
  React.useEffect(() => {
    const target = galleryRef.current;
    if (!target) {
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGalleryInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, []);

  // Observer for map section
  React.useEffect(() => {
    const target = mapRef.current;
    if (!target) {
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, []);

  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection initial="hidden" animate="visible" variants={heroVariants}>
        <HeroContent>
          <motion.div variants={heroTitleVariants}>
            <HeroTitle>NIVAN CHEMICALS</HeroTitle>
          </motion.div>
          <motion.div variants={heroTaglineVariants}>
            <HeroTagline>State-of-the-Art Manufacturing</HeroTagline>
          </motion.div>
        </HeroContent>
      </HeroSection>

      {/* Overview Section */}
      <OverviewSection ref={overviewRef}>
        <SectionTitle>Our Facility</SectionTitle>
        <OverviewGrid
          as={motion.div}
          initial="hidden"
          animate={overviewInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {overviewItems.map((item, index) => (
            <OverviewCard key={index} variants={itemVariants}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </OverviewCard>
          ))}
        </OverviewGrid>
      </OverviewSection>

      {/* Features Section */}
      <FeaturesSection ref={featuresRef}>
        <SectionTitle>Our Strengths</SectionTitle>
        <FeaturesGrid
          as={motion.div}
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} variants={itemVariants}>
              <IconWrapper>{feature.icon}</IconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesSection>

      {/* Gallery Section */}
      <GallerySection ref={galleryRef}>
        <SectionTitle>Facility Gallery</SectionTitle>
        <GalleryGrid
          as={motion.div}
          initial="hidden"
          animate={galleryInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {galleryImages.map((image, index) => (
            <GalleryItem
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <img src={image} alt={`Gallery ${index + 1}`} loading="lazy" />
            </GalleryItem>
          ))}
        </GalleryGrid>
      </GallerySection>

      {/* Map Section */}
      <MapSection ref={mapRef}>
        <SectionTitle>Location</SectionTitle>
        <MapContainer
          initial="hidden"
          animate={mapInView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.894509!2d73.0046!3d21.5975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be023817bc17a87%3A0xb6038bb13848963c!2sNIVAAN%20CHEMICAL!5e0!3m2!1sen!2sin!4v1708022400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nivan Chemicals Location"
          />
        </MapContainer>
      </MapSection>

      {/* CTA Section */}
      <CTASection
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <CTATitle>Ready to Partner With Us?</CTATitle>
        <CTAText>
          Experience premium quality agricultural chemicals backed by decades of
          expertise and innovation.
        </CTAText>
      </CTASection>
    </PageContainer>
  );
};

export default FacilityPage;
