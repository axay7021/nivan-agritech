import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  TextField,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import {
  Phone,
  Email,
  LocationOn,
  AccessTime,
  CheckCircle,
  ElectricBolt,
  Group,
} from "@mui/icons-material";

// ==================== Styled Components ====================
const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const HeroBanner = styled(motion.div)`
  background:
    linear-gradient(
      135deg,
      rgba(27, 94, 32, 0.85) 0%,
      rgba(46, 125, 50, 0.8) 50%,
      rgba(27, 94, 32, 0.9) 100%
    ),
    url("https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1920&q=80")
      center / cover no-repeat;
  padding: 120px 20px 100px;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 80px 20px 60px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(
        circle at 20% 50%,
        rgba(46, 125, 50, 0.2) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 80%,
        rgba(27, 94, 32, 0.2) 0%,
        transparent 50%
      );
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #2e7d32, #f9a825, #e65100);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 64px;
  font-weight: 700;
  margin: 0 0 20px 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 20px;
  font-weight: 300;
  margin: 0;
  opacity: 0.95;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Section = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: #1b5e20;
  text-align: center;
  margin: 0 0 50px 0;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 18px;
  color: #666;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CompanyDescription = styled.div`
  background: white;
  border-radius: 12px;
  padding: 60px 40px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  text-align: center;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const CompanyDescriptionText = styled.p`
  font-size: 18px;
  color: #333;
  line-height: 1.8;
  margin: 0 0 20px 0;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ContactInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease;
  border-top: 4px solid #2e7d32;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(46, 125, 50, 0.15);
  }
`;

const ContactCardIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0 auto 20px;
  font-size: 30px;
`;

const ContactCardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1b5e20;
  margin: 0 0 12px 0;
`;

const ContactCardContent = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0;
  word-break: break-word;
`;

const FormContainer = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const FormFieldWrapper = styled.div`
  margin-bottom: 24px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: #2e7d32;
    }
    &.Mui-focused fieldset {
      border-color: #2e7d32;
    }
  }
  .MuiInputBase-input {
    color: #333;
    font-size: 16px;

    &::placeholder {
      color: #999;
      opacity: 0.7;
    }
  }
  .MuiFormLabel-root {
    color: #666;

    &.Mui-focused {
      color: #1b5e20;
    }
  }
`;

const StyledSelect = styled(Select)`
  .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: #2e7d32;
    }
    &.Mui-focused fieldset {
      border-color: #2e7d32;
    }
  }
`;

const SubmitButton = styled(Button)`
  background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%) !important;
  color: white !important;
  padding: 12px 40px !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  border-radius: 8px !important;
  text-transform: none !important;
  cursor: pointer !important;
  transition: all 0.3s ease !important;
  min-height: 48px !important;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(46, 125, 50, 0.4) !important;
  }

  &:disabled {
    background: #ccc !important;
    cursor: not-allowed !important;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled(motion.div)`
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease;
  border-bottom: 4px solid #2e7d32;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(46, 125, 50, 0.15);
  }
`;

const BenefitIcon = styled.div`
  font-size: 48px;
  color: #2e7d32;
  margin-bottom: 20px;
`;

const BenefitTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #1b5e20;
  margin: 0 0 15px 0;
`;

const BenefitDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0;
  line-height: 1.6;
`;

const MapContainer = styled.div`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  height: 400px;

  @media (max-width: 768px) {
    height: 300px;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const ErrorText = styled(FormHelperText)`
  color: #d32f2f !important;
  font-size: 12px !important;
  margin-top: 4px !important;
`;

// ==================== Animations ====================
const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const scrollVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ==================== Validation Functions ====================
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validatePhone = (phone) => {
  const regex = /^[0-9]{10}$/;
  return regex.test(phone.replace(/\D/g, ""));
};

const validateName = (name) => {
  return name.trim().length >= 2;
};

const validateMessage = (message) => {
  return message.trim().length >= 10;
};

// ==================== Main Component ====================
const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    topic: "General Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!validateName(formData.name)) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Phone must be a valid 10-digit number";
    }

    if (!validateMessage(formData.message)) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSnackbar({
        open: true,
        message: "Please fix the errors in the form",
        severity: "error",
      });
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSnackbar({
        open: true,
        message:
          "Thank you! Your message has been sent successfully. We will contact you soon.",
        severity: "success",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        topic: "General Inquiry",
        message: "",
      });
    }, 1500);
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const horizontalVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <PageContainer>
      {/* Hero Banner */}
      <HeroBanner initial="hidden" animate="visible" variants={heroVariants}>
        <HeroContent>
          <HeroTitle variants={heroVariants}>Get In Touch</HeroTitle>
          <HeroSubtitle variants={heroVariants}>
            Have questions about our agricultural chemical products? Our
            dedicated support team is here to help you find the right solutions.
          </HeroSubtitle>
        </HeroContent>
      </HeroBanner>

      {/* Company Description Section */}
      <Section
        initial="hidden"
        whileInView="visible"
        variants={scrollVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
        <CompanyDescription
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          variants={scrollVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          <CompanyDescriptionText>
            <strong>Nivan Chemicals</strong> is a leading provider of
            high-quality agricultural chemical solutions for modern farming.
            With years of expertise in the industry, we are committed to
            supporting farmers and agricultural businesses with innovative
            products and exceptional customer service.
          </CompanyDescriptionText>
          <CompanyDescriptionText>
            Our mission is to provide reliable, effective, and sustainable
            agricultural solutions that help increase crop yields while
            maintaining environmental responsibility. We pride ourselves on our
            technical expertise and personalized approach to customer support.
          </CompanyDescriptionText>
        </CompanyDescription>
      </Section>

      {/* Contact Information & Form Section */}
      <Section
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
        <SectionTitle>Contact Information & Support</SectionTitle>

        <ContactContainer>
          {/* Left Column - Contact Info Cards */}
          <ContactInfoGrid
            as={motion.div}
            variants={horizontalVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Phone */}
            <ContactCard
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <ContactCardIcon>
                <Phone />
              </ContactCardIcon>
              <ContactCardTitle>Phone</ContactCardTitle>
              <ContactCardContent>+91 91067 25328</ContactCardContent>
            </ContactCard>

            {/* Email */}
            <ContactCard
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <ContactCardIcon>
                <Email />
              </ContactCardIcon>
              <ContactCardTitle>Email</ContactCardTitle>
              <ContactCardContent>nivaanchemical@gmail.com</ContactCardContent>
            </ContactCard>

            {/* Address */}
            <ContactCard
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <ContactCardIcon>
                <LocationOn />
              </ContactCardIcon>
              <ContactCardTitle>Address</ContactCardTitle>
              <ContactCardContent>
                Nivan Chemicals Production Facility, Agricultural Park, India
              </ContactCardContent>
            </ContactCard>

            {/* Hours */}
            <ContactCard
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <ContactCardIcon>
                <AccessTime />
              </ContactCardIcon>
              <ContactCardTitle>Operating Hours</ContactCardTitle>
              <ContactCardContent>
                Mon - Fri: 9:00 AM - 6:00 PM IST
              </ContactCardContent>
            </ContactCard>
          </ContactInfoGrid>

          {/* Right Column - Contact Form */}
          <FormContainer
            as={motion.div}
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <form onSubmit={handleSubmit}>
              {/* Name & Email Row */}
              <FormRow>
                <FormFieldWrapper>
                  <StyledTextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    error={!!errors.name}
                    variant="outlined"
                    size="medium"
                    disabled={loading}
                  />
                  {errors.name && <ErrorText>{errors.name}</ErrorText>}
                </FormFieldWrapper>
                <FormFieldWrapper>
                  <StyledTextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={!!errors.email}
                    variant="outlined"
                    size="medium"
                    disabled={loading}
                  />
                  {errors.email && <ErrorText>{errors.email}</ErrorText>}
                </FormFieldWrapper>
              </FormRow>

              {/* Phone & Company Row */}
              <FormRow>
                <FormFieldWrapper>
                  <StyledTextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    error={!!errors.phone}
                    placeholder="10-digit number"
                    variant="outlined"
                    size="medium"
                    disabled={loading}
                  />
                  {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
                </FormFieldWrapper>
                <FormFieldWrapper>
                  <StyledTextField
                    fullWidth
                    label="Company (Optional)"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    variant="outlined"
                    size="medium"
                    disabled={loading}
                  />
                </FormFieldWrapper>
              </FormRow>

              {/* Topic Dropdown */}
              <FormFieldWrapper>
                <StyledSelect
                  fullWidth
                  name="topic"
                  value={formData.topic}
                  onChange={handleInputChange}
                  disabled={loading}
                >
                  <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                  <MenuItem value="Product Information">
                    Product Information
                  </MenuItem>
                  <MenuItem value="Technical Support">
                    Technical Support
                  </MenuItem>
                  <MenuItem value="Orders">Orders</MenuItem>
                  <MenuItem value="Partnership Inquiry">
                    Partnership Inquiry
                  </MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </StyledSelect>
              </FormFieldWrapper>

              {/* Message */}
              <FormFieldWrapper>
                <StyledTextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  error={!!errors.message}
                  multiline
                  rows={5}
                  variant="outlined"
                  disabled={loading}
                />
                {errors.message && <ErrorText>{errors.message}</ErrorText>}
              </FormFieldWrapper>

              {/* Submit Button */}
              <FormFieldWrapper>
                <SubmitButton
                  fullWidth
                  type="submit"
                  disabled={loading}
                  variant="contained"
                  startIcon={
                    loading ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : null
                  }
                >
                  {loading ? "Sending..." : "Send Message"}
                </SubmitButton>
              </FormFieldWrapper>
            </form>
          </FormContainer>
        </ContactContainer>
      </Section>

      {/* Benefits Section */}
      <Section
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <SectionTitle>Why Choose Us</SectionTitle>
        <SectionSubtitle>
          We are committed to providing the best support and service to our
          customers
        </SectionSubtitle>

        <BenefitsGrid>
          {/* Quick Response */}
          <BenefitCard
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <BenefitIcon>
              <ElectricBolt />
            </BenefitIcon>
            <BenefitTitle>Quick Response</BenefitTitle>
            <BenefitDescription>
              We respond to inquiries within 24 hours, ensuring you get the
              support you need promptly.
            </BenefitDescription>
          </BenefitCard>

          {/* Expert Support */}
          <BenefitCard
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <BenefitIcon>
              <CheckCircle />
            </BenefitIcon>
            <BenefitTitle>Expert Support</BenefitTitle>
            <BenefitDescription>
              Our team of agricultural chemical experts provides technical
              guidance and personalized solutions.
            </BenefitDescription>
          </BenefitCard>

          {/* Multiple Channels */}
          <BenefitCard
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <BenefitIcon>
              <Group />
            </BenefitIcon>
            <BenefitTitle>Multiple Contact Channels</BenefitTitle>
            <BenefitDescription>
              Reach us via phone, email, or contact form. Choose the method that
              works best for you.
            </BenefitDescription>
          </BenefitCard>
        </BenefitsGrid>
      </Section>

      {/* Google Maps Section */}
      <Section
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        variants={scrollVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
        <SectionTitle>Our Location</SectionTitle>
        <MapContainer>
          <iframe
            title="Nivan Chemicals Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.894509!2d73.0046!3d21.5975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be023817bc17a87%3A0xb6038bb13848963c!2sNIVAAN%20CHEMICAL!5e0!3m2!1sen!2sin!4v1708022400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </MapContainer>
      </Section>

      {/* Snackbar for Messages */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </PageContainer>
  );
};

export default ContactUsPage;
