import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
import Landscape from "./Landscape";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Box sx={{ width: "100%" }}>
        <Typography variant="h4" component="div" gutterBottom>
          Welcome to the GabrielRCE BlogTravel App
        </Typography>
        <Landscape />
      </Box>
    </>
  );
}

export default LandingPage;
