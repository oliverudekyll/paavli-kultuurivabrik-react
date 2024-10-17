import React from "react";

import {
  useAnimate,
  stagger,
  motion,
  animate,
  AnimatePresence,
} from "framer-motion";

import Button from "./Button.js";

const navItems = [
  { value: "Programm", href: "#", ariaLabel: "" },
  { value: "Galerii", href: "#", ariaLabel: "" },
  { value: "Ligipääsetavus", href: "#", ariaLabel: "" },
  { value: "Rent", href: "#", ariaLabel: "" },
  { value: "Saun", href: "#", ariaLabel: "" },
  { value: "Turvalisus", href: "#", ariaLabel: "" },
  { value: "Ajalugu", href: "#", ariaLabel: "" },
  { value: "Väärtused", href: "#", ariaLabel: "" },
  { value: "Paavli.CLUB & .LIVE", href: "#", ariaLabel: "" },
  { value: "Dreamscape", href: "#", ariaLabel: "" },
  { value: "Damn.Loud", href: "#", ariaLabel: "" },
  { value: "Liveurope", href: "#", ariaLabel: "" },
  { value: "Partnerid", href: "#", ariaLabel: "" },
];

const MotionButton = motion(
  React.forwardRef((props, ref) => <Button {...props} ref={ref} />)
);

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Increased from 0.1 to 0.2
      delayChildren: 0.3, // Added a delay before children start animating
    },
  },
};

const itemVariants = {
  hidden: { y: "100%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1, // Added duration to make each animation more noticeable
    },
  },
};

function NavBar() {
  console.log("Rendering NavBar"); // Debug log

  return (
    <AnimatePresence>
      <motion.nav
        key="nav"
        className="footer__nav-bar"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {navItems.map(({ value, href, ariaLabel }, index) => {
          console.log(`Rendering item ${index}: ${value}`); // Debug log
          return (
            <MotionButton
              key={value.split(" ").join("-").toLowerCase()}
              value={value}
              href={href}
              ariaLabel={ariaLabel}
              variants={itemVariants}
              custom={index}
            />
          );
        })}
      </motion.nav>
    </AnimatePresence>
  );
}

export default NavBar;
