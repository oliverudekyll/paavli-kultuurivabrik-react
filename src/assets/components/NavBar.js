import React from "react";
import {
  motion,
  easeInOut,
  circInOut,
  backInOut,
  AnimatePresence,
  spring,
} from "framer-motion";
import Button from "./Button.js";

const easeInOutQuart = [0.77, 0.0, 0.175, 1.0];
const easeInOutCubic = [0.645, 0.045, 0.355, 1.0];

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

const MotionButton = motion(Button);

const containerVariants = {
  hidden: { opacity: 0, y: "100%" },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 2,
      /* delayChildren: 1.75, */
      /* staggerChildren: 0.025, */
    },
  },
};

const itemVariants = {
  from: "center",
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      easeInOut,
      spring,
    },
  },
};

function NavBar() {
  return (
    <AnimatePresence>
      <motion.nav
        key="nav"
        className="footer__nav-bar"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {navItems.map(({ value, href, ariaLabel }, index) => (
          <MotionButton
            key={value.split(" ").join("-").toLowerCase()}
            value={value}
            href={href}
            ariaLabel={ariaLabel}
            /* variants={itemVariants} */
          />
        ))}
      </motion.nav>
    </AnimatePresence>
  );
}

export default NavBar;
