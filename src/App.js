import Index from "./Components/Index";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import Launch from "./Components/Launch";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Posts from "./Components/Posts";
import PostView from "./Components/PostView";
import Navbar from "./Components/Navbar";

import NotFound from "./Components/NotFound";

import { Route, Routes, Switch, useLocation, Navigate } from "react-router-dom";

function RequireAuth({ children }) {
  var userLogined = JSON.parse(localStorage.getItem("userlogined"));
  let location = useLocation();
  const previousPath = location.state?.from || "/";

  return !userLogined ? (
    <Navigate to="/Index" state={{ from: previousPath }} />
  ) : (
    children
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Index" element={<Index />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route
          path="/posts/:id"
          element={
            // <RequireAuth> //don't know why if userLogined ===true, render stays blank
            <PostView />
            /* </RequireAuth> */
          }
        />
        <Route path="/postss/:id" element={<PostView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
