import {
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
        "<Container sx={{ borderRadius: 2, bgcolor: "white", boxShadow: "0px 20px 20px 0px rgba(0, 0, 0, 0.05)"}}>
          <Grid container spacing={4} sx={{ marginRight: 0, marginLeft: 0, display: "flex", flexWrap: "wrap", marginRight: "-15px", marginLeft: "-15px" }}>
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
                      >
                        Send a Request
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
                  backgroundImage:
                    "url(/assets/images/resources/get_quote_bg.jpg)",
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
    </Box>
  );
};

export default ContactUs;
