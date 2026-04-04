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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
  aspect-ratio: 4 / 3;
  background: #f0f0f0;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.4s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 55%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.72) 100%
    );
    pointer-events: none;
  }
`;

const GalleryLabel = styled.div`
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 14px;
  color: ${colors.white};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  z-index: 1;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);
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
      "Nivaan Chemicals operates a cutting-edge manufacturing facility spanning state-of-the-art production units. Our factory is equipped with modern technology and maintains the highest standards of safety and hygiene. We employ over 500 skilled professionals dedicated to delivering premium agricultural chemicals.",
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

const createEquipmentArtwork = (accentA, accentB, svgContent) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" role="img" aria-label="Industrial equipment illustration">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#081420" />
          <stop offset="100%" stop-color="#122638" />
        </linearGradient>
        <linearGradient id="metal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#d9e3ea" />
          <stop offset="100%" stop-color="#7c8b96" />
        </linearGradient>
        <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${accentA}" />
          <stop offset="100%" stop-color="${accentB}" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="20" flood-color="#000" flood-opacity="0.35" />
        </filter>
      </defs>
      <rect width="800" height="600" fill="url(#bg)" />
      <circle cx="110" cy="96" r="150" fill="${accentA}" opacity="0.12" />
      <circle cx="700" cy="500" r="180" fill="${accentB}" opacity="0.12" />
      <g opacity="0.18" stroke="#9fc4d9" stroke-width="2">
        <path d="M40 510H760" />
        <path d="M56 470H744" />
        <path d="M72 430H728" />
      </g>
      <g filter="url(#shadow)">
        ${svgContent}
      </g>
      <rect x="32" y="32" width="736" height="536" rx="32" fill="none" stroke="rgba(255,255,255,0.08)" />
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const machineryGallery = [
  {
    name: "FBD (Fluid Bed Dryer)",
    artwork: createEquipmentArtwork(
      "#5de0ff",
      "#1a7ab8",
      `
        <g transform="translate(170 96)">
          <rect x="110" y="82" width="140" height="230" rx="26" fill="url(#metal)" />
          <rect x="124" y="120" width="112" height="120" rx="16" fill="#0b1824" opacity="0.9" />
          <rect x="134" y="132" width="92" height="96" rx="12" fill="url(#accent)" opacity="0.8" />
          <rect x="145" y="40" width="70" height="60" rx="16" fill="url(#metal)" />
          <rect x="42" y="294" width="296" height="30" rx="15" fill="#0d1c28" />
          <circle cx="96" cy="322" r="18" fill="#d7ecf6" />
          <circle cx="264" cy="322" r="18" fill="#d7ecf6" />
          <path d="M0 342c44-24 85-24 129 0 43 24 88 24 131 0 44-24 85-24 129 0" fill="none" stroke="#5de0ff" stroke-width="10" stroke-linecap="round" />
          <path d="M23 370c28-14 55-14 83 0 28 14 54 14 81 0 28-14 55-14 83 0 27 14 53 14 80 0" fill="none" stroke="#ffffff" stroke-opacity="0.75" stroke-width="8" stroke-linecap="round" />
        </g>
      `,
    ),
  },
  {
    name: "Ribbon Blender",
    artwork: createEquipmentArtwork(
      "#ffbd59",
      "#ff7d4f",
      `
        <g transform="translate(120 150)">
          <rect x="70" y="90" width="420" height="120" rx="60" fill="url(#metal)" />
          <rect x="90" y="110" width="380" height="80" rx="40" fill="#0b1824" opacity="0.92" />
          <path d="M112 150c48-28 96-28 144 0 48 28 96 28 144 0 48-28 96-28 144 0" fill="none" stroke="url(#accent)" stroke-width="18" stroke-linecap="round" />
          <rect x="38" y="120" width="36" height="60" rx="18" fill="url(#metal)" />
          <rect x="490" y="120" width="36" height="60" rx="18" fill="url(#metal)" />
          <rect x="50" y="208" width="420" height="30" rx="15" fill="#0d1c28" />
          <circle cx="110" cy="240" r="14" fill="#f2f7fb" />
          <circle cx="410" cy="240" r="14" fill="#f2f7fb" />
          <path d="M210 90v-58m180 58v-58" stroke="#ffbd59" stroke-width="10" stroke-linecap="round" />
        </g>
      `,
    ),
  },
  {
    name: "Extruder",
    artwork: createEquipmentArtwork(
      "#8ddcff",
      "#4f7dff",
      `
        <g transform="translate(110 155)">
          <rect x="56" y="118" width="486" height="84" rx="42" fill="url(#metal)" />
          <rect x="86" y="134" width="330" height="52" rx="26" fill="#0b1824" opacity="0.92" />
          <rect x="392" y="128" width="106" height="64" rx="20" fill="url(#accent)" />
          <path d="M510 160h78" stroke="url(#accent)" stroke-width="18" stroke-linecap="round" />
          <path d="M580 160l44-26v52z" fill="url(#accent)" />
          <rect x="22" y="142" width="36" height="36" rx="10" fill="#d7ecf6" />
          <path d="M130 126c0 0 28 20 28 34s-28 34-28 34m74-68c0 0 28 20 28 34s-28 34-28 34m74-68c0 0 28 20 28 34s-28 34-28 34" fill="none" stroke="#8fd0ff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" opacity="0.95" />
        </g>
      `,
    ),
  },
  {
    name: "Reactor",
    artwork: createEquipmentArtwork(
      "#7bf0c4",
      "#2d9f88",
      `
        <g transform="translate(190 84)">
          <ellipse cx="160" cy="88" rx="118" ry="44" fill="url(#metal)" />
          <rect x="42" y="88" width="236" height="252" rx="110" fill="url(#metal)" />
          <ellipse cx="160" cy="340" rx="118" ry="44" fill="#7c8b96" />
          <ellipse cx="160" cy="86" rx="82" ry="26" fill="#0b1824" opacity="0.92" />
          <rect x="296" y="150" width="94" height="28" rx="14" fill="url(#accent)" />
          <path d="M362 164h76m-24-24l24 24-24 24" stroke="url(#accent)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
          <circle cx="328" cy="264" r="12" fill="#d7ecf6" />
          <circle cx="328" cy="302" r="12" fill="#d7ecf6" />
          <path d="M118 132c18 14 86 14 104 0" fill="none" stroke="#c8f6ea" stroke-width="8" stroke-linecap="round" opacity="0.9" />
        </g>
      `,
    ),
  },
  {
    name: "Bead Mill",
    artwork: createEquipmentArtwork(
      "#9a7bff",
      "#5f4dff",
      `
        <g transform="translate(180 106)">
          <rect x="126" y="44" width="138" height="300" rx="40" fill="url(#metal)" />
          <rect x="144" y="66" width="102" height="250" rx="30" fill="#0b1824" opacity="0.92" />
          <circle cx="195" cy="100" r="20" fill="url(#accent)" />
          <circle cx="195" cy="158" r="20" fill="#9fe2ff" opacity="0.92" />
          <circle cx="195" cy="216" r="20" fill="#d9e3ea" />
          <circle cx="195" cy="274" r="20" fill="#7bf0c4" opacity="0.92" />
          <rect x="104" y="334" width="182" height="22" rx="11" fill="#0d1c28" />
          <path d="M110 84h-48m48 56h-48m48 56h-48m48 56h-48m48 56h-48" stroke="url(#accent)" stroke-width="10" stroke-linecap="round" />
          <path d="M306 86c26 18 40 45 40 84s-14 66-40 84" fill="none" stroke="url(#accent)" stroke-width="12" stroke-linecap="round" />
        </g>
      `,
    ),
  },
  {
    name: "Pulveriser",
    artwork: createEquipmentArtwork(
      "#ffcc4d",
      "#e89b2c",
      `
        <g transform="translate(120 112)">
          <rect x="108" y="62" width="214" height="254" rx="24" fill="url(#metal)" />
          <rect x="118" y="74" width="194" height="200" rx="18" fill="#0b1824" opacity="0.92" />
          <path d="M150 116h128l-20 38h-88z" fill="url(#accent)" />
          <path d="M176 154l-18 56h44l-18 56" fill="none" stroke="url(#accent)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
          <rect x="80" y="286" width="280" height="22" rx="11" fill="#0d1c28" />
          <circle cx="126" cy="318" r="16" fill="#f2f7fb" />
          <circle cx="302" cy="318" r="16" fill="#f2f7fb" />
          <path d="M350 112c34 24 52 54 52 90s-18 66-52 90" fill="none" stroke="#ffcc4d" stroke-width="10" stroke-linecap="round" opacity="0.95" />
        </g>
      `,
    ),
  },
  {
    name: "Sand Mill",
    artwork: createEquipmentArtwork(
      "#f39d7d",
      "#b45c39",
      `
        <g transform="translate(166 82)">
          <rect x="142" y="60" width="126" height="286" rx="58" fill="url(#metal)" />
          <rect x="156" y="84" width="98" height="232" rx="44" fill="#0b1824" opacity="0.92" />
          <path d="M180 102h50" stroke="url(#accent)" stroke-width="12" stroke-linecap="round" />
          <path d="M180 150h50" stroke="#f4d0c1" stroke-width="12" stroke-linecap="round" />
          <path d="M180 198h50" stroke="#f4d0c1" stroke-width="12" stroke-linecap="round" />
          <path d="M180 246h50" stroke="#f4d0c1" stroke-width="12" stroke-linecap="round" />
          <circle cx="108" cy="180" r="18" fill="url(#accent)" />
          <circle cx="314" cy="180" r="18" fill="url(#accent)" />
          <rect x="126" y="354" width="158" height="20" rx="10" fill="#0d1c28" />
          <path d="M100 160c-34 18-52 44-52 76s18 58 52 76" fill="none" stroke="#f4d0c1" stroke-width="10" stroke-linecap="round" opacity="0.9" />
        </g>
      `,
    ),
  },
  {
    name: "Jet Mill",
    artwork: createEquipmentArtwork(
      "#6ed3ff",
      "#3a89ff",
      `
        <g transform="translate(126 82)">
          <circle cx="194" cy="188" r="106" fill="url(#metal)" />
          <circle cx="194" cy="188" r="72" fill="#0b1824" opacity="0.92" />
          <circle cx="194" cy="188" r="44" fill="url(#accent)" opacity="0.95" />
          <path d="M194 70v48M194 258v48M76 188h48M264 188h48" stroke="#d7ecf6" stroke-width="12" stroke-linecap="round" />
          <path d="M110 104l34 34M278 104l-34 34M110 272l34-34M278 272l-34-34" stroke="#6ed3ff" stroke-width="10" stroke-linecap="round" opacity="0.9" />
          <path d="M336 122c30 18 48 48 48 66s-18 48-48 66" fill="none" stroke="url(#accent)" stroke-width="10" stroke-linecap="round" />
          <rect x="160" y="316" width="68" height="24" rx="12" fill="#0d1c28" />
        </g>
      `,
    ),
  },
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
        <SectionTitle>Machinery & Equipment</SectionTitle>
        <GalleryGrid
          as={motion.div}
          initial="hidden"
          animate={galleryInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {machineryGallery.map((item, index) => (
            <GalleryItem
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <img src={item.artwork} alt={item.name} loading="lazy" />
              <GalleryLabel>{item.name}</GalleryLabel>
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
            title="Nivaan Chemicals Location"
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
