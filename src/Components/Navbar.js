import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Launch from "./Launch";

function Navbar() {
  return (
    <nav>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Home
              </Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/posts"
              >
                Posts
              </Link>
            </Typography>

            <Button color="inherit" sx={{ mr: 10 }}>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/index"
              >
                Signup/Login
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  );
}

export default Navbar;
