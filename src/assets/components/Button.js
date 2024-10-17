import React from "react";
import { motion, easeInOut, circInOut, backInOut } from "framer-motion";

const easeInOutQuart = [0.77, 0.0, 0.175, 1.0];
const easeInOutCubic = [0.645, 0.045, 0.355, 1.0];

const Button = React.forwardRef(({ value, href, ariaLabel, ...props }, ref) => {
  return (
    <motion.a
      ref={ref}
      className="button"
      href={href}
      aria-label={ariaLabel}
      {...props}
    >
      {value}
    </motion.a>
  );
});

export default Button;
