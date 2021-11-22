import React from "react";
import Axios from "axios";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Post from "./Post";
import Button from "@mui/material/Button";

const PostView = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const from = location.state?.from || "/Index";

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await Axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        if (!isMounted) return null;
        setPost(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();

    return () => (isMounted = false);
  }, [id]);

  return loading ? (
    <h1>Loading...</h1>
  ) : error ? (
    console.log("Error")
  ) : (
    <div className="">
      <Post postData={post} />
      <Button
        onClick={() => {
          navigate(from);
        }}
        variant="contained"
      >
        Return
      </Button>
    </div>
  );
};

export default PostView;
