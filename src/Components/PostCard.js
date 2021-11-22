import React from "react";
import PropTypes from "prop-types";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const PostCard = ({ postData }) => {
  const { id, title, body } = postData;
  const [params] = useSearchParams();

  const navigate = useNavigate();
  const location = useLocation();
  const page = params.toString();
  const previousPath = `${location.pathname}?${page}`;

  return (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button
          onClick={() =>
            navigate(`/posts/${id}`, {
              state: {
                from: `${previousPath}`,
              },
            })
          }
          size="small"
        >
          Learn More
        </Button>
      </CardActions>
    </>
  );
};

export default PostCard;
