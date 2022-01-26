import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/Home";
import ContactMe from "../pages/ContactMe";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { css } from "@emotion/react";

export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  const override = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100vh;
  `;

  return (
    <Router>
      {loading ? (
        <ClimbingBoxLoader
          color={"#000"}
          css={override}
          loading={loading}
          size={30}
        />
      ) : (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ContactMe" element={<ContactMe />} />
        </Routes>
      )}
    </Router>
  );
}
