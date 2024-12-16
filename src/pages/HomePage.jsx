import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Grid container spacing={3} sx={{ mt: 4, px: 2 }}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          Willkommen in der Deutschlern-App!
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" align="center">
              Artikel erraten
            </Typography>
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
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
                  padding: "8px 16px",
                  backgroundColor: "primary.main",
                  color: "white",
                  borderRadius: "4px",
                  ":hover": {
                    backgroundColor: "primary.dark",
                  },
                }}
              >
                Starten
              </Typography>
            </Link>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" align="center">
              Lückensätze (deaktiviert)
            </Typography>
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Üben Sie den richtigen Satzbau. (Derzeit nicht verfügbar)
            </Typography>
            <div
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
                  padding: "8px 16px",
                  backgroundColor: "grey",
                  color: "white",
                  borderRadius: "4px",
                  cursor: "not-allowed",
                }}
              >
                Deaktiviert
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" align="center">
              Possessivpronomen (deaktiviert)
            </Typography>
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Üben Sie die korrekte Verwendung von Possessivpronomen. (Derzeit
              nicht verfügbar)
            </Typography>
            <div
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
                  padding: "8px 16px",
                  backgroundColor: "grey",
                  color: "white",
                  borderRadius: "4px",
                  cursor: "not-allowed",
                }}
              >
                Deaktiviert
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default HomePage;
