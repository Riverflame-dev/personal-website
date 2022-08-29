import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Expo, Power3 } from "gsap";
import { AnimatePresence } from "framer-motion";

import { Routes, Route, Link, useLocation } from "react-router-dom";

import Home from "./pages/home/index";
import About from "./pages/about/index";
import {Contact} from "./pages/home/contact";

import NavBar from "./header/header";
import { Socialicons } from "./components/socialicons";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedCanvas from "./components/AnimatedCanvas";
import "./App.scss";

function App() {
  const location = useLocation();
  const [isRendered, setIsRendered] = useState(false);
  const toggle = () => {
    if (window.scrollY > 700) {
      setIsRendered(true);
    } else {
      setIsRendered(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggle);
    return () => {
      window.removeEventListener("scroll", toggle);
    };
  });

  return (
    <>
      <ScrollToTop />

      <motion.div className="App">
        <AnimatedCanvas />
        <NavBar />

        <AnimatePresence>
          <Routes location={location}>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/#contact" element={<Contact />} />
            <Route path="*" component={Home} />
          </Routes>
        </AnimatePresence>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{
            opacity: isRendered ? 1 : 0
          }}
          transition={{
            ease: Expo.easeOut,
            duration: 1
          }}
          href="#top"
          className="back-to-top"
          title="Back to Top"
        >
          <p className="back-to-top__image">↑</p>
        </motion.a>
        <Socialicons />
      </motion.div>
    </>
  );
}

export default App;
