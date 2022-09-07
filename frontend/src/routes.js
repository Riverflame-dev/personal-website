/*
// React stuff
import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// Pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/home/contact";
//import { Projects } from "./pages/projects";
//import { Experience } from "./pages/experience";
//import { Life } from "./pages/life";
//import { Contact } from "./pages/contact";

// Components

import { AnimatePresence } from "framer-motion";
import { Socialicons } from "./components/socialicons";

const RoutingPath = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" component={<About />} />
        <Route path="/#contact" component={<Contact />} />
        <Route path="*" component={Home} />
      </Routes>
    </AnimatePresence>
  );
};

function AppRoutes() {
  return (
    <div className="s_c">
      <RoutingPath />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
*/
