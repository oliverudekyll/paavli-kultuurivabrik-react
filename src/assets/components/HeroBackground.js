function HeroBackground({ docX, docY }) {
  const mouseX = -docX / window.innerWidth;
  const mouseY = -docY / window.innerHeight;
  return (
    <span className="hero__background">
      <img
        style={{ transform: `translate(${mouseX}%, ${mouseY}%)` }}
        className="hero__background-img"
        src="../assets/images/hero-image.webp"
      ></img>
    </span>
  );
}

export default HeroBackground;
