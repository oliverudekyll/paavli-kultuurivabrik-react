function HeroBackground({ docX, docY }) {
  const mouseX = (-docX / window.innerWidth) * 0;
  const mouseY = (-docY / window.innerHeight) * 0;
  return (
    <span
      style={{ backgroundPosition: `${mouseX}px ${mouseY}px` }}
      className="hero__background"
    ></span>
  );
}

export default HeroBackground;
