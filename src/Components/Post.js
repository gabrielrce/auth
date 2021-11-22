import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

const Post = ({ postData }) => {
  const { title, body } = postData;
  return (
    <div className="">
      <Typography variant="h5" component="h4">
        {title}
      </Typography>
      <Typography variant="subtitle2" component="h6">
        {body}
      </Typography>
    </div>
  );
};

export default Post;
