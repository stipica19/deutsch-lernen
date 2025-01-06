import React from "react";
import { Box, Typography, IconButton, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1976d2",
        color: "white",
        py: 0,
        px: 0,
        width: "100%", // Proteže se cijelom širinom
        mt: 0,
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {/* Navigacijski linkovi */}

        {/* Društvene mreže */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" align="center" gutterBottom>
            Folgen Sie uns
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <IconButton
              href="https://facebook.com"
              target="_blank"
              sx={{ color: "white" }}
            >
              <FacebookIcon />
            </IconButton>

            <IconButton
              href="https://instagram.com"
              target="_blank"
              sx={{ color: "white" }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              sx={{ color: "white" }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Copyright */}
        <Grid item xs={12}>
          <Typography align="center" sx={{ mt: 0, fontSize: "0.9rem" }}>
            © {new Date().getFullYear()} LearnDeutsch. Alle Rechte vorbehalten.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
