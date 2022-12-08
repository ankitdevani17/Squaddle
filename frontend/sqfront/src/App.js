import React, { useEffect, useState } from "react";
import Navb from "./Components/Navb";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginSignup from "./Screen/LoginSignup";
import Aboutus from "./Screen/Aboutus";
import Home from "./Screen/Home";
import Footer from "./Components/Footer";
import Profile from "./Screen/Profile";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Message from "./Screen/Message";
import { useSelector } from "react-redux";

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [listofmatchuser, setlistofmatchuser] = useState([]);
  
  return (
    <div>
      <>
        <BrowserRouter>
          <Navb />
          <Routes>
            <Route
              path="/"
              element={
                isLoggedIn ? (
                  <Home
                    listofmatchuser={listofmatchuser}
                    setlistofmatchuser={setlistofmatchuser}
                  />
                ) : (
                  <LoginSignup />
                )
              }
            />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route
              path="/profile"
              element={isLoggedIn ? <Profile /> : <LoginSignup />}
            />
            <Route
              path="/dm"
              element={
                isLoggedIn ? (
                  <Message listofmatchuser={listofmatchuser} />
                ) : (
                  <LoginSignup />
                )
              }
            />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    </div>
  );
};

export default App;
