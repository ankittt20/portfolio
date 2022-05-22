import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import ContactMe from "./pages/ContactMe";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  let location = useLocation();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/ContactMe" element={<ContactMe />} />
          </Routes>
        </AnimatePresence>
      )}
    </>
  );
}
