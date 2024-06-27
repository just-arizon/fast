import React from 'react';
import { AnimatePresence, motion } from "framer-motion";

const Signup = ({ handleChange }) => {
  return (
    <AnimatePresence>
      <motion.div className="flex flex-col items-center justify-center h-screen p-6"
        initial={{
          y: 100,
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          ease: "easeOut",
        }}>
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 mx-5">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign Up</h2>
          <div className="flex flex-col">
            <input
              type="text"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Name"
            />
            <input
              type="email"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Email address"
            />
            <input
              type="password"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Password"
            />
            <input
              type="password"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Confirm Password"
            />
            <div className="flex items-center justify-between flex-wrap">
              <label htmlFor="remember-me" className="text-sm text-gray-900 cursor-pointer">
                <input type="checkbox" id="remember-me" className="mr-2" />
                Remember me
              </label>
              <span className="text-sm text-blue-500 hover:underline mb-0.5">
                Forgot password?
              </span>
              <p className="text-gray-900 mt-4">
                Already have an account?{" "}
                <span
                  onClick={handleChange}
                  className="text-sm text-blue-500 -200 hover:underline mt-4 cursor-pointer"
                >
                  Log In
                </span>
              </p>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            >
              Sign Up
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Signup;
