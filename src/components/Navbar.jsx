import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        {/* Klik na naslov vodi na početnu stranicu */}
        <Typography
          variant="h6"
          component={Link}
          to="/" // Postavlja rutu na početnu stranicu
          sx={{
            flexGrow: 1,
            textDecoration: "none", // Uklanja podvlačenje teksta
            color: "inherit", // Koristi trenutnu boju teme
          }}
        >
          LearnDeutsch
        </Typography>
        {/* Ovdje možete dodati dodatne navigacijske linkove */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
