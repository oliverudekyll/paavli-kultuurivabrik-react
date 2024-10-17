import React from "react";
import { motion, easeInOut, circInOut, backInOut } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export function Title() {
  const easeInOutQuart = [0.77, 0.0, 0.175, 1.0];
  const easeInOutCubic = [0.645, 0.045, 0.355, 1.0];

  return (
    <div className="hero__h1-container">
      <motion.div
        className="hero__h1-wrapper"
        initial={{
          y: "-100%",
          opacity: 0,
        }}
        animate={{
          y: "0%",
          opacity: 1,
        }}
        transition={{
          duration: 0,
        }}
      >
        <motion.div
          className="h1__logo-wrapper"
          initial={{
            y: "-100%",
            opacity: 0,
          }}
          animate={{
            y: "0%",
            opacity: 1,
          }}
          transition={{
            duration: 0.75,
            ease: easeInOutCubic,
          }}
        >
          <img
            className="h1__logo"
            src="../assets/images/paavli-logo.svg"
          ></img>
        </motion.div>
        <motion.h1
          initial={{
            width: "0%",
            opacity: 1,
          }}
          animate={{
            width: "100%",
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.75,
            ease: easeInOutQuart,
          }}
          className="hero__h1"
        >
          Paavli Kultuurivabrik
        </motion.h1>
      </motion.div>
    </div>
  );
}
