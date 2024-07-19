import React, { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import Signin from '../component/Signin';
import Signup from './Signup';

const Authentication = () => {
  const [active, setActive] = useState("signin");

  const handleChange = () => {
    setActive(active === "signin" ? "signup" : "signin");
  };

  return (
    <AnimatePresence>
      <motion.div className="relative isolate overflow-hidden min-h-screen">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=7000&sat=-50&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        {active === "signin" ? <Signin handleChange={handleChange} /> : <Signup handleChange={handleChange} />}
      </motion.div>
    </AnimatePresence>
  );
};

export default Authentication;
