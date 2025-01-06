import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Box
      sx={{
        maxWidth: 900,
        margin: "auto",
        padding: 3,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 4 }}
      >
        Willkommen in der Deutschlern-App!
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",

              height: "100%", //ista visinadisplay: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 1,
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                align="center"
                sx={{ fontWeight: "bold" }}
              >
                Artikel erraten
              </Typography>
              <Typography
                variant="body2"
                align="center"
                sx={{ mt: 2, color: "text.secondary" }}
              >
                Testen Sie Ihr Wissen über die Artikel von Substantiven.
              </Typography>
              <Link
                to="/game/gender"
                style={{
                  textDecoration: "none",
                  display: "block",
                  marginTop: "16px",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="button"
                  sx={{
                    display: "inline-block",
                    padding: "10px 20px",
                    backgroundColor: "#1976d2",
                    color: "white",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    ":hover": {
                      backgroundColor: "#1565c0",
                    },
                  }}
                >
                  Starten
                </Typography>
              </Link>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              height: "100%", // Osigurava iste visine
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 1,
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                align="center"
                sx={{ fontWeight: "bold" }}
              >
                Mix
              </Typography>
              <Typography
                variant="body2"
                align="center"
                sx={{ mt: 2, color: "text.secondary" }}
              >
                Üben Sie den richtigen Satzbau.
              </Typography>
              <Link
                to="/game/sentences"
                style={{
                  textDecoration: "none",
                  display: "block",
                  marginTop: "16px",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="button"
                  sx={{
                    display: "inline-block",
                    padding: "10px 20px",
                    backgroundColor: "#1976d2",
                    color: "white",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    ":hover": {
                      backgroundColor: "#1565c0",
                    },
                  }}
                >
                  Starten
                </Typography>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
