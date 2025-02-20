import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import CountUp from "react-countup";

const Numbers = () => {
  return (
    <Box sx={{ py: { xs: 5, sm: 8, lg: 10 }, backgroundColor: "#f7fafc" }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 2, sm: 3, lg: 4 } }}>
        <Box sx={{ maxWidth: "800px", mx: "auto", textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "2.5rem", lg: "3rem" },
              color: "black",
            }}
          >
            A legacy of quality and trust
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              fontSize: { xs: "1rem", sm: "1.2rem" },
              color: "#4a5568",
            }}
          >
            We’re driven by a commitment to innovation and quality in every
            product we create. With a dedication to supporting farmers and
            industries, our journey is reflected in the numbers that define our
            success.
          </Typography>
        </Box>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ mt: 5, textAlign: "center" }}
        >
          {/* First Grid Item */}
          <Grid item xs={12} sm={4}>
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "4rem", sm: "5rem" },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    background:
                      "linear-gradient(90deg, #D5006D 0%, #0E4C92 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  <CountUp start={0} end={2} duration={2} suffix="+" />
                </Box>
              </Typography>
              <Typography
                variant="h5"
                sx={{ mt: 2, fontWeight: "medium", color: "#1a202c" }}
              >
                Years in business
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5, color: "#a0aec0" }}>
                Creating the successful path
              </Typography>
            </Box>
          </Grid>

          {/* Second Grid Item */}
          <Grid item xs={12} sm={4}>
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "4rem", sm: "5rem" },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    background:
                      "linear-gradient(90deg, #D5006D 0%, #0E4C92 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  <CountUp start={0} end={171} duration={2.5} />
                </Box>
              </Typography>
              <Typography
                variant="h5"
                sx={{ mt: 2, fontWeight: "medium", color: "#1a202c" }}
              >
                Weedicide delivered
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5, color: "#a0aec0" }}>
                In last 2 years
              </Typography>
            </Box>
          </Grid>

          {/* Third Grid Item */}
          <Grid item xs={12} sm={4}>
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "4rem", sm: "5rem" },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    background:
                      "linear-gradient(90deg, #D5006D 0%, #0E4C92 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  <CountUp start={0} end={37} duration={2} suffix="+" />
                </Box>
              </Typography>
              <Typography
                variant="h5"
                sx={{ mt: 2, fontWeight: "medium", color: "#1a202c" }}
              >
                Team members
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5, color: "#a0aec0" }}>
                Working for our success
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Numbers;
