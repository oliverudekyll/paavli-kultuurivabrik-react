import { Title } from "./../assets/components/Title";
import { useRef } from "react";
import { useMouse } from "react-use";
import { motion } from "framer-motion";

import "../assets/css/_reset.css";
import "../assets/css/fonts.css";
import "../assets/css/style.css";

import HeroBackground from "../assets/components/HeroBackground.js";
import Footer from "../assets/components/Footer.js";
import Header from "../assets/components/Header.js";

function App() {
  const ref = useRef(null);
  const { docX, docY } = useMouse(ref);

  return (
    <div ref={ref}>
      <Header />
      <Title />
      <HeroBackground docX={docX} docY={docY} />
      <Footer />
    </div>
  );
}

export default App;
