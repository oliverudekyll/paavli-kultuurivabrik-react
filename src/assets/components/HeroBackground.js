import { motion, easeInOut } from "framer-motion";

function HeroBackground({ docX, docY }) {
  const mouseX = (-docX / window.innerWidth) * 0;
  const mouseY = (-docY / window.innerHeight) * 0;

  const easeInOutQuart = [0.77, 0.0, 0.175, 1.0];
  const easeInOutCubic = [0.645, 0.045, 0.355, 1.0];

  return (
    <motion.span
      style={{ backgroundPosition: `${mouseX}px ${mouseY}px` }}
      className="hero__background"
      initial={{ filter: `blur(3px)`, transform: `scale(1.025)` }}
      animate={{ filter: `blur(0px)`, transform: `scale(1)` }}
      transition={{ duration: 2.1, ease: easeInOut }}
    ></motion.span>
  );
}

export default HeroBackground;
