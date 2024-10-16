import { useRef } from "react";
import { useMouse } from "react-use";

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
      <div className="hero__h1-container">
        <span className="h1__logo-container">
          <img
            className="h1__logo"
            src="../assets/images/paavli-logo.svg"
          ></img>
        </span>
        <h1 className="hero__h1">Paavli Kultuurivabrik</h1>
      </div>
      <HeroBackground docX={docX} docY={docY} />
      <Footer />
    </div>
  );
}

export default App;
