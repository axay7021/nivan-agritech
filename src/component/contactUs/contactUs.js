import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Alert,
  Snackbar,
} from "@mui/material";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import quoteBackground from "../../assets/images/resources/get_quote_bg.jpg";

const ContactUs = () => {
  console.log("✅ ContactUs component loaded");

  const [formData, setFormData] = useState({
    name: "Akshay",
    email: "patelalex532@gmail.com",
    phone: "9106725328",
    subject: "Test Email",
    message: "hi, this is the test mail 1",
  });

  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // EmailJS Configuration from environment variables
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  // WhatsApp Configuration
  const WHATSAPP_NUMBER = process.env.REACT_APP_WHATSAPP_NUMBER;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log("🔥 FORM SUBMITTED - handleSubmit called!");
    e.preventDefault();
    setLoading(true);
    console.log("Loading set to true");

    try {
      // Send email via EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: process.env.REACT_APP_TO_EMAIL,
      };

      console.log("Sending email with params:", templateParams);
      console.log("Service ID:", EMAILJS_SERVICE_ID);
      console.log("Template ID:", EMAILJS_TEMPLATE_ID);

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );

      console.log("EmailJS Response:", response);

      setNotification({
        open: true,
        message:
          "Your request has been sent successfully! We'll get back to you soon.",
        severity: "success",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      console.error("Error details:", error.text, error.status);
      setNotification({
        open: true,
        message:
          "Failed to send your request. Please try again or contact us via WhatsApp.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi, I'm interested in your products/services.\n\nName: ${formData.name || "Not provided"}\nEmail: ${formData.email || "Not provided"}\nPhone: ${formData.phone || "Not provided"}\nSubject: ${formData.subject || "Not provided"}\nMessage: ${formData.message || "Not provided"}`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <Box
      sx={{
        position: "relative",
        marginBottom: 20,
        paddingBottom: 100,
      }}
    >
      <Box sx={{ position: "absolute", top: "-120px", left: 0, right: 0 }}>
        "
        <Container
          sx={{
            borderRadius: 2,
            bgcolor: "white",
            boxShadow: "0px 20px 20px 0px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Grid
            container
            spacing={4}
            sx={{
              marginRight: 0,
              marginLeft: 0,
              display: "flex",
              flexWrap: "wrap",
              marginRight: "-15px",
              marginLeft: "-15px",
            }}
          >
            {/* Form Section */}
            <Grid item xs={12} md={8} sx={{ paddingRight: 0, paddingLeft: 0 }}>
              {/* <Box
                sx={{ p: 4, bgcolor: "white", borderRadius: 2, boxShadow: 3 }}
              > */}
              <Typography variant="h4" gutterBottom>
                Get a Free Quote
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Write Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send a Request"}
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="button"
                      variant="outlined"
                      color="success"
                      fullWidth
                      onClick={handleWhatsAppClick}
                      sx={{
                        borderColor: "#25D366",
                        color: "#25D366",
                        "&:hover": {
                          borderColor: "#128C7E",
                          backgroundColor: "rgba(37, 211, 102, 0.04)",
                        },
                      }}
                    >
                      📱 Send via WhatsApp
                    </Button>
                  </Grid>
                </Grid>
              </form>
              {/* </Box> */}
            </Grid>
            {/* Right Section */}
            <Grid item xs={12} md={4} sx={{ paddingRight: 0, paddingLeft: 0 }}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 2,
                  color: "white",
                  backgroundImage: "url(" + quoteBackground + ")",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  boxShadow: 3,
                }}
              >
                <Typography variant="h4" fontWeight="bold">
                  Looking for agriculture, organic & eco Services
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Notification Snackbar */}
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseNotification}
          severity={notification.severity}
          sx={{ width: "100%" }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactUs;
