import React, { useState, useEffect } from "react";
import Form from "../components/Form/Form";
import { motion } from "framer-motion";
import { animationOne } from "../components/Animation";
import Loader from "../components/Loader";

function ContactMe() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {" "}
      {loading ? (
        <Loader />
      ) : (
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={animationOne}
        >
          <Form />
        </motion.div>
      )}
    </>
  );
}

export default ContactMe;
