import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div id="main">
        <div className="fof">
          <div>
            <h1>Error 404</h1>
            <h2>Not Found</h2>
          </div>
        </div>
      </div>
      <Button variant="contained">
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          Go back Home
        </Link>
      </Button>
    </>
  );
}

export default NotFound;
