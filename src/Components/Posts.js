import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams, Navigate } from "react-router-dom";
import PostCard from "./PostCard";
import Typography from "@mui/material/Typography";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";

const Posts = () => {
  // State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(+searchParams.get("page"));

  useEffect(() => {
    let isMounted = true;

    if (!currentPage) {
      setCurrentPage(1);
    }

    setSearchParams({ page: `${currentPage}` });
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await Axios.get(
          `https://jsonplaceholder.typicode.com/posts/?_page=${currentPage}`
        );
        if (!isMounted) return null;
        setPosts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
    return () => (isMounted = false);
  }, [currentPage, setSearchParams]);

  const validPage = () => currentPage >= 1 && currentPage <= 10;

  return validPage() ? (
    <>
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        console.log("error")
      ) : (
        <>
          <Navbar />

          {
            <Box
              sx={{ m: 1 }}
              display="flex"
              bgcolor="#e3dac9"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              {posts.map((post) => (
                <Card
                  sx={{ m: 1, minWidth: 500, maxWidth: 500 }}
                  variant="outlined"
                >
                  <PostCard postData={post} />
                </Card>
              ))}
            </Box>
          }
          {
            <div className="">
              <button
                className=""
                disabled={currentPage === 1}
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                }}
              >{`<< Prev`}</button>
              <p>{`Page ${currentPage}`}</p>
              <button
                className=""
                disabled={currentPage === 10}
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                }}
              >{` Next >>`}</button>
            </div>
          }
        </>
      )}
    </>
  ) : (
    <Navigate to="./" replace={true} />
  );
};

export default Posts;
