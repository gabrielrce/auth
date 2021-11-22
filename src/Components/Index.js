import React, { useState, useEffect } from "react";
import Signup from "./Signup";
import Login from "./Login";
import Navbar from "./Navbar";

function Index() {
  var [loginScreen, setLoginScreen] = useState(false);
  var [signupScreen, setSignupScreen] = useState(false);
  var [loginedScreen, setLoginedScreen] = useState(false);

  const afterSignup = (username) => {
    setSignupScreen(false);
    setLoginScreen(false);
    setLoginedScreen(true);
  };

  const afterLogout = () => {
    localStorage.removeItem("userlogined");
    setSignupScreen(true);
    setLoginScreen(false);
    setLoginedScreen(false);
  };

  useEffect(() => {
    var user = localStorage.getItem("userlogined");
    if (user !== null || user !== "") {
      setSignupScreen(true);
      setLoginScreen(false);
      setLoginedScreen(false);
    }
  }, []);

  return (
    <div className="Index">
      <Navbar />
      {signupScreen ? (
        <div>
          <Signup afterSignup={afterSignup} />
          <button
            onClick={() => {
              setSignupScreen(false);
              setLoginScreen(true);
            }}
          >
            do login
          </button>
        </div>
      ) : (
        ""
      )}

      {loginScreen ? (
        <div>
          <Login afterLogin={afterSignup} />
          <button
            onClick={() => {
              setSignupScreen(true);
              setLoginScreen(false);
            }}
          >
            do signup
          </button>
        </div>
      ) : (
        ""
      )}

      {loginedScreen ? (
        <div>
          <h1>{localStorage.getItem("userlogined")} logined</h1>
          <button onClick={afterLogout}>logout</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Index;
